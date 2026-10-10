# Personal Game Development Harness

本仓库保留 DeepSeek Harness 的插件和 profile 机制，并通过项目级 `.dsh/skills` 注入个人的通用 Unreal Engine 与 Unity 工作流。

## 当前改造范围

- `personal-ue-development`：UE 工程检查、技术美术、程序、材质、Shader、性能和编辑器工具的通用流程。
- `personal-unity-development`：Unity 工程、渲染管线、资源、Shader、性能和编辑器工具的通用流程。

这些 skill 是可复用工作流，不包含某个项目的绝对路径、版本锁定或自动删除资产的权限。它们会先要求只读检查、预览影响范围和实际验证。

## 本地运行

在仓库根目录安装依赖后，使用本地 Harness home：

```powershell
$env:DSH_HOME = 'D:\Harness\deepseek-harness\.dsh-home'
pnpm dsh web --no-open
```

也可以直接运行仓库根目录的 `start-personal-harness.ps1`。启动时会打印带访问令牌的本地 URL；请使用该完整 URL 打开 Web UI。关闭启动终端会停止本地服务。

默认 Web UI 地址为 `http://127.0.0.1:3080`。从仓库根目录启动时，Harness 的 filesystem skill provider 会发现 `.dsh/skills`，因此项目 skill 可在会话中按需加载。也可以在 Web UI 中输入 `/personal-ue-development` 或 `/personal-unity-development` 进行显式调用。

## 设计边界

本次改造没有修改 agent loop，也没有授予新的 Shell、文件系统或 Unreal 权限。要让 Harness 实际操作 UE/Unity，需要后续增加引擎适配器或 MCP/本地服务；当前 skill 负责稳定工作流程和输出口径。
