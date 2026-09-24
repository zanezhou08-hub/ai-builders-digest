---
layout: default
title: "AI Builders Digest — 2026-09-24"
date: 2026-09-24
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-24

---

## 🐦 X / TWITTER 动态

今日主线：一场正面开打的价格战。OpenAI 发布 GPT-6 Sol 与 Luna 并宣布 API 永久降价 50%，给 Plus/Pro/Business 全量用户送上 banked reset（Sottiaux 发布推 2.3 万赞）；同日 Anthropic 把 Opus 5.5 设为 Claude Code 与 Claude 应用默认模型，官方称限额比 Opus 5 多用 25%。开发者实测集中涌现：Vercel CEO Rauch 的 Next.js 评测四模型贴身肉搏，Claude Code 创始人 Boris Cherny 用 Opus 5.5 以 Lean 形式化验证 Agent SDK 揪出 16 个 bug，并用 HAProxy C 转 Rust 对比两大旗舰模型。

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
宣布 GPT-6 Sol 和 Luna 正式发布：全面显著提升，写作与那种「一试便知」的综合质量尤其突出；同时 API 价格永久下调 50%，让两个模型覆盖大量新场景，订阅用户的用量也更耐用了；此外还给所有 Plus、Pro、Business 账户直接到账一笔 banked reset。该推斩获 2.3 万赞、2800+ 条回复。随后补发：这可能是我们迄今最可爱的发布，但劲道依然最大（6045 赞）；并总结团队理念：一直专注于「让所有人用上高效与智能」，只有当你顶端有足够强的模型时，才能把它们的力量辐射到其他一切（1.2 万赞）。
https://x.com/thsottiaux/status/2102463847714247142
https://x.com/thsottiaux/status/2102509507415048245
https://x.com/thsottiaux/status/2102440619616682120

### Boris Cherny（Claude Code 创建者，Anthropic）
两条硬核分享刷屏。其一：用 Opus 5.5 配合 Lean 形式化验证 Claude Agent SDK，几段简短 prompt 产出 16 个 PR，修掉一批 bug 和竞态条件；TLA+ 同样好用，他有时把两者结合，专攻数据流、并发与状态管理的问题；自称两门语言都不熟，但 Claude 两个都写得极好，这种方式对形式化建模代码、找到人类大概率发现不了的 bug 非常有用，并抛出问题：形式化验证会是编程（至少是找 bug）的未来吗？（3324 赞）其二：Opus 5.5 已是他的日常主力，让 Opus 5.5 和 Fable 5.1 各自把 HAProxy 从 C 移植到 Rust，两者都几乎通过全部测试，但 Opus 5.5 用时 9.5 小时对比 Fable 5.1 的 12 小时，成本还低 51%（6778 赞）。
https://x.com/bcherny/status/2102543349102338309
https://x.com/bcherny/status/2102439069053747549

### Cat Wu（Claude Code 与 Cowork 团队，Anthropic）
官宣 Opus 5.5 成为 Claude Code 和 Claude 应用（含 Cowork）在 Pro、Max、Team 套餐的默认模型：自己用了一阵，喜欢它清晰的表达能力和「按我的文风写作」的本事；产品默认 effort 为 medium，智能水平对标 Fable 5.1 但更快，同样额度下 Opus 5.5 比 Opus 5 多跑 25% 的用量（1308 赞）。另转发 Boris 的 Lean 帖：想在 Slack 里试试 Opus 5.5 和 Claude Tag 的可以看这里。
https://x.com/_catwu/status/2102437713781944397
https://x.com/_catwu/status/2102569951974584612

### Thariq（Claude Code 团队，Anthropic）
连发两条工程哲学：正确使用模型能力的方式不是往生产环境塞 10 倍的功能，而是花更多时间理解用户、做实验、搭原型、搞懂自己不理解的东西，这样才能做出真正可用的产品（4528 赞）；想做游戏的话，3D 生成确实是把想象变成实体的好帮手，但你得先想明白怎么做一套「好玩、有反馈感」的核心循环，这条是说给自己听的（254 赞）。另一条：workflows 已是他使用 Claude 的重要方式，庆幸现在有 Fable 级别的智能、价格却亲民到能配 workflow 用。
https://x.com/trq212/status/2102548686303854790
https://x.com/trq212/status/2102549030303867257
https://x.com/trq212/status/2102477527688388752

### Aaron Levie（Box CEO）
长文拆解这个「AI 疯狂之日」：前沿模型大幅降价，Opus 5.5 降价在前，GPT-6 Sol 和 Luna token 价格砍半在后；AI 单位任务成本的下降速度是历史上任何技术都无法比拟的，而每降一次，能铺开 agent 的场景就多一大片，这就是 Jevons 悖论在 agent 身上的演绎，最终会加速 AI 在经济中的扩散（655 赞）。另一条干货：Box 用 Opus 5.5 测试企业级非结构化知识工作，整体达到前沿水平，对比 Opus 5 token 少 63%、啰嗦程度降 42%、速度快 30%，叠加模型本身降价是双重利好。分项战绩：金融尽调任务准确率 +39%（整体 token 省 82%）、云成本分析 +65%、客户账户分析 +17%、临床数据分析 +15%，其中临床案例里模型还主动发现两组标准差相差百倍、换了正确的统计方法重跑，推翻了原本「成立」的结论。
https://x.com/levie/status/2102477253070430322
https://x.com/levie/status/2102448415775051790

### Guillermo Rauch（Vercel CEO）
放出新鲜出炉的 Next.js 评测：Opus 5.5、GPT 6 Sol、Fable 5.1 三家同分 97%，Grok 4.7 以 94% 紧咬，值得注意的是 Grok 价格只有别人的一半到七分之一（1087 赞）。两则观点：其一，「软件将永垂不朽」：你喜欢 Google Reader？没问题，你可以生成并部署一个自己的，永远属于你（1045 赞）；其二，盛赞 Anthropic 出品的品味，称当初对 headless web 兴奋的原因就是任何页面都能长成任意奇思妙想的形状，有了 AI 就没理由不把设计前沿往前推（1418 赞）。
https://x.com/rauchg/status/2102519097770885231
https://x.com/rauchg/status/2102594015669756323
https://x.com/rauchg/status/2102438365455167883

### Alex Albert（Anthropic Research）
展示 Opus 5.5 的 3D 建模与视觉能力：一段 prompt 让它在 Blender 里重建 1906 年 4 月 17 日大地震前一天、旧金山 Market Street 的历史街景（890 赞）。他在 Claude Tag 里公开了完整 prompt，堪称范本：先从 1899 至 1905 年 Sanborn 火灾保险地图、Miles Brothers 影像、国会图书馆与 OpenSFHistory 老照片、USGS 地形数据构建溯源文件，每一栋建筑记录占地面足迹、高度、立面材质、租户及信源与置信度；全程只用 Blender Python，不许下载任何现成网格和贴图，要求写出维多利亚立面、孟莎屋顶、凸窗、煤气灯、缆车、马车等可复用生成器，让每栋楼都能追溯到数据。另提示 Claude Tag 更新正在全量推送。
https://x.com/alexalbert__/status/2102466523164274839
https://x.com/alexalbert__/status/2102466524934271381

### Sam Altman（OpenAI CEO）
先认错：昨晚说错了，是 VOICE 不是 video，抱歉让大家失望（855 赞）。两条转发点评：其一，创业公司天然擅长某件事，大公司想保持这种能力很难，这是一个待挖掘的空间（3675 赞）；其二，盛赞 OpenAI 的 Michelle：openai 能走到今天非常幸运，大家很快会看到她和团队接下来做的东西（2124 赞）。
https://x.com/sama/status/2102512794235207758
https://x.com/sama/status/2102469008079679640
https://x.com/sama/status/2102468713866055872

### Amjad Masad（Replit CEO）
贴出一段俏皮话回应 AI 圈的 AGI 叙事：你的智能是假的，是 artificial 的；我的？我的智能是 super 的，Super Intelligence，简称 SI（935 赞）。
https://x.com/amasad/status/2102489320766800002

### Garry Tan（YC 总裁兼 CEO）
安利 Capy：它让我合并 PR 的速度比单用 Codex 或 Claude Code 快得多（111 赞）；顺带一提，如果你在做很酷的东西，GStack 真的会提醒你申请 YC（155 赞）；另一条转发感慨：我们需要教会全世界写 prompt、最大化用好 AI，让所有人看到它能给一切追求插上翅膀，然后人们会渴望为自己也为彼此解决更多问题（144 赞）。
https://x.com/garrytan/status/2102544711647129902
https://x.com/garrytan/status/2102537390774759761
https://x.com/garrytan/status/2102501556348440983

### Peter Steinberger（OpenClaw 作者）
ChatGPT 在 macOS 27 更新后偶发崩溃，他的 agent Astra 顺藤摸瓜，在 libuv 里挖出了一个约 14 年历史的老 bug（850 赞）。
https://x.com/steipete/status/2102501642176528743

### Dan Shipper（Every CEO）
单日涨粉近 1 万，给新粉丝递上两篇入门作：Opus 5.5 与 Sol-6 的体感对比评测，以及「自动化之后」系列：为什么 AI 自动化反而为人类专家创造了更多好工作。
https://x.com/danshipper/status/2102556723244564715

### Aditya Agarwal（SPC 普通合伙人，前 Dropbox CTO）
复盘在 SPC 办过的 50 多场 Minus One 炉边谈话：昨天 Waymo CEO Dmitri Dolgov 那场，是他 9 岁的孩子第一次主动要求旁听，为物理世界造物的魅力可见一斑（17 赞）。他提炼了谈话中最有意思的部分：当下大家热议的「模型安全与对齐」，最早的 AI 安全大辩论其实发生在自动驾驶上；自己第一次坐 Waymo 的体验近乎宗教般震撼，而最打动他的是 Waymo 为建立信心而打造的庞大评测与测试体系，毕竟那是在城市道路以 30 英里时速穿行的两吨重机器人（41 赞）。另一条：在追逐效率的狂奔中，别忘了 AI 产品应该令人愉悦、应该好玩，他在 Sentience 上收获了许多 magic moment（23 赞）。
https://x.com/adityaag/status/2102498288658526614
https://x.com/adityaag/status/2102457464432284019
https://x.com/adityaag/status/2102421668509733058

### Nikunj Kothari（FPV Ventures 合伙人）
给融资新闻泼冷水：连「最顶尖」投资人组织的 SPV 数量都令人咋舌，看到大型融资的头条新闻，基本可以确定其中相当一部分来自 SPV，尽管标题不这么说；再叠加分级估值与「营收不算数」的会计口径，别再相信头条了，证据在布丁里，而布丁不会公开摆出来（34 赞）。另发布《A Walk In The Park》第三集，嘉宾是市政委员 Todd Saunders，聊从 Google 到地板软件创业、1000 万美元的转型以及垂直软件的机会。
https://x.com/nikunj/status/2102534909076349291
https://x.com/nikunj/status/2102395699895677325

### Claude（Anthropic 官方账号）
官宣 Opus 5.5 今日可用，并连发用户作品展示：一款由 Kevin Ngo 打造的算法绘图程序，每幅画基于不同随机种子；一个玩具积木应用，照片或描述一句话就能变成可拼搭的模型和搭建指南。
https://x.com/claudeai/status/2102471892099866883
https://x.com/claudeai/status/2102471889092276516
https://x.com/claudeai/status/2102471885061812714

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
