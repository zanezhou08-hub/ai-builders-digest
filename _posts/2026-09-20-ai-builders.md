---
layout: default
title: "AI Builders Digest — 2026-09-20"
date: 2026-09-20
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-20

---

## 🐦 X / TWITTER 动态

今日主线：Claude Code 正式支持 AGENTS.md，一条推文收获 2.5 万+ 赞，并顺带披露了即将推出的 mods 自定义机制。另一条热门支线是 Typeface AI 的新模型 Jev 刷屏：Vercel CEO 用数据佐证其采用速度并宣布免费上线，Box CEO 演示企业级用法。此外 OpenAI 团队预热了即将到来的 keynote。

### Thariq（Anthropic，Claude Code 团队）
宣布 Claude Code 自 v2.1.277 起支持 AGENTS.md：文件夹里没有 CLAUDE.md 时，Claude 会自动查找并使用 AGENTS.md，可在 /config 中切换该行为。这条推文收获 25553 赞、2000+ 转发。他补充说明：AGENTS.md 支持基于 Claude Code 即将推出的 mods 机制（自定义 harness 的方式），这是一个内置 mod，之后用户也能构建自己的项目指令定制版本，并公开了该 mod 的源码。
https://x.com/trq212/status/2101009392611278961
https://x.com/trq212/status/2101009393731223817
https://x.com/trq212/status/2101009395052343462

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
预热即将到来的 keynote：他和 Romain Huet、Sam Altman 一起准备发布内容，称最难的部分是想清楚怎么向大家讲清楚，因为好东西多到有点离谱、一个接一个接踵而至。下周会先放出一些内容，不必等太久，未来几个月还将看到他们一直在做的新东西如何逐步整合成型。该推已获 3650 赞。
https://x.com/thsottiaux/status/2101157729037586694

### Guillermo Rauch（Vercel CEO）
给出一个标志性数据：Vercel AI Gateway 上开放模型 token 量占比或创单日纪录，开放模型 78.4% vs 闭源 21.6%。按消费金额看，第 3、4 名是 Moonshot AI 和 DeepSeek，加上 Z.ai 后三家合计消费额超过 OpenAI（第 2 名）。他注明这是跨服务商的推理消费（主要发生在美国），并非直接流向开放权重实验室的收入。另两条谈 Jev（Typeface AI 出品）的采用曲线：数据和轶事都令人震惊，人人都在用，既是产品本身好，也是「AI 太贵太慢」这种时代情绪的下游效应，人们急于优化并把 AI 塞进更多场景；他还顺势宣布 Jev 免费上线 Vercel，「知道这个周末干什么了」。
https://x.com/rauchg/status/2101186741042663579
https://x.com/rauchg/status/2101079472732848510
https://x.com/rauchg/status/2101116978677285241

### Aaron Levie（Box CEO）
演示 Box 与 Jev 结合的企业级用法：从 Box 拉取一份事故报告，让模型判断是否面向客户、严重程度如何，自动把文件归入 escalate、monitor 或 review 文件夹，并写入对应的元数据模板，全程近乎瞬时、成本几乎为零。他认为 Jev 这类模型非常适合 agent 在工作流中做秒级决策、数据分类和判断类任务，保险理赔、合同管理、贷款审批、安全审查、客户日志分析都是想象空间，「绝对是一类全新的 AI 用例」。
https://x.com/levie/status/2101007708044574906

### Nikunj Kothari（FPV Ventures 合伙人）
给 Jev 热潮添了一把火：上线 Jevable 网站，汇集 X 上所有有趣的 Jev 演示，可按类别筛选，开发者也可以用 + 按钮提交自己的项目。此前他还演示过让 Jev 按多项标准给 3000 条儿童零食打分，28 秒完成、成本仅 0.11 美元。
https://x.com/nikunj/status/2101077053567332618
https://x.com/nikunj/status/2101006585481073093

### Peter Yang（AI 实战教程创作者）
力捧 Meta 的个人 agent「Muse」，称其是自己用过最好的个人 agent，一年帮他在有线电视和手机账单上省下 800+ 美元，「对一个免费 AI agent 来说是疯狂的价值」，并放出视频讲解 10 个最爱用例（个性化晨间新闻简报、习惯追踪、让 Muse 致电客服谈账单等）。他还分享了一段 Muse 致电 Comcast 谈判、一年省 288 美元的通话记录，感叹大多数公司的客服热线根本没为 agent 时代做好准备。
https://x.com/petergyang/status/2101033599319613533
https://x.com/petergyang/status/2101083891507593576

### Peter Steinberger（OpenClaw 与 OpenAI）
展示他团队的 roboclaw：跑在团队服务器上、常驻 Discord、与 gpt-live 对话，并且清楚自己正在调度哪些会话，开会时可以直接向它询问当前和历史会话的上下文。两个技巧分享：让其他 agent 在 PR 合入前「清理 slop」；打开主侧栏让 claw 重新整理你的会话列表。他还提到 CUA 同样适用于这些场景，agent 可以比纯截图方式更高效地工作。
https://x.com/steipete/status/2101141707375227372
https://x.com/steipete/status/2101139037801283997
https://x.com/steipete/status/2101115690719809873

### Dan Shipper（Every CEO）
为被质疑「造假」的 AI 演示发声：他承认 X 上确实存在浮夸的 AI demo，但把 jackcheng 的作品称为「假的」令人难过，称对方是他共事过的人里最聪明、最诚实、最看重手艺的人之一，这个 demo 既真实，也是对未来的一次有趣预览，「这么说话可不好看」。
https://x.com/danshipper/status/2101155521818476693

### Zara Zhang（独立开发者）
一条获 155 赞的观察：当你消费的内容大多是 slop 时，你很难不产出 slop。想修复输出，先修复输入。
https://x.com/zarazhangrui/status/2101123389528457596

---

## 🎙️ 播客

### No Priors：为什么扩散模型会赢得 AI 推理之战（Inception 联合创始人兼 CEO Stefano Ermon）

**核心结论：** 自回归模型推理时逐 token 串行生成，极度吃内存带宽、与 GPU 的并行能力天然错配；扩散模型生来并行处理大量 token，推理负载与训练同构。按「苦涩的教训」，最终胜出的永远是更并行的方案。

斯坦福教授 Stefano Ermon 是扩散模型的父亲之一：2019 年他与博士生 Yang Song 提出的 score-based 生成模型成为现代扩散模型的底层技术，后来的 Stable Diffusion、Midjourney 都源于其实验室；FlashAttention 出自他的组，DPO 也始于他组里的一个轮转项目。2024 年他的论文首次证明扩散语言模型能在 GPT-2 规模上追平自回归模型的困惑度，同时生成快约 10 倍，他随即创立 Inception，专做商业级扩散 LLM。

如今成立约两年、约 50 人的 Inception 已将 Mercury 系列模型投入生产：基准测试对标前沿实验室的速度优化型号，同时显著更快。由于 vLLM、SGLang 都跑不了扩散 LLM，他们自研了服务引擎，这本身也成了技术护城河。语音 agent 公司 OpenCall 原本靠 Cerebras 定制芯片换取速度，改用 Mercury 后在 NVIDIA GPU 上获得同等速度，可用性更高、成本更低。

Ermon 认为扩散模型还有两个被低估的优势：一是更易控制，粗到细的生成过程允许约束和奖励函数在中途引导生成，而不必等整个对象生成完再打分；二是数据效率更高，去噪训练天然相当于数据增强。按他对 OpenRouter 任务分类的估算，约 20% 到 30% 的工作负载对延迟极其敏感，这是扩散 LLM 触手可及的市场。公司组织上分为产品平台组和下一代模型研发组（训练、RL、推理），他说瓶颈是算力而非人手；团队大量使用前沿实验室的模型加速研发，但「人类的独创性仍然至关重要」，尤其是在剪枝研究方向这件事上。

视频：https://www.youtube.com/@NoPriorsPodcast

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
