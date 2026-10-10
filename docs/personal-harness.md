---
description: "DJ Harness personal desktop startup, API configuration and capability limits."
kind: "user-guide"
---

# DJ Harness personal desktop

English | [中文](personal-harness.zh.md)

## Summary

DJ Harness retains the upstream agent loop, tools, sessions, approvals, plans and Skills, replacing the sign-in entry and branding with a personal game-development workflow. First launch opens the workspace directly. Without an API key, settings and project selection remain available.

## API configuration

Open Models in Settings, enter the OpenAI, Grok (xAI) or DeepSeek API key, enable the models you need, and choose a route in the session model picker. OpenAI and xAI use the installed adapter catalog. Edit the model list or add an OpenAI-compatible custom provider with an endpoint, protocol and model ID. Capabilities depend on the provider: switching does not guarantee identical context capacity, image input or tool behavior.

The local credentials service stores keys; configuration stores references such as OPENAI_API_KEY, XAI_API_KEY and DEEPSEEK_API_KEY. Keys are excluded from the repository and releases. OpenAI requires an API platform key; a ChatGPT subscription is not an API credential.

## Game development workflows

Every desktop workspace discovers bundled personal-ue-development and personal-unity-development Skills, while same-named project workflows and AGENTS.md retain precedence. Unreal guidance covers programming, technical art, materials, shaders, assets and performance; Unity guidance covers corresponding project and rendering-pipeline tasks. Check the actual engine version first. This distribution promises no specific UE6 API.

## Local files and privacy

On Windows, run DJ Harness.exe in win-unpacked and keep the entire directory; copying the EXE alone does not work. Harness data defaults to the harness subdirectory of Electron user data; explicit DSH_HOME overrides it. API keys and sessions are local data. The personal distribution disables DeepSeek accounts, official session uploads, product and session telemetry, official inventory, official web search and vendor mandatory updates by default. Selected model providers still receive model requests.

## Validation limits

Skills supply workflow guidance. This distribution does not connect to a running Unreal or Unity editor. Source builds and adapter mock tests do not establish real API-key availability and do not replace engine loading, PIE or packaging checks. GitHub publication requires the user's own repository and authentication; nothing is pushed to upstream.

## Build the personal preview

Install dependencies with pnpm install --frozen-lockfile. If apps/desktop/.env.windows does not exist, copy apps/desktop/.env.windows.personal.example there. Keep an existing file intact. Run pnpm --filter @deepseek-ai/dsh-desktop run package:win:x64:unsigned --build-version followed by the exact confirmed build version. The Desktop packaging policy requires confirming that version before each packaging run. API keys are unnecessary for building.
