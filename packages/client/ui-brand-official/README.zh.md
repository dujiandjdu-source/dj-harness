---
description: "DJ Harness 个人版的侧栏与首屏品牌呈现。"
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-brand-official

[English](README.md) | 中文

## 概述

此 fork 沿用现有品牌包标识，在所有客户端构建 profile 的侧栏和会话首屏显示 DJ Harness 与立方体图标。品牌呈现不影响模型或凭据。

## 使用本包

在浏览器插件名单中挂载本插件。它依赖 slots，并等待各插槽声明。如需在同一单一插槽注册另一品牌，先停用本插件。

## 理解实现

注册均属于 Cordis effect，插件卸载后移除。名称和 SVG 位于 src/client/Brand.tsx，桌面图标是独立资源。浏览器标题由 Web 构建选择，不随插槽更新。

## 模型体验

### 工具影响

无，本包不注册工具。

### Token 影响

无，界面呈现不改变提示词。

### KV 缓存影响

无，界面呈现不改变提供方请求。

## 已知限制与延期工作

保留包标识是为了兼容上游依赖，本应用不是 DeepSeek 官方发行版。更名还需更新桌面打包与外壳标签。

### 开发备注

品牌测试覆盖本地构建、插槽延迟声明、图标尺寸与卸载清理。
