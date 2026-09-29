---
layout: default
title: "AI Builders Digest — 2026-09-29"
date: 2026-09-29
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-29

---

## 🐦 X / TWITTER 动态

今日主线：Vercel CEO Guillermo Rauch 把自家 Mini 浏览器从 Electron 迁到 Rust + Swift 原生，宣告「原生是未来」；OpenAI Codex 的 Thibault Sottiaux 断言 code freeze 已成历史（6000+ 赞）；Anthropic 的 Thariq 提醒行业：别靠变懒把 agent 的生产力红利吃回去（4300+ 赞）；Box CEO Aaron Levie 拆解 agent 中介化将重塑哪些市场。播客今日无更新。

### Guillermo Rauch（Vercel CEO）
甩出长文宣布：Mini 浏览器已从 Electron + Bun 迁移到 Rust 与 Swift 原生实现，结果「更快、更安全，迭代起来竟然还更舒服」。技术路径：用 cef crate 打包最新 Chromium，拿到梦寐以求的 Safari 式 UX；通过 fx acp 把 agent 内嵌进应用，经 ACP 与本地 fx CLI 通信，浏览器再由 MCP server 管理。抛弃 Electron 后，Liquid Glass、秒开、细粒度焦点控制这些 JS 里的噩梦级细节「直接就能用」。他的判断：原生是未来，桌面和云都是，整个软件世界的「原生化」会比想象来得快，DHH 在 Rails World 也如此暗示，Vercel 的 Fluid 押注正是为此准备。项目用 Opus 5.5 和 Sol 6 构建。（508 赞）
https://x.com/rauchg/status/2104428800134013205

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
给出一个大胆判断：「发版前的 code freeze 已经不存在了」，而且未来代码甚至可能按请求在线生成、按约束实时输出。（6051 赞）另有一条正文只有省略号的神秘帖子冲上 6500+ 赞、1630 条回复，内容应为配图，从文本无法确认。
https://x.com/thsottiaux/status/2104108167806550046
https://x.com/thsottiaux/status/2104383749723128052

### Thariq（Claude Code 团队，Anthropic）
泼了盆冷水：「我最怕的不是 agent 不够强，而是我们靠变得更懒，把 agent 带来的生产力提升全部吃回去。」（4322 赞）另有一条用 neopets 梗自嘲「暴露年龄」的怀旧帖（395 赞）。
https://x.com/trq212/status/2104273243599405395

### Amanda Askell（Anthropic，哲学家与伦理学家）
较真到极致的自我实验：怀疑自己讨厌香水只是因为没买过好的，于是调研一堆评分最高、口碑最好的香水，买来小样逐一试香，最终确证结论：「所有香水都难闻。」（869 赞，今日最受欢迎的非技术帖）
https://x.com/AmandaAskell/status/2104261424625381528

### Peter Steinberger（OpenClaw 作者）
谈 CI 负载分流：Blacksmith 一直是出色的赞助方，但负载确实需要分散。他的新思路是让 Codex 自行判断哪些测试真正需要跑，大幅砍掉 CI，改成每小时跑一轮测试。（571 赞）
https://x.com/steipete/status/2104305554760114488

### Garry Tan（YC 总裁兼 CEO）
点评反爬虫军备竞赛：「Anti-bot 是给失败者玩的」；顺带回怼「我用 CDP 就能搞定」派：你还没撞过真正的反爬。（418 赞）
https://x.com/garrytan/status/2104402742517420517

### Aaron Levie（Box CEO）
拆解 agent 经济学：当 agent 开始替用户做效率最优的选择，靠用户惰性和转换摩擦生存的细分市场将迎来转换成本暴跌、竞争白热化；而医疗、旅行、本地服务这些长期被摩擦拖累的市场，反而会被 agent 解锁出全新交易。结论：一个由不知疲倦的 agent 充当中介的未来，「不可能按今天的方式运转」。（174 赞）
https://x.com/levie/status/2104350592290406849

### Amjad Masad（Replit CEO）
开心吃瓜：Replit 在扎克伯格家也流行起来了。（167 赞）
https://x.com/amasad/status/2104428789417857436

### Dan Shipper（Every CEO）
一条金句被疯转：「一个建立在把人类建模成理性 agent 之上的行业，正在因为人类开始采用理性 agent 而恐慌。」（156 赞）
https://x.com/danshipper/status/2104302924251951553

### Zara Zhang（连续创业者，Harvard '17）
回应「不变现还发什么内容」的质疑：自我表达是无需辩护的人类本能，而且影响力远比钱值钱。（354 赞）
https://x.com/zarazhangrui/status/2104253882025341231

### Peter Yang（AI 实战教程作者）
感慨游戏才是人类记忆里留存最久的软件：没人怀念当年的 SaaS，但人人都记得最爱的游戏；LLM 模型恐怕正相反。（57 赞）
https://x.com/petergyang/status/2104414495376564517

### Matt Turck（FirstMark Capital 合伙人）
观察到一个行业割裂：真正懂 AI 如何运作的 AI 研究者，大多既不信末日论也不信失控加速论；反而是了解有限的圈外人对此观点极其确定。（53 赞）
https://x.com/mattturck/status/2104331402385002831

### Nikunj Kothari（FPV Ventures 合伙人）
试用 Astra 后的评价只有一个词：离谱。「给它够难、可验证的端到端任务和合适的工具，看它直接起飞。」（19 赞）
https://x.com/nikunj/status/2104444216017637575

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
