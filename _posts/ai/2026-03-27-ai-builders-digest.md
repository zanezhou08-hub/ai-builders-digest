---
layout: default
title: "AI Builders Digest — 2026年3月27日"
date: 2026-03-27
section: ai
---

# AI Builders Digest — 2026年3月27日

---

## 📢 官方博客

### [Anthropic Engineering: Claude Code auto mode: a safer way to skip permissions](https://www.anthropic.com/engineering/claude-code-auto-mode)

Anthropic 发布了 Claude Code 的 **auto mode**，这是一个在安全性和便利性之间取得平衡的新权限模式。传统上，用户需要在 sandbox（安全但配置复杂）和 `--dangerously-skip-permissions`（零维护但无保护）之间选择。Auto mode 使用两层防护：

**输入层**：服务端的 prompt-injection probe 扫描工具输出，检测潜在的指令注入攻击

**输出层**：transcript classifier（基于 Sonnet 4.6）评估每个操作，分两阶段：快速单 token 过滤 + chain-of-thought 推理

**关键数据**：
- False positive rate: 从 8.5% 降至 0.4%
- False negative rate: 17%（在真实过度行为检测中）

这比完全没有防护的 `--dangerously-skip-permissions` 安全得多，但不应替代高风险环境中的人工审核。

**核心设计**：classifier 只看到用户消息和工具调用，剥离 assistant 的推理过程和工具输出，防止 agent 说服 classifier 做出错误决定。

---

## 🐦 X / Twitter

### [Anthropic Cat Wu](https://x.com/_catwu/status/2036852880624541938)

推出 Claude Code 的 **auto mode**，平衡了自主性和安全性。团队几乎所有人都在日常使用这个模式。现在已对 Claude for Team 用户开放！

---

### [Anthropic Thariq](https://x.com/trq212/status/2036959638646866021)

宣布 **iMessage 现已作为 OpenClaw 的 channel 可用**！这扩展了 AI agent 的消息投递渠道。

---

*Generated through the [Follow Builders skill](https://github.com/zarazhangrui/follow-builders)*
