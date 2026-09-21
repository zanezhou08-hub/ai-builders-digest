---
layout: default
title: "AI Builders Digest — 2026-09-21"
date: 2026-09-21
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-21

---

## 🐦 X / TWITTER 动态

今日内容偏「方法论与风险判断」：Aaron Levie 论 personal agents 是继 App Store 之后最大的消费级机会；FPV Ventures 合伙人 Nikunj Kothari 分享自己作为 VC 每天写代码的三层学习框架；SPC 的 Aditya Agarwal 则对 agent 权限扩张发出国家级渗透警告。播客方面，Recursive 创始人 Richard Socher 带着新书 The Eureka Machine 上 MAD Podcast，完整拆解 recursive self improvement 的路线图。

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
发了一条极简宣言「2026 是 Linux 桌面元年」，收获 9800+ 赞、1100+ 条回复，讨论热度远超他平日的工程向内容。
https://x.com/thsottiaux/status/2101431497437950458

### Peter Yang（AI 实战教程创作者）
展示自己的个人 AI 工作流：一个简单的 markdown 文件加一个 /tastemaker skill，用来给看过的电影、剧集和书打分；之后系统每周自动检索新上线内容，与他没看过的作品做匹配，生成相关性极高的推荐。他正在征求大家意见：要不要把这套东西开源。
https://x.com/petergyang/status/2101503916743749878

### Nan Yu（OpenAI 产品团队成员，前 Linear 产品负责人）
实际测试个人 agent 的语音通话能力：分别尝试让 Muse 和 Instinct 拨打电话，两者都回复暂不支持，他顺带询问该功能是否仍在灰度推送中。
https://x.com/thenanyu/status/2101383106372805103

### Guillermo Rauch（Vercel CEO）
认为这波 AI 最酷的地方在于每个人都对 building 重燃热情：抛开短期八卦与戏剧性事件不谈，这对世界是一个不可估量的好消息，人们想要创造和发布，而不只是消费。该推已获 1170+ 赞。
https://x.com/rauchg/status/2101397206595231765

### Aaron Levie（Box CEO）
提出 personal agents 是「build something that agents want」的终极体现：产品形态上，你要能把任务完整交给 agent 并确保它端到端完成，这意味着 agent 必须能顺利操作你的工具（MCP、CLI）、流畅导航你的网站、完成交易。他认为新的注意力竞争不再发生在产品与用户之间，而是发生在工具与 agent 之间：谁能让 agent 最好地订餐、处理电商交易、订机票、调用本地经济和数据，谁就会被用得最多。他断言这将是 App Store 以来消费级科技最大的一次机会与洗牌。
https://x.com/levie/status/2101427997597446636

### Nikunj Kothari（FPV Ventures 合伙人）
回应每天收到的灵魂拷问「你是 VC，为什么还天天写代码」：他每天花约 2 小时编程、做 side project、折腾新 repo，因为这个时代变化太快，不动手就永远学不会判断接下来会发生什么。他给出的 AI 时代投资框架有三层：一是理解模型能力边界，读技术论文仍有大量 alpha（model research）；二是理解模型完成更长程任务需要什么工具（infra）；三是理解什么样的 harness 能让模型去构建自治公司（应用层）。他的建议很朴素：每天抽时间动手折腾，坚持 10 天你就会上瘾。
https://x.com/nikunj/status/2101340098356990058

### Aditya Agarwal（SPC 普通合伙人，Bevel Health 联合创始人，前 Facebook 早期工程师、Dropbox CTO）
看到 Gemini（Google）、OpenAI 和 Anthropic 密集发布 agent 深度集成功能后发出警告：他现在 100% 认定，已经有不少大型公司在毫不知情的状态下被国家级攻击者渗透。agent 权限越深，这条风险曲线越陡。
https://x.com/adityaag/status/2101426570850451914

---

## 🎙️ 播客

### The MAD Podcast with Matt Turck：When AI Improves Itself（Recursive 创始人兼 CEO Richard Socher）

**核心结论：** 凡是能模拟（simulate）的领域，AI 终将攻克；目前验证闭环最强的三块依次是游戏、数学和编程，而数学将在未来几年被彻底改写。Richard Socher 是被引最多的 AI 研究者之一，他创立的 Recursive 刚完成 6.5 亿美元融资，其中约 4.1 亿美元投向与 Amazon 的单一算力协议；他的新书 The Eureka Machine 于 9 月 22 日出版，主线是 recursive self improvement：先让 AI 做更强的 AI 研究，再把这种能力外溢到全部科学发现。

全书从「科学进步正在变慢」这个反直觉事实切入：知识已从「知识体」变成「知识迷宫」，34000 本期刊各有行话，没有人能再当通才，学术圈还会惩罚过于超前的想法（他本人提出的 prompt engineering 雏形 DecaNLP 当年曾被审稿人集体拒稿）。而 next-token prediction 正是破局点：模型预测「从纽约开车向北，下一个词是 Boston」时被迫吸收地理知识，同样的机制让它学会蛋白质折叠的 3D 空间关系；一切皆可 token 化，词、氨基酸、像素、声音皆是。

他把 Eureka Machine 拆成四大支柱：LLM 摄入人类知识、科学仪器测量扩展感知、模拟环境无限试错、机器人自动化在真实世界采集数据并验证，顶上再跑一个像科学共同体一样并行探索、交叉重组的 agent swarm。已有实证：Recursive 的系统在窄领域问题上能超过人类数月甚至数年的工作，还能自动写出更快的 CUDA kernel。他眼中的就业逻辑是需求弹性：插画价格跌千倍需求未涨千倍，程序员却因 Jevons 悖论更抢手；AI 治癌可信但临床试验时间无法压缩，他明确不相信 hard takeoff。谈智能上限时他提出 10 个智能空间（视觉、语言、物理等），结论是：我们离任何一个空间的真实上限都还非常远。

视频：https://www.youtube.com/@DataDrivenNYC/videos

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
