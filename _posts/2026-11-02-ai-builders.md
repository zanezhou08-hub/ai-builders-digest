---
layout: default
title: "AI Builders Digest — 2026-11-02"
date: 2026-11-02
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-11-02

---

## 🐦 X / TWITTER 动态

### Swyx（Latent Space 主播 / smol.ai）
两条相关动态引出一场"effort level 之战"：Karpathy 在最新项目 Hackertube（今日发布）里用的是 Opus 5.5 的 medium effort。Swyx 评价：对模型推理强度（effort levels）持强烈观点，就像我们这个时代的 tabs vs spaces 之争——按个人口味调就行，"虽然我的口味显然比你的高级"。他同时站队"低强度阵营"：对吞吐受限的人来说，low effort + critique loop（低推理 + 批判回路）胜过 superultramaxhighwhatever，并附上了自己的 swyxio/skills/babysit-runs 技能。
https://x.com/swyx/status/2116773135668404286
https://x.com/swyx/status/2116642586387730593

### Thibault Sottiaux（OpenAI Codex & ChatGPT 负责人）
昨日预告的谜底揭晓第一步："Banked 1/2"——reinstall 系列连续第 26 天，这条两字推文拿下 6582 赞、1024 回复，评论区已在疯狂猜测"banked"指的是用量结转还是新功能。另一半答案预计今明两天揭晓。
https://x.com/thsottiaux/status/2116692529970311254

### Aaron Levie（Box CEO）
一条被广泛引用的"AI 使用试金石"（618 赞）：如果你用 AI 做出来的东西，是 AI 出现之前你也能做出来的，那你对 AI 的使用大概率还不够激进。六个月前 AI 最多帮你把原本要做的东西做得快一点；而现在，与 AI 协作的产出应当大幅超越你过去所能达到的上限——原型不该只是能动，而该拥有以前根本做不出来的功能；研究应当穷尽每个维度上的一切事实；业务流程应当以全新的方式运转并从所有历史失败中学习。我们正进入 AI 在大多数维度上比我们聪明的时代——"把它和我们擅长的事结合，你会得到质变级的成果"。
https://x.com/levie/status/2116652002830963114

---

## 🎙️ PODCASTS

### Latent Space：Using Agents for Long-Horizon Financial Work — 对话 Arca AI 平台负责人 Aman Singh

Arca 是一家刚融了 6400 万美元的 AI-native 财富管理公司（AI Engineer New York 大会现场采访）。Aman Singh 领导 AI 平台团队，他们的目标不是卖软件，而是"用 AI 直接运营公司本身"。

- **核心定位：不是 SaaS，而是公司本体。** AI 在 Arca 的角色不是取代理财顾问，而是取代顾问周围的所有工作。客户从不直接接触 AI，他们体验到的只是"这个行业从未有过的服务水准"——由人类顾问的共情传递。金句："在 Arca，是 agent 在 prompt 人，而不是人在 prompt agent"——一套 24/7 主动运转的服务。

- **模型策略：内部基准说了算。** 目前主力是 Claude，历史上从 Gemini 换到 OpenAI 再到 Anthropic。原则是 model-agnostic：外部基准再好看也不算数——比如 Luna 外部评测很风光，实际用起来太慢太贵。按任务复杂度分层调用：税务分析这种重活用最高档模型，后台杂务用低档。

- **十天长周期的 agent 工作流。** 一个真实场景：客户邮件发来巨额税单，agent 全自动完成"钱在哪里、怎么变现 10 万美元最优"的分析，但绝不自动执行任何资金操作——与托管方有深度 API 集成，却对"动钱"和"直接联系客户"设了严格的人类审批护栏。新信号（比如中途的来电）会唤醒全新 agent，靠内部记忆系统快速对齐状态：每个客户"现在在办什么、谁负责什么、下一步是什么"，还有一个每天运转的"做梦（dreaming）"反思流程来更新记忆、支撑长周期任务。

- **安全与合规：护栏全部确定性。** 每次写数据库都有快速 LLM 做验证；邮件、文档、电话这些提示注入高危入口在边缘做注入检测；数据出系统前跑确定性 PII 检查 + 小模型共识防外泄。合规方面"审计即默认"：agent 和人类的每一个动作都产生变更日志。甚至合规水平因此超过人工时代——AI 在揪出文件里最小的违规表述上是不知疲倦的（比如"绝不许承诺收益率"、不许出现裸账号）。

- **反馈回路与 harness 自主权。** 员工的每次编辑/取消都必须附带理由，全部变成 eval；每晚用 meta agent 审查真实轨迹、提出 harness 改进建议——但 prompt 变更上线前必须有人类工程师把关，因为"agent 改 prompt 会改得很恶心，每个小修复都想吞掉整个 prompt"。对 Anthropic/OpenAI 的模型很看好，但对 managed agents 产品警惕：把记忆和运营知识交给别人托管，等于交出"拥有智能"这件事本身。

- **真实战果。** 一位即将签约的客户，agent 通读其全部对账单后发现：现有顾问收了 1500 美元/年还藏着客户不知情的额外费用，而且根本不是受托人（fiduciary）——没有义务为客户利益行事。这种颗粒度的审查，人类规模化做不到，但它是 Arca agent 的默认行为。

金句："Agents prompt people more than people prompt agents——这是一项 24/7 主动替客户运转的服务。"

https://www.youtube.com/@LatentSpacePod

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
