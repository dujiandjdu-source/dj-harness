---
description: "DJ Harness 个人桌面版的启动、API 配置和能力边界。"
kind: "user-guide"
---

# DJ Harness 个人桌面版

[English](personal-harness.md) | 中文

## 概述

DJ Harness 保留上游的 agent loop、工具、会话、审批、计划和 Skills，以个人游戏开发工作流替换登录入口和品牌呈现。首次启动直接进入工作区，没有 API 密钥时仍可管理设置和选择项目。

## API 配置

打开设置中的模型页面，分别填写 OpenAI、Grok (xAI) 或 DeepSeek 的 API 密钥，启用所需模型，并在会话模型选择器中选择对应路由。OpenAI 和 xAI 使用随适配器安装的模型目录；可编辑模型列表或添加 OpenAI 兼容的自定义提供方，填写 endpoint、协议与模型 ID。模型能力由实际提供方决定，切换不保证上下文长度、图像输入或工具协议完全相同。

密钥通过本机 credentials 服务保存，配置只保存 OPENAI_API_KEY、XAI_API_KEY、DEEPSEEK_API_KEY 等引用。密钥不会被写入本仓库，也不随应用发布。OpenAI 接入使用 API 平台密钥，ChatGPT 网页订阅不充当 API 凭据。

## 游戏开发工作流

桌面应用在每个工作区发现随包的 personal-ue-development 和 personal-unity-development Skills，仍优先遵循当前项目的同名工作流和 AGENTS.md。UE 工作流覆盖程序、技术美术、材质、Shader、资源与性能分析，Unity 工作流覆盖对应的工程和渲染管线问题。先检查实际引擎版本，当前不承诺任何特定 UE6 API。

## 本地文件与隐私

Windows 运行 win-unpacked 目录里的 DJ Harness.exe，保留整个目录；单独复制 EXE 不可运行。默认 Harness 数据位于 Electron 用户目录的 harness 子目录；显式 DSH_HOME 可以覆盖位置。API 密钥和会话属于本机数据。个人版默认停用 DeepSeek 账户、官方日志上传、产品及会话遥测、官方插件清单、官方联网搜索和上游强制更新；用户选择的模型提供方仍会接收模型请求。

## 验证边界

Skills 提供工作流指导，当前没有连接正在运行的 UE 或 Unity 编辑器。源码构建与适配器模拟测试不能证明真实 API 密钥可用，也不能替代引擎加载、PIE 或打包验证。GitHub 发布需要用户自己的仓库及可用的认证，不向上游仓库推送。
