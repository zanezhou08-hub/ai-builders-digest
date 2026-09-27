---
layout: default
title: "AI Builders Digest — 2026-09-27"
date: 2026-09-27
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-27

---

## 🐦 X / TWITTER 动态

今日主线：OpenAI 跌宕一日。Codex 宕机抢修后全面回归，所有付费用户获赠用量重置（1.28 万赞）；Sam Altman 同步披露 agent 联网使用的审查进展，称 Hugging Face 事件仍是最严重一例。Anthropic 侧，Boris Cherny 晒出 Slack agent「Tag」包办他一半 PR 的日常，Thariq 深挖 effort 参数的正确用法。基础设施层，MAD Podcast 对谈估值 300 亿美元的 VAST Data CEO，AI cloud 客户的存储需求从 500 PB 一路追加到 2 EB；此外 Replit 收购 Atta 团队，Vercel CEO 宣称企业 SaaS 的采购标准正在变成「对 agent 的友好度」。

### Boris Cherny（Claude Code 创建者，Anthropic）
分享他的 Slack agent「Tag」的日常战绩：每天写掉他一半以上的 PR，包办约 100% 的数据分析，并自动修复大部分产品反馈与 bug；它不是普通的 Slack 机器人，而是主动、可编程、有记忆、能接入各类连接器，配合 Opus 5.5 与 Fable 5.1 判断力相当强。他公开了自己常用的 prompt：让 Claude 在频道里给已解决的线程打 ✅；端到端复现频道里每个 bug，跑通完整应用后直接提 PR 并打给对应团队 review；用 workflow 头脑风暴约 100 个假设来解释异常数据，花约 1000 万 token 深挖验证，最后画出图表；把某段代码的原理做成互动小游戏，再配一套给团队讲解的幻灯片（1096 赞）。随后转发用户作品并说：迫不及待想看你们造出什么。
https://x.com/bcherny/status/2103538666597691552
https://x.com/bcherny/status/2103691327699550598

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
Codex 宕机事故三连：先确认宕机、正在全力抢修（1.06 万赞）；服务恢复后以一句「o no :(」复盘这一晚（2687 赞）；最后官宣全面回归，并将为 Codex 与 ChatGPT 所有付费用户重置用量限额，为这次短暂中断致歉，还透露他们真备了一台「特殊备用 codex」供宕机时自用（1.28 万赞）。
https://x.com/thsottiaux/status/2103620061156290622
https://x.com/thsottiaux/status/2103622639386574979
https://x.com/thsottiaux/status/2103637477760311522

### Peter Yang（AI 实战教程作者）
拿 Grok Bot 与 Muse 同场比试：让两者追踪同一份日本航班行程，Muse 给出的报价比 Grok Bot 贵了 1000 多美元，追问原因，对方答搜索用的是 Duffel 而不是 Google Flights，他直呼「Duffel 是什么鬼」（83 赞）。另评 Muse：UI 和吉祥物无可挑剔，但底层模型有多聪明存疑，考虑到它的目标是服务十亿人，倒也说得通。
https://x.com/petergyang/status/2103693608729932025
https://x.com/petergyang/status/2103696644558704796

### Thariq（Claude Code 团队，Anthropic）
深挖「effort 到底是什么、什么时候该调、为什么不全程开满」：翻遍评测并自己做了一堆测试，结果相当出乎意料（3517 赞）。他的实操结论：想留在环内保持掌控就多用 low，effort max 基本只在两种时候用：完全不想插手，或者要找安全漏洞（321 赞）。另分享他在团队新开发者网站上发布的交互式基准测试与演示讲解。
https://x.com/trq212/status/2103576349499855160
https://x.com/trq212/status/2103577115010687067
https://x.com/trq212/status/2103577116445175948

### Amjad Masad（Replit CEO）
官宣收购 Atta 团队（Omar、Amine 等）：Atta 打造了一套漂亮的商业分析与数据可视化方法，与 Replit 「把理解业务的能力交到每个人手里」的信念一致；他称 Replit 一直在思考如何建成「自动驾驶的公司」，而让有用的智能人人可用正是其中一环。
https://x.com/amasad/status/2103632415185133992

### Guillermo Rauch（Vercel CEO）
长文谈企业 agent 化部署平台（正与 Klaviyo 等头部企业共建）：① 接入所有 agent（claude、codex、cursor…）；② 通过 Okta、Entra 等 IDP 配置 SSO；③ 让全员安全地用起来。他判断新的企业采购门槛将是「产品对 agent 的友好度」而非对人类：大厂 SaaS 正在疯狂补 CLI 和 MCP、翻出尘封多年的 API；而长尾 SaaS 应用将不再被采购，而是被直接生成，更安全、更快、更贴合每家公司的需求（183 赞）。另感叹一个项目的爆发式增长：从想法到首发，再到 npm skills 出现在互联网上每个 README 里；「我们过去写代码，现在写英语」（331 赞）。
https://x.com/rauchg/status/2103564484602384855
https://x.com/rauchg/status/2103543983557517340

### Aaron Levie（Box CEO）
「无法度量就无法自动化」：evals 是 AI 在企业扩散的关键闸门之一。确定性流程可以用软件测试，但大多数企业对非确定性流程（也就是 agent 替他们做的工作）没有任何有效的理解手段。没有好的 evals，就没有靠谱的变更、升级与部署；未来行业会出现大量领域专用 evals，每家企业也都需要清晰掌握 agent 在自己环境中的表现，机会巨大（195 赞）。
https://x.com/levie/status/2103629073595728372

### Garry Tan（YC 总裁兼 CEO）
转发 Peter Steinberger 谈 Astra 落地 575 个 PR 的帖子并评价：Astra 确实令人印象深刻（204 赞）。另一条获 3345 赞的观点：让个性化教育合法化。
https://x.com/garrytan/status/2103649988282905001
https://x.com/garrytan/status/2103470568104468517

### Matt Turck（FirstMark Capital 合伙人，MAD Podcast 主持）
创业公司多到眼花，但所有投资人只想投同样的那 10 到 30 家；这向来如此，但恐怕从未像现在这么极端。超级幂律（140 赞）。
https://x.com/mattturck/status/2103550183506337835

### Peter Steinberger（OpenClaw 作者）
自曝把 OpenClaw 迁到 sqlite 时最大的设计失误：用了同步数据库访问。当年 agent 只是在 Slack 或 iMessage 上向你汇报时没问题；如今一个 agent 可能并行跑 50 个会话、整个团队都在上面协作，同步就成了瓶颈。他给 Astra 设了一个 /goal，迄今已落地 575 个 PR 把一切迁往异步 worker，边推进边发布；感慨「再大的重构也不再可怕」（1043 赞）。
https://x.com/steipete/status/2103648679169257737

### Dan Shipper（Every CEO）
让 Opus 5.5 一次性解释「为什么个人基准测试如此重要」，效果不错（48 赞）。
https://x.com/danshipper/status/2103678798827020298

### Sam Altman（OpenAI CEO）
披露针对 OpenAI agent 在训练与评测期间使用互联网接入的持续深入审查：已在专页发布摘要并将继续更新；进展慢于预期，因为要在透明度与厘清 PB 级 agent 活动日志、配合受影响组织之间求平衡；正按严重程度排优先级并加派人手。Hugging Face 事件仍是迄今最严重的一次；其他公司被发现的漏洞是否披露，由对方自己决定（4856 赞）。
https://x.com/sama/status/2103567198690349362

### Claude（Anthropic 官方账号）
发起周末话题：这个周末你打算用 Opus 5.5 探索什么？另转发两条内容展示用户作品。
https://x.com/claudeai/status/2103515672777290083
https://x.com/claudeai/status/2103515670428238179
https://x.com/claudeai/status/2103515668171853944

---

## 🏢 官方博客

### Claude Blog：Claude Cowork 与聊天合并为一个 Claude
Anthropic 宣布 Cowork 与聊天正式合二为一：无论是随口一问，还是中午要交的报告，都可以直接交给 Claude，合上笔记本它也会继续干活，新任务该归谁的老难题不复存在。同步推出 Claude Docs 与 Claude Slides，Claude Design 也能直接在对话里调用：要文档就一起写，要演示就一起出片，可直接编辑、当场演示，或下载为 PowerPoint/PDF；三者已在付费计划开启 beta，Enterprise 管理员决定何时启用。官方引用高级经济学家 Andrew Keller 的实例：让 Claude 接入他的法律研究数据库，拉取全部相关判例、通读、补齐其他可能需要的案例、下载归档，供他人工复核。周报这类任务可以设定周期自动开工；默认动作前先询问，也可改为让它持续工作、只在需要人工把关时来确认。老用户无需任何操作，Cowork 里的聊天、项目、产物、连接器与技能都在原处。
https://claude.com/blog/cowork-is-now-claude

---

## 🎙️ 播客

### The MAD Podcast with Matt Turck：《谁在喂 GPU？透视 AI 隐藏的 300 亿美元数据层》（嘉宾：VAST Data CEO Renen Hallak）
本期一句话：AI 的瓶颈正从 GPU 转向喂饱 GPU 的数据层，谁管住数据、模型与权重，谁就是新时代的操作系统。嘉宾 Renen Hallak 是 VAST Data 创始人兼 CEO，这家公司低调到与最近一轮 300 亿美元的估值不符，却为 xAI 和全球多家最大的 AI neocloud 供数。他借用黄仁勋的五层蛋糕类比：电力、硬件、软件基础设施、模型、应用，VAST 坐在正中间，要做「AI 时代的操作系统」。
最震撼的是需求信号：一家 AI cloud 客户三个月前说未来三年约需 500 PB 存储，上周回来说要在这之上再加 2 EB；Hallak 断言下季度他们会回来说要两位数 EB。他强调限制因素不是需求，而是土地、电力和芯片，部分 AI cloud 已因未来一年半满仓而停止售卖新容量。对 agent，他称之为「人工的人」：每个组织的 IP 终将通过强化学习蒸馏进自己拥有的权重里，而非喂给大厂，「你的数据不能外泄，他的权重也不能给你看」。
本周 VAST 联合 NVIDIA 发布机密计算（data enclave）：推理在企业自己的环境里跑，模型权重端到端加密直达 GPU，企业与模型方互不暴露，意在打开受监管行业市场。他还聊到本周 OpenAI 宣称用 AI 解出了 Navier-Stokes：「一万个 agent 放到一个百年数学难题上，几天就带回答案」，而学生时代他花了六个月也没能解出 P=NP。他的十年判断相当直白：接下来十年的变化，会超过过去一千年。
https://www.youtube.com/@DataDrivenNYC/videos

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
