import type { SidebarBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'

/** Personal game-development mark shared by the sidebar and workspace hero. */
export function OfficialBrandMark({ size }: SidebarBrandMarkOwnerProps) {
  return <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <rect x="2" y="2" width="60" height="60" rx="16" fill="#202b45" />
    <path d="M32 12 49 22v20L32 52 15 42V22Z M15 22l17 10 17-10 M32 32v20" fill="none" stroke="#83e3ce" strokeWidth="4" strokeLinejoin="round" />
  </svg>
}

/** Personal distribution name; provider names remain in model settings. */
export function OfficialBrandName() {
  return <span style={{ fontWeight: 650, letterSpacing: '-0.02em' }}>DJ Harness</span>
}
