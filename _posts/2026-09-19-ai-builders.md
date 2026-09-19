---
layout: default
title: "AI Builders Digest — 2026-09-19"
date: 2026-09-19
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-19

---

## 🐦 X / TWITTER 动态

今日主线：Anthropic 把 Projects 体验带进 Claude Code——一个项目一个总控 agent，管理长期记忆、统一调度会话和子任务。从官方账号到 Claude Code 核心团队，全员齐发。另一条支线是 Google Labs 发布面向家庭的 AI agent「CC」。

### Claude（Anthropic 官方账号）
连发三条讲清 Projects 的关键细节：Threads 跑在云端，电脑离线也能继续干活，但暂时还碰不到本地文件、工具和内网，本地支持「很快就来」；项目随时间累积，每个 thread 都会读写共享记忆，Claude 能记住「发布改到周五了」或「动 billing 服务前该先问谁」；项目 Library 保存你上传的文件和 Claude 自己创建的文件。Pro 和 Max 的现有 projects 保持原样，随灰度逐步升级，也可加入 waitlist 提前体验。
https://x.com/claudeai/status/2100632688625348890
https://x.com/claudeai/status/2100632687316730327
https://x.com/claudeai/status/2100632684074549309

### Boris Cherny（Anthropic，Claude Code 创造者）
两条高热推文（合计 4000+ 赞）谈 Projects 对个人工作方式的改变：他不再管理会话，想法来了直接发出去，Claude 自己把内容拆进不同 thread，项目记住他的工作习惯。「Projects 不只是改变了我用 Claude 的方式，而是改变了我写代码的方式」，现在他大量的编码都在 Projects 里完成。
https://x.com/bcherny/status/2100669598995816511
https://x.com/bcherny/status/2100639991244427490

### Cat Wu（Anthropic，Claude Code 与 Cowork 团队）
解释新体验的核心：Projects 里 Claude 统一协调你的所有会话，可以站在更高的抽象层级干活——批量派发一组任务就走人，Claude 掌握所有工作的上下文，随时能给出汇总的状态更新，而且拥有随使用演进的长期记忆。未来几周灰度放量。
https://x.com/_catwu/status/2100641163120423057

### Thariq（Anthropic，Claude Code 团队）
技术视角拆解：Projects 把某种「单 agent per project」的架构带进 Claude Code——每个项目一个总控 agent 负责记忆管理，按需拉起子 agent 执行任务，还能设成主动式、按计划定时干活。「比一堆散落的会话舒服多了」。
https://x.com/trq212/status/2100638355872706571

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
抛出一个引发 5500+ 赞、1800 条回复的社区话题：有没有人试过让 Astra 和 Fable 在「完美 styleguide」上达成一致，然后通过 Web MCP 托管出去？评论区已经变成各家 coding agent 风格控制能力的大型实测现场。
https://x.com/thsottiaux/status/2100645454245720513

### Google Labs（Google 官方）
发布面向家庭的 AI agent「CC」：最多可添加 5 位家庭成员，早晨发送共享的「Your Day Ahead」简报邮件，自动同步全家日程与待办到共享 Google Calendar 和 Tasks，还能在 Google Chat 里协调任务（排每周菜谱、列开学采购清单），甚至代填许可单等文书（在你授权下完成）。CC 会区分「全家通用」和「个人专属」的信息，比如家庭购物清单 vs 个人饮食禁忌。现已开放 waitlist（仅限美国，18+）。
https://x.com/GoogleLabs/status/2100653821907366366

### Josh Woodward（Google 副总裁，负责 Google Labs、Gemini App 与 AI Studio）
为自家新品站台：称 CC 在自己家用得很好，适合有孩子的家庭；另外安利大家用手机上的 Gemini Notebook，「还错过的话你亏大了」，并分享了一个很酷的用户故事。
https://x.com/joshwoodward/status/2100665648825483726
https://x.com/joshwoodward/status/2100616682431807860

### Guillermo Rauch（Vercel CEO）
给出一个大胆判断：明年产出的软件将超过计算史上所有软件的总和。Vercel 花了 10 年达到 10 亿次部署，而最近 10 个月就新增了 14 亿次——其中很多是微型、个人化甚至一次性的软件（HTML artifact、报表、定价计算器、幻灯片），也有复杂的应用、agent 和平台。他透露部署速度是团队的执念：从部署上传、分配域名到全球生效已压缩到 1 秒，且 CDN、防火墙、不可变部署、可观测性、回滚一个不少。另两条：新推的 vercel --turbo --prod 会在你催 agent 快速修 hotfix 时自动选用最快的构建机；还玩梗宣布「Vercel is the Vercel for Java」。
https://x.com/rauchg/status/2100698591417499972
https://x.com/rauchg/status/2100682030170489160
https://x.com/rauchg/status/2100745015362552312

### Aaron Levie（Box CEO）
判断 agent 已占推理量的大头，未来一两年将逼近全部：全球大部分 token 将由 24/7 后台执行任务的 agent 消耗——审读所有代码变更保障软件安全、处理工作流数据、承担招聘与客户挖掘的调研、审查所有系统的事件流和日志、代办个人事务。新 agent 上线的速度丝毫没有放缓，「现在是做推理和基于此构建的最不可思议的时代」。
https://x.com/levie/status/2100799668573946191

### Nikunj Kothari（FPV Ventures 合伙人）
公开自己的「自动驾驶公司」实验：折腾一年多、试用大量产品都不满意，干脆自己带着 Claude 建了一个——nosugarforkids.com，只收录健康儿童零食的目录站，可以对话获取学校午餐和零食盒推荐，并按营养成分做了分级。自治侧由一个 Claude agent 每天醒来执行：检查新品、下架失效产品、找内容选题、查 dataforSEO 和 Search Console 表现、撰写编辑新内容、控制质量避免 slop，最近还新增了主动联系媒体求外链。零外链、零社媒声量的情况下，站点已自然增长到日均约 6000 曝光、60 次点击。该站还配了完整的 MCP 和 WebMCP，可以把 agent 直接指过去。
https://x.com/nikunj/status/2100714665571737885
https://x.com/nikunj/status/2100718806004064730

### Garry Tan（Y Combinator 总裁兼 CEO）
点评创业公司 Memorable：用 embedding 而不是堆更多 token 来优化记忆，「这是一种强大的新记忆实现路径」。另外两条热门转发：「未来已经到来，我们要做的是选择它并更快传播它」（1300+ 赞），以及警示「许愿需谨慎，这也是为什么我们要对齐的是人类而非其他任何目标」。
https://x.com/garrytan/status/2100668489178456268
https://x.com/garrytan/status/2100612808568172830
https://x.com/garrytan/status/2100636443127210112

### Aditya Agarwal（SPC普通合伙人，Bevel Health 联合创始人，前 Facebook 早期工程师、Dropbox CTO）
力挺 Goodfire：称其是做「对齐与安全」这件事上领先的非前沿实验室公司，方法正确，「具有世代级的重要性」。
https://x.com/adityaag/status/2100746235426836708

### Amjad Masad（Replit CEO）
转发并评论推理基建需求：转发内容配文「这就是为什么我们需要天量数据中心（值得）」，继续押注算力扩张的长期逻辑。
https://x.com/amasad/status/2100829093923320083

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
