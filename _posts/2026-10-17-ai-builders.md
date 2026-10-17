---
layout: default
title: "AI Builders Digest — 2026-10-17"
date: 2026-10-17
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-10-17

---

## X / TWITTER

### Aaron Levie
Box CEO

两条重磅。其一：Meta 发布 Muse 开放权重模型，"这对美国的开源生态是重大一步"。企业将可以把前沿性能用于编排和高端任务，同时用低成本、定制后训练的模型跑可重复工作流，整体大幅推高全栈的 token 消耗。其二（长文）：从"和 agent 聊天"到"在后台批量启动 agent 干活"，token 消耗会是今天的 100 到 1000 倍。知识工作几乎都受限于在系统间搬运数据、审文档、查代码漏洞这类步骤，AI 已是巨大解锁；下一步是"扔任意数量的 agent 去解决一个问题，然后说'完成目标再回来'"——保护代码库、QA 每次变更、审计每份文档，大多是净新增工作而非替代。

https://x.com/levie/status/2110787013809222141

https://x.com/levie/status/2110622982762803449

### Boris Cherny
Anthropic Claude 负责人

Claude 模型近年在 prompt injection 防御上进展显著，但"随着 agent 做的事越来越多，全行业解决它变得日益紧迫"。Anthropic 宣布与 Gray Swan 合作举办注入攻击竞赛，"等不及看你们能挖出什么"。

https://x.com/bcherny/status/2110791698611855624

### Thibault Sottiaux
OpenAI Codex 与 ChatGPT 负责人

又一条高互动悬念推："要么我们已江郎才尽，要么我们正在憋大招。时间会给出答案"（2774 赞、899 回复）。配合他前一日深夜连发的法语推文（"Bonjour""Je programme en français"），OpenAI Codex 侧气氛微妙，值得持续关注。

https://x.com/thsottiaux/status/2110971985417441512

### Guillermo Rauch
Vercel CEO

"TLDR：我们等到了 Vercel 飞艇和飞行汽车，也没等到 GTA6"——配上一句"What a SHIP!"的发布感慨。对发布节奏的自嘲式炫耀：基础设施公司的 shipping 速度已经快过游戏业最会跳票的巨头。

https://x.com/rauchg/status/2110957024934858815

### Garry Tan
Y Combinator CEO

转发 Meta Muse 开放权重模型的新闻并评论"开放权重模型正在崛起"，与 Aaron Levie 的判断相互印证：开源阵营拿到旗舰级模型，是本周 AI 格局最重要的一步棋。

https://x.com/garrytan/status/2110838867213668587

### Dan Shipper
Every CEO

用《心灵捕手》名场面的句式调侃可解释性研究："你刚读完关于多义性（polysemanticity）的论文，所以自然觉得可解释性就是解开叠加（superposition）……等你明年意识到'知道模型认得埃菲尔铁塔'并不能告诉你它到底在计划什么。"对当前 interpretability 热潮的辛辣注脚。

https://x.com/danshipper/status/2110831666587713810

### Aditya Agarwal
South Park Commons GP、Dropbox 前 CTO

力挺被投公司 Goodfire："它可能是 SPC 走出的最重要的公司之一——可解释性与对齐可以被当作工程问题来解决。"在普遍把 alignment 当研究议题的氛围里，"工程化"路线正在获得投资人背书。

https://x.com/adityaag/status/2110779602453066224

### Zara Zhang
独立 builder

用 AI 做了份哈利波特风格的"会动的报纸"《The Toddler Times》，报纸里的图像能活起来——生成式内容正在快速进入家庭日常创作场景。她还分享了 Ezra Klein 的一句话："永远不要低估观众的智力，也永远不要高估他们的背景知识。"

https://x.com/zarazhangrui/status/2110984552743309530

https://x.com/zarazhangrui/status/2110815456458412179

### Peter Steinberger
OpenClaw 作者

"crabbox 被低估了"（142 赞）——对 agent 工具箱里这个组件的推荐，引发小范围讨论。

https://x.com/steipete/status/2110795475075084471

### Peter Yang
AI 内容创作者

和 8 岁女儿用 Fourthwall 做儿童 T 恤设计投票 thread，并当场用 bot 监控全部回复、"12 小时后告诉我赢家"——把 agent 当日常生产力随手就用的一个小切片。

https://x.com/petergyang/status/2110883805506711694

### Nan Yu
OpenAI Codex 产品负责人

关于品味的锐利定义："品味不等于审美品味。那是最浅层的定义，也正因为太常见而无趣。"对产品人而言，品味更多关乎判断与取舍，而非表面美学。

https://x.com/thenanyu/status/2110730151222980849

---

## PODCASTS

### The MAD Podcast：Jev 之父详解"做决策而非写文本的 AI"（TypeSafe CEO Diogo Almeida）

The Takeaway：AI 的下一个巨大市场可能不是更聪明的聊天，而是"机器原生"智能——直接输出决策概率、可被软件信任和组合的 System 1 模型。

Diogo Almeida 是 RLHF 的联合发明人之一、前 OpenAI 研究员，如今执掌 JEV 背后的公司 TypeSafe。Jev 发布一个月：官宣 8.7 亿美元 A 轮、75 亿美元估值，发布视频 4000 万播放、日活用户约百万、每天处理万亿 token、三分之一的财富 500 强在用。他如何定义 JEV？"机器原生"的 System 1 模型：不做文本生成，而是把智能变成"聪明的 if 语句"——每一步输出概率，开发者自设阈值，再由代码轨道保证不脱轨。之所以要发明全新训练范式 RLCD，是因为他亲手参与发明的 RLHF"把模型训练得会聊天、会讨好人，却在决策上更笨"：路径依赖的讨好、过度拒绝、风格窄化。RLVR 虽然刷爆 benchmark，却没改变自动化——"95% Einstein、5% Mr. Bean，如果它不告诉你什么时候是 Mr. Bean，你怎么敢自动化任何东西？"可靠性才是自动化缺失的核心。他认为"分类是 AI 完全问题"，被叫分类器是恭维——Facebook、TikTok、Google 的核心都是分类器；TypeSafe 用开放权重模型组合出 JEV，没做预训练，他直斥"预训练是浪费资源的巨型垃圾箱大火"。对跟进者（Cloudflare、Databricks、微软、OpenAI Decisions）他的判断是：做出接口容易，做出可靠性极难。他也不相信 RSI（递归自我改进）：神经架构搜索时代同样的故事重演过，现实中 Amdahl 定律总在起效。名字 Jev 来自 Jevons 悖论：智能越便宜、消耗越大，这个市场会像半导体一样膨胀，"我们要造 prod，不是造神。"

金句："95% Einstein，5% Mr. Bean。如果它不告诉你什么时候是 Mr. Bean，你怎么自动化任何东西？"

https://www.youtube.com/@DataDrivenNYC/videos

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
