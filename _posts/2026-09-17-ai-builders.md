---
layout: default
title: "AI Builders Digest — 2026-09-17"
date: 2026-09-17
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-17

---

## 🐦 X / TWITTER 动态

### Sam Altman（OpenAI CEO）
预告本周有「big 🚢」，DevDay 上更是一波连续六个船的密集发布节奏，配文直接用 emoji 刷屏。结合 Codex 团队本周的出货密度，OpenAI 进入发布高峰期。
https://x.com/sama/status/2099872600977760451

### Claude（@claudeai，Anthropic）
Salesforce in Claude 正式开启 beta：账户、商机、pipeline 全部进入 Claude，附带 37 个预置销售技能。可以准备客户会议、复盘 deal、生成 pipeline 仪表盘、提交 forecast，全程无需离开对话。这是「系统记录 + 对话式 agent」路线的又一次落地。
https://x.com/claudeai/status/2099876514330206578

### Aaron Levie（Box CEO）
长文阐述「应用 AI 层」的核心论点：AI 模型的能力与企业真正想自动化的工作流之间存在巨大鸿沟，这个 gap 正是 applied AI layer 的机会。要做的事包括：把智能接入工作流、重构业务流程、聚合正确的上下文和数据、设计 human-in-the-loop 体验、推动变革管理、做领域专属 eval、管好数据安全与治理。他的判断是：这一层会出现在每个垂直和水平品类里，而且讽刺的是，即便模型能力飞速提升，这一层不但不会消失，反而会愈发重要——能力越强，能 tackling 的任务越复杂，做不好这层的代价也越大。另有同名长播客上线（见 PODCASTS）。
https://x.com/levie/status/2099976021311398230

### Thariq（Anthropic，Claude Code 团队）
抛出一个反直觉观点：MCP 在大多数集成场景里已经比 CLI 更好。理由是模型工具调用能力大幅进步、可以 defer tools、MCP 已支持 stateless。实用建议：如果需要组合/过滤数据，给 MCP 工具加上 query 之类的参数。2400+ 赞，引发广泛讨论。
https://x.com/trq212/status/2099958388230873165

### Guillermo Rauch（Vercel CEO）
三条动态：一是 Safari 27 开始支持 JSPI——WebAssembly 的「同步原生代码在 async Promise 上挂起」能力，fx.dev 上 libfx 已直接用浏览器原生 fetch 栈发 API 请求，他预判随着更多代码走向原生，WebAssembly 将在 Web 的未来扮演重要角色；二是正式发布 Vercel Labs，作为 Vercel 公开研究与实验的门户，v0 的 2.47 亿次下载之后，开始公开分享正在支持什么、研究什么、哪些实验没成；三是重申「未来是多模型的」，隐藏模型选择只会让客户困惑，用户理应参与这场「我们时代最激动人心的市场竞争」并掌握每个任务的最佳工具。
https://x.com/rauchg/status/2099974859023683975
https://x.com/rauchg/status/2099911447598059812
https://x.com/rauchg/status/2099905740505055680

### Dan Shipper（Every CEO）
透露 Every 测试了一个全新的基础模型近一周：「相当狂野，会是 6-12 个月后显而易见不可或缺的东西」。它不输出文字，而是输出概率分布，可以在原本需要 Fable 级模型当 judge 的场景里高效工作——实测快 25 倍、价格便宜 600 倍。Amjad Masad 随即接力追问：如果输出域已知，为什么不直接训一个对 enum 输出 logprobs 的模型？
https://x.com/danshipper/status/2099947471518474522
https://x.com/amasad/status/2100056178705514703

### Garry Tan（Y Combinator CEO）
两条干货一条生活：一是公开押注「I think Muse is going to win tbh」（1500+ 赞）；二是分享用 capydotai 配合自家 GStack/GBrain 跑 issue/PR 修复波的真实体感——同样的前沿模型，原来用裸 Codex/Claude Code 要一天的活，现在一半时间搞定，「I'm amazed」；三是减重 18 磅，并考证多肽热潮并非始于旧金山，而是中西部健美圈层。
https://x.com/garrytan/status/2099980972641124629
https://x.com/garrytan/status/2099964487667454097

### Thibault Sottiaux（OpenAI，Codex 团队）
「2026 是效率之年，周二则属于随机掉落在你门把手上的周边。」一张 Codex swag 照片收获近 5000 赞，1200 条回复。
https://x.com/thsottiaux/status/2099922755655479624

### Josh Woodward（Google Labs 副总裁）
Gemini Notebook 面向学生推出新功能，他最喜欢两个：一是与课堂材料进行约 100 种语言的实时口语问答；二是随手录讲座和笔记，音频自动存入指定 notebook。此外大学生在 140+ 国家仍可领取免费 Google AI Plan，获得更高额度和更多 Google 产品访问权。
https://x.com/joshwoodward/status/2099921866014306633

### Peter Yang（AI 创作者）
发放了一批 Grok bot 邀请码并汇总了网友的真实用例，覆盖三大类：增长与客户（找线索、写外联、把胜利案例转成 case study、带来源的竞品对比矩阵）、运营与交付（监控数百个广告账户抓注册/支付故障、盯 Jira 拦阻塞项并起草周报、工单分类回复与升级、酒店预订流程自动化巡检、承包商文书自动化）、研究与内容（监控 X 上的 AI builders、验证来源后转成 hooks 和脚本、把噪音变成每日简报的研究台）。另一条尝试让 Muse 去和 Xfinity 谈话费账单，以失败告终；还有一条给个人创业者的建议：设计业务让自己多做喜欢的事，无聊的活交给 bot 或者干脆不做。
https://x.com/petergyang/status/2100027487681953834
https://x.com/petergyang/status/2099978848255533280
https://x.com/petergyang/status/2099968897323778416

### Amjad Masad（Replit CEO）
三连发：一是上面提到的 logprobs-over-enums 技术讨论；二是翻出两年前与 Tucker 关于 Effective Altruism 起源、运作手法和影响网络的对话；三是「AI 命名诅咒」观察——「AI Safety」公司把 AI 变得不安全、「有效利他主义者」既无效又在纵容犯罪、「Irregular」则经常性不靠谱。
https://x.com/amasad/status/2100056178705514703
https://x.com/amasad/status/2100045670845763791
https://x.com/amasad/status/2099760428314411232

### Aditya Agarwal（SPC 合伙人）
复盘 Profound：从 SPC 里两位创始人相识（Uber 地图工程师 + 没上过大学的连续创业者）到如今估值 18 亿美元、三分之一的财富 100 强公司在用，成为增长最快的 AI 营销平台。刚完成红杉与 KP 联合领投的 1.8 亿美元 D 轮，SPC 从第一天起每轮都跟。「我们没有发现这家公司，我们看着它成形。」
https://x.com/adityaag/status/2099939685657141257

### Nikunj Kothari（FPV Ventures 合伙人）
给创始人的资本谏言：见过太多创始人以为融资水龙头会自动打开、下一轮无论如何都会来。资本是加速的武器，用好了无往不利；过度依赖它，一次下行就会带来不妙的后果。建议先规划出确保公司生存、形成自我造血的默认路径，再推演资本充裕/紧缩情景。未来 6-18 个月资本市场如何演变是最大的不确定。
https://x.com/nikunj/status/2100008917980102863

### Peter Steinberger（OpenClaw / ClawFather）
官宣新成员 Graham 加入，配文简短：「Excited to have you on board!」
https://x.com/steipete/status/2099960081207242808

---

## 🏢 官方博客

### Claude Blog

**Claude for Small Business launches new workflows, integrations, and training programs**
Claude for Small Business 迎来大版本更新：新增 43 个工作流和 27 个集成，覆盖小店主们已在用的工具——Shopify、Salesforce、TikTok、Atlassian、Zoom、Xero、Gusto、Square、Stripe、Zapier 等，把 Claude 的能力从「管好后台」扩展到「帮生意增长」（生成线索、回复咨询、写提案）。自 5 月上线以来安装量已超 90 万次。此次更新源自春季 SMB Tour 十城千余位业主的反馈：约三分之一想要增长类帮助，很多人希望日常报表被接管。秋季免费工作坊巡回同步启动：150+ 家官方认证培训师将在各地开 750+ 场工作坊，14 家集成伙伴提供免费 webinar。用户证言相当扎实：有人把 120 小时的工作压到 5 分钟，有人靠 Claude 写专业提案一个半月入账 2 万美元，还有人的 Claude 每天 6 点扫 CRM 生成「每日简报」邮件。
https://claude.com/blog/claude-for-small-business-launches-new-workflows-integrations-and-training-programs

---

## 🎙️ PODCASTS

### Training Data (Sequoia): Box's Aaron Levie — On Reinventing Yourself in the AI Age and Enterprise Diffusion

**核心要点：** Box CEO Aaron Levie 与 Sequoia 对谈应用层 AI 的机会、企业 AI 扩散的现实与 Box 的自我重塑。

 Levie 开篇就给出市场重大更新：「应用公司就是最热门的 NeoLab」——两年前这话还不成立，如今因开源而完全成立。他的框架是：企业里存在模型能力与实际工作流之间的「桥」，市场万亿级赌注押在两个方向上——要么这座桥很窄，要么它非常深、需要深入组织内部。现实是后者：再聪明超前的模型也要接数据系统、留 human-in-the-loop、处理变更管理、改造遗留系统。类比当年的 AWS/GCP：基础设施万亿美元级，但 Snowflake、Databricks 恰恰因基础设施而生。「模型会极其有价值，但把模型带进银行、医药、政府真实工作流的，就是大量软件。」他还预判 token 补贴只是暂时现象——一旦模型公司上市，毛利规律一视同仁；而 Meta、SpaceX、中国玩家、NVIDIA 这些「非典型参与者」会把推理利润率打下来，价值最终更多流向应用层。他不会赌「一两家实验室拿走 95% 的价值」，动态生态对头部反而是好事，免得被国有化。

关于 Box 的转型：2015 年就试水 AI 但因「每个用例都要单独训模型且贵到离谱」搁置，ChatGPT 时刻后全面押注——组建最强团队、每日同步、构建完整的 AI stack 和 Box Agent。Box 坐拥数千亿文件，核心场景是让 agent 回答关于这些非结构化数据的问题、抽取元数据、自动化工作流。王牌用例：一百万份合同/研报，找出里面到底有什么，变成可查询的结构化数据；更前瞻的是长时后台 agent——银行开户流程从两周压到一小时。自建 harness 比直接喂 API 给 OpenAI 效果显著更好，因为他们最懂自己的搜索、文件系统和用户选文件的启发式。模型竞赛方面：各模型与其编码能力高度相关，唯独 Gemini 在部分用例上不成比例地好；当前 Fable 5.1 领先，Grok、Muse、Fable、GPT 下一代贴身肉搏。

关于 open weights 的采纳度，他给出金句式判断：「比人们以为的高，比企业想要的白low，远低于五年后会到的水平」——其中 30%+ 归功于「就是想试试 GLM」的时尚因素。长期看成熟用例会被剥离到开源（引 Decagon 的 Jesse 的悖论）：闭源收入暴涨与开源指数增长将同时发生，因为盘子涨太快，编排层用贵模型、长尾任务外包给便宜模型，所有人都在赢。关于 memory/持续学习（把上下文烤进权重），他既兴奋又谨慎：研究者想象的世界人人全量访问，而律所合伙人隔着物理墙不能共享一份文件；关键决策点是「什么进 context、什么进 weights」的 T 字账。关于系统记录公司：必须两条腿走路——打造在本产品上碾压通用 agent 的专属 agent（还能发现没人做过的用例，比如「治理合规 agent 实时拦下违规操作」），同时彻底 headless 化，把 API 暴露给 Claude/ChatGPT/MCP。他自曝因为用 MCP 接入 Salesforce，使用量比以往高了一个量级，「如果 LinkedIn 能让我 MCP 接入，我愿付 10 倍价钱」。

对 AI 扩散速度的冷静判断：编码 agent 是史上最快扩散，因为编码价值 100% 由文本产出、模型高强度特训、用户是最技术的人群且自带排障能力；而其他知识工作「没有 GitHub 时刻」——数据在遗留系统里、权限结构复杂、需要变更管理，销售被客户有没有回复这类外部因素卡死。所以硅谷要为「扩散比想象慢」做好准备，而这恰恰是应用层万亿美元价值之所在。给创始人的建议简单粗暴：加入 Twitter，关注那 20 个账号，「你比同行早一年还是晚一年，取决于你的 feed」。最后断言：五年内企业 90% 的 token 将消耗在用户从未手动发起的任务上——agent 在后台跑完，人只负责审阅结果。

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
