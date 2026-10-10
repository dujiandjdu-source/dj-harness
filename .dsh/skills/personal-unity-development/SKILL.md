---
name: personal-unity-development
description: 通用 Unity 开发辅助流程，适用于程序、美术、技术美术、Shader、渲染、资产、性能和编辑器工具任务；先读取项目事实，再以可验证结果结束。
whenToUse: 用户请求检查、设计、排查或实现 Unity 工具、Prefab、Scene、Material、Shader、C#、性能或资产工作流时使用。
---

# 个人 Unity 开发辅助流程

- 先识别 Unity 版本、渲染管线（Built-in、URP 或 HDRP）、目标平台、包清单和当前工作区。
- 先只读检查项目设置、Packages、Scene、Prefab、Material、Shader、Addressables 和脚本编译状态。
- 批量修改资源前列出对象、引用关系、影响范围和恢复方式；预览与执行分开。
- 将编辑器脚本、运行时脚本、Build Pipeline 和平台验证分开说明。
- 性能结论应区分 CPU、GPU、内存、IO、Shader、GC 和资源加载，并引用 Profiler 或构建结果。
- 修改后重新检查编译、资源引用、场景加载和目标平台构建；不要把 Inspector 中的局部结果当作完整验证。

报告应区分事实、推断、风险、建议和已执行验证。
