---
layout: default
title: "AI Builders Digest — 2026-09-13"
date: 2026-09-13
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-13

---

## 🐦 X / TWITTER 动态

### Thibault Sottiaux（OpenAI，Codex & ChatGPT）
Astra 本周的发布盘点一口气列了五个：Images 2.5、GPT-Live-1、Agents API、Data Agent、ChatGPT for Financial Services，而且还特意强调"这还不是 DevDay"，下周的日程依然排得很满。
https://x.com/thsottiaux/status/2098639827084480864

更值得看的是他对近期 Astra 质量问题的公开复盘：为旧模型编写的 skills 触发过频、干扰了模型自查；一个 opt-in 的上下文管理实验会导致提前停止回复或去回复旧消息（估算影响了 4-5k 用户），已紧急禁用；还下线了几个配置错误的引擎，它们拖累了长尾流量的质量。这条复盘帖拿到了超过 1.5 万个赞，修复版已在当天午夜前全量重置。
https://x.com/thsottiaux/status/2098612714704891959

人事方面：OpenAI 收编了 Git AI 团队的 Aidan 和 Sasha。他们的开源工具能帮开发者看清 coding agent 到底对代码库贡献了什么，未来会帮企业量化 Codex 的实际价值，且 Git AI 承诺继续保持开源。
https://x.com/thsottiaux/status/2098569976143806918

### Amjad Masad（Replit CEO）
Replit 收购了一家完全构建在 Replit 之上的公司，他的判断是"这只是第一个，未来会有很多"——平台孵化出被收购的公司，这本身就是一个新信号。
https://x.com/amasad/status/2098548464452055437

### Ryo Lu（Cursor 设计负责人，曾设计 Notion、Stripe）
Cursor 正式上线 long-lived agents："为你的大想法提供长生命周期的 agent"。agent 不再是一次性会话，而是可以长期存续、持续推进的工作伙伴。
https://x.com/ryolu_/status/2098324260867772806

### Thariq（Anthropic，Claude Code）
针对"新模型发布后不知道自己的 skills 还能不能正常工作"这个普遍痛点，plugin evals 来了：在插件目录里跑 `claude plugin eval init` 就行。
https://x.com/trq212/status/2098531560643539440

他对 eval 解读的观点更扎心：如今只看 pass/fail 分数基本没法解读 eval 了。他见到的很多 benchmark 失败，其实是隐藏测试写得过于严苛——有时模型的回答比"标准答案"更合理。1500+ 赞，说明戳中了普遍痛点。
https://x.com/trq212/status/2098490139798655427

### Guillermo Rauch（Vercel CEO）
Tailscale 的 model router 底层由 Vercel AI Gateway 驱动。他顺势抛出一个判断："AI Gateways 就是新一代 CDN"——你可以直连 origin，但那很脆弱；你可以自己造，但痛苦又昂贵。
https://x.com/rauchg/status/2098531157230969062

### Aaron Levie（Box CEO）
Box 现在可以直接挂载到 agent sandbox 里，让 agent 在自己的运行环境中读写企业文件。他的逻辑是：当 agents 在企业里执行关键工作流时，它们需要和人类早已拥有的相同的基础原语。
https://x.com/levie/status/2098478938003841123

### Madhu Guru（Meta AI 高级总监，前 Google，曾主导 Gemini / Veo / Nano Banana）
一篇诊断"为什么大多数企业 AI 项目失败"的长文，指出三大病因：一，用老派打法做 AI——CEO 指定亲信组建中央 AI 团队，但这套团队结构和产品方法论与 AI 需要的实验和发明气质完全错配；二，evals 投入严重不足；三，中央平台团队在脱离实际工作流的地方造工具，得到的是勉强的采用和微乎其微的生产力提升。他的药方：雇佣真正成功构建过 AI 产品的负责人、把 evals 当一等公民、把最好的 AI builder 直接嵌入财务、销售、支持等要变革的职能里，与他们一起 build。
https://x.com/realmadhuguru/status/2098448235048378456

### Peter Yang
做出了他的工具大迁移决定：本地定时任务全部留在 Codex，云端任务全部迁到 Grok Bot，切分干净。
https://x.com/petergyang/status/2098614492066435228

他对当下流行的"软件工厂"泼了盆冷水：除了验证与测试环节，AI 还远没到能端到端自我改进产品、无人在环构建新功能的程度。隔夜挂一个任务去建新东西，只要一个假设错了，整晚就是纯烧 token。他发起灵魂拷问：有哪个产品或功能是软件工厂在无人工定义需求、无人检查工作的情况下端到端建成的？
https://x.com/petergyang/status/2098565668241334366

### Zara Zhang
一条引发 200+ 条回复的观点："一人公司"被高估了。AI 确实让一个人能做更多事，但构建新东西是一种极度孤独的体验——你需要有人一起头脑风暴、一起熬、一起庆祝；不把自己和另一个人绑在桅杆上，极容易失去动力。
https://x.com/zarazhangrui/status/2098483800456179923

### Garry Tan（YC 总裁兼 CEO）
SAT 考到 1600 满分后，应该解锁一份更难的第二场考试、拿第二个分数——"我们应该有更多、更高的卓越标准"。而现实是他们把 SAT 禁了，一切都变成随机抽签，卓越无处被认可。730+ 赞。
https://x.com/garrytan/status/2098615692425851205

### Dan Shipper（Every CEO）
好的 benchmark 分数并不能告诉你模型在真实工作上的表现。三年来 Every 坚持对新模型做 vibe checks——基于自家真实工作的长篇实测 review。现在他们加倍下注并走向量化：内部搭了平台，让每个成员基于自己真实的日常工作建立 personal benchmarks。
https://x.com/danshipper/status/2098481799047647715

### Nikunj Kothari（FPV Ventures 合伙人）
"成功有许多父亲，而失败是孤儿。"他看到极其成功的 VC 们争抢热门 deal 的署名，才真正体会到这句话的分量——大额退出（或估值上调）极其稀有，那是募下一期基金的命根子。所以他预言：未来几年会看到很多名字被"技术性抹去"，人人都在抢着改写历史。短期新兴 GP 难以获得应得的署名，但创始人会是真正的 reference check。
https://x.com/nikunj/status/2098550718923997430

### Peter Steinberger（OpenClaw + OpenAI）
给 trycua 提了个 patch，让按键操作在 Linux 下更可靠，顺便夸了框架本身。另一边，他让 Astra 在 OpenClaw 的云端会话里用 CUA 玩起了 Doom："离 AGI 还远，但大概能赢过苍蝇的大脑。"270 赞。
https://x.com/steipete/status/2098527519213604889

### 🕯️ 9/11 二十五周年
Matt Turck（FirstMark Capital 合伙人）罕见地写下了自己的 9/11 故事：2001 年他是一家 25 人纽约初创公司的年轻联创，办公室就在世贸北塔 53 层——而他们曾差点选了 104 层的顶层办公室。那天早上只有一位同事 Kenton 在楼里，幸运生还，团队当天就让业务恢复运转，公司后来被 Oracle 收购。"如果晚一小时、低几层楼、或当初选了另一间办公室，一切都会不同。"
https://x.com/mattturck/status/2098517022049190227

Aditya Agarwal（SPC 合伙人，前 Dropbox CTO）也在回忆：那天他正在 CMU 的教室里上课，其中一架被劫持的飞机曾飞近匹兹堡。"那天有太多英雄。"
https://x.com/adityaag/status/2098580235268899123

---

## 🎙️ PODCASTS

### No Priors: Coinbase's Everything Exchange — Agentic Finance, Stablecoins, and Tokenization | Brian Armstrong（Coinbase CEO）

**一句话要点：加密货币对人类是不错的补充，对 AI 则是必需品——Coinbase 正在给 AI agent 开银行账户，并押注 agent 经济终将超过人类经济。**

Brian Armstrong 是 Coinbase 联合创始人兼 CEO，这期对话横跨 agentic finance、稳定币支付、代币化和他参投的抗衰老公司 New Limit。他抛出的核心论点直白得惊人："We don't want the AIs to be unbanked."——AI agent 也没有政府 ID，走不进银行网点，所以 Coinbase 让任何 agent 用一句 prompt 就能开自己的自托管金融账户，无需 KYC。数据显示 76% 的 agent 电商交易金额不到 30 美分，而银行卡最低 30 美分的手续费让传统金融在 agent 经济里根本玩不转。他们孵化的 X402 协议已捐给 Linux 基金会，Google、Cloudflare、AWS 都在跟进。

最有反差感的是他描述 Coinbase 内部的"递归自我改进"系统：每个团队、每个代码仓库都有一个"大脑"——所有事故史、财务控制要求、A/B 测试、PR 通过与拒绝的完整历史，全是 markdown 文件。每当 agent 改代码出错、人类修正后，修正必须回写进大脑，于是 agent 一次过审的 PR 比例持续上升。效果戏剧化：这位 CEO 本人重新写起了代码——他让一个高级模型把复杂功能拆成 3 阶段 × 10 件事，并行开 10 个更便宜的 agent（Grok 和开源模型）去执行，"上播前两分钟，10 件事全部完成等他审"。他的评价是："It's very addictive"——以前整天在 Slack 里催团队，现在直接给团队发 PR。

数字层面同样有信息量：Coinbase 88% 的收入已来自比特币以外的交易；预测市场上线数月就做到 1 亿美元年化收入，环比增速超 100%；代币化股票在美国以外上线，是全球首个 1:1 对应真实托管证券的产品。他反复强调 crypto 目前只承载全球 GDP 的约 0.5%，目标是从 7 亿用户走向 10 亿以上。结尾那句值得记住："Crypto was really, really good for humans, and it's going to be essential for AI."

完整对话：https://www.youtube.com/watch?v=uLDK4l_-gUE

---

*Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders*
