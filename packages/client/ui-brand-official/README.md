---
description: "Personal DJ Harness sidebar and hero branding."
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-brand-official

English | [中文](README.zh.md)

## Summary

This fork uses the existing brand package identity to display DJ Harness and a cube mark in the sidebar and conversation hero, in every client build profile. Branding has no model or credential effects.

## Use this package

Mount the plugin in the browser roster. It requires slots and waits for each declaring slot. Registering another brand occupant in the same single slot requires disabling this plugin first.

## Understand the implementation

All registrations are Cordis effects and disappear on plugin disposal. The name and SVG mark live in src/client/Brand.tsx; the desktop icon is a separate asset. The browser title is selected by the Web build, independently of the slots.

## Model Experience

### Tool effect

None; this package registers no tools.

### Token effect

None; presentation does not change prompts.

### KV Cache effect

None; presentation does not change provider requests.

## Known Limitations and Deferred Work

Package identity is retained for upstream dependency compatibility; it is not an official DeepSeek distribution. Name changes also require updating desktop packaging and shell labels.

### Dev Note

Brand tests verify local builds, late slot declaration, requested icon sizes and disposal.
