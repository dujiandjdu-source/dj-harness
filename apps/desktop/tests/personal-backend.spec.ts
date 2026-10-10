import { describe, expect, it } from 'vitest'
import { connectPersonalDesktop } from '../src/personal-backend.ts'

/** No-key startup must consult local metadata only, never vendor account RPC. */
describe('personal API-first desktop metadata', () => {
  it.each([false, true])('opens with configured-key metadata %s without an account service', async (configured) => {
    const calls: string[] = []
    const send: Parameters<typeof connectPersonalDesktop>[1] = async (_url, init) => {
      if (init?.method !== 'POST') return new Response('local application')
      const request = JSON.parse(init.body as string) as { rpcId: string; method: string }
      calls.push(request.method)
      const value: unknown = request.method === 'settings/describe'
        ? { namespaces: [
          { ns: 'locale', value: { preference: 'zh-CN' } },
          { ns: 'llm-pi-ai', value: { providers: { xai: { apiKeyEnv: 'XAI_API_KEY' } } } },
        ] }
        : request.method === 'llm/listConfigurableProviders'
          ? [{ settingsNs: 'llm-pi-ai', settingsPath: ['providers', 'xai'] }]
          : request.method === 'credentials/describe'
            ? { XAI_API_KEY: { configured, writable: true } }
            : (() => { throw new Error(`Unexpected RPC: ${request.method}`) })()
      return Response.json({ type: 'server-response', rpcId: request.rpcId, result: { ok: true, value } })
    }
    const backend = await connectPersonalDesktop('http://127.0.0.1:12345/?token=test', send)
    expect(await backend.read()).toMatchObject({ hasApiKey: configured, loggedIn: false, localePreference: 'zh-CN' })
    expect(await backend.readLocalePreference()).toBe('zh-CN')
    expect(calls.every(method => !method.startsWith('account/') && !method.startsWith('productAnalytics/'))).toBe(true)
    expect(calls).not.toContain('credentials/get')
  })
})
