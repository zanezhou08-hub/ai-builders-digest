---
layout: default
title: "AI Builders Digest — 2026-09-28"
date: 2026-09-28
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-28

---

## 🐦 X / TWITTER 动态

今日主线：No Priors 深度对谈「扩散模型之父之一」、Inception CEO Stefano Ermon，论证扩散模型将在 AI 推理之争中胜出；Vercel CEO Guillermo Rauch 发起「Reject non-understanding」，警告 AI slop 正在摧毁「阅读」本身；Codex 团队的 Thibault Sottiaux 宣布用量重置全部推送完毕（1.39 万赞）；Anthropic 的 Thariq 回顾用 Claude Code 做视频这一年；Peter Yang 连发体验：Claude 限额「基本无限」、Google 新音频 API 上手。

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
周五晚 Codex 事故正式收尾：宣布用量重置已全部推送完成，「就这些了，祝大家周末愉快」。这条简短公告拿下 1.39 万赞、1872 条回复，是今日全场热度最高的一条。
https://x.com/thsottiaux/status/2103911959544610829

### Guillermo Rauch（Vercel CEO）
提出口号「Reject non-understanding」：「slop 手雷」不只是代码和 PR 的问题。当低质量、未经核实的 AI 文本被源源不断扔过来，真正的风险是「阅读」这件事被人整体放弃。他举了正在疯传的例子：一个号称「编译器改动带来性能提升」的热帖，PR 描述里 AI 自己都写明功劳属于算法和数据结构的变更，而非编译器。他的立场一句话：我要 AI 用于理解宇宙、增强人类的认知与创造力，而不是制造更多的噪音（1715 赞）。
https://x.com/rauchg/status/2103939888513274147

### Thariq（Claude Code 团队，Anthropic）
回顾一年前发布的最早一批「用 Claude Code 做视频」的帖子：当时每个视频都要和 Claude 反复迭代、逐个指出错误的细节才能成片。一年后回看，感慨「事情进步得太快了」（1101 赞）。
https://x.com/trq212/status/2103897226154328502

### Peter Yang（AI 实战教程作者）
连发三条：先惊喜吐槽 Claude 限额「从几乎不可用变成了基本无限」（422 赞）；然后用 Gemini audio API 做了个教他会话式日语的小应用，10 节课、每课 10 个短语；还首次上手 Google 的 Antigravity 试新音频 API，顺带好奇「反馈该提给谁」（139 赞）。
https://x.com/petergyang/status/2104066667361992892
https://x.com/petergyang/status/2104059554204188833
https://x.com/petergyang/status/2104003094615052443

### Garry Tan（YC 总裁兼 CEO）
晒出他目前修线上 bug 的最爱工作流：Capy 搭配 GStack /autoplan，用 GPT-6 medium reasoning 直接处理生产问题（152 赞）。另有一条被广泛传播的三词短语「Be chalant，别 LARP」（499 赞），以及一条号召大家通过 Garry's List 线下聚会组织起来、推动教育改良的帖子。
https://x.com/garrytan/status/2103989902476259702
https://x.com/garrytan/status/2103932595956506885
https://x.com/garrytan/status/2104068570938499350

### Peter Steinberger（OpenClaw 作者）
转发了一个让他惊叹的演示并感叹：「现在我明白为什么有人谈论 AGI 了。这也太聪明了！」（1609 赞）
https://x.com/steipete/status/2103883264054505493

### Dan Shipper（Every CEO）
玩了把大的：先把柏拉图《普罗泰戈拉篇》改写成小说体，再让 Opus 5.5 把它拍成短片，已陆续放出前两幕（60 赞）。
https://x.com/danshipper/status/2103850415930708437
https://x.com/danshipper/status/2103894152316645620

---

## 🎙️ 播客

### No Priors：《为什么扩散模型将赢得 AI 推理之争》（嘉宾：Inception 联合创始人兼 CEO Stefano Ermon）
本期一句话：自回归模型的逐 token 生成天生串行、访存受限，与 GPU 架构错配；扩散模型生来并行，把推理负载变成和训练一样的并行矩阵运算，这才是「智能每瓦特、每美元」的决胜点。Ermon 的结论相当鲜明：「苦涩的教训是，更并行的方案最终会赢。」

Ermon 是斯坦福教授、公认的「扩散模型之父之一」。2019 年他和博士生 Yang Song 提出 score-based 生成模型，用神经网络迭代去噪，奠定了现代扩散模型的基础，如今图像、视频、音乐乃至蛋白质设计的最强模型几乎都建立在扩散之上。2024 年他的实验室取得关键突破：首次在 GPT-2 规模上让扩散语言模型做到与自回归模型完全相同的 perplexity，而生成速度快约 10 倍。随后他创立 Inception，把这项技术推向商用规模。

落地进展是本期最硬核的部分：Mercury 系列模型在基准上已比肩前沿实验室的速度优化型号，同时显著更快，且已在生产环境服务真实客户。由于 vLLM、SGLang 都跑不了扩散语言模型，他们自研了整套 serving 引擎。一个代表性客户是语音 agent 公司 Open Call：此前靠 Cerebras 定制芯片换取低延迟，改用 Mercury 后在普通 NVIDIA GPU 上拿到同等速度，可用性更高、成本更低。

除了速度，他还点出两个被低估的潜力：扩散模型粗到细的生成过程允许在生成中途用奖励函数和约束引导方向，可控性天生更强；去噪训练天然等价于数据增强，模型可能更省数据。他估计当前 20% 到 30% 的工作负载对延迟极度敏感，这只是下限。代价他也坦承：生态不成熟，serving、SFT、RLHF、RL 全套都得自研，且为守住 IP 选择不开源。顺带一提，Flash Attention 和 DPO 都出自他的组，他以此论证学术界依然是「逆向下注」的沃土。
https://www.youtube.com/@NoPriorsPodcast

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
