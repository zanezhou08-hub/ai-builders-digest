AI Builders Digest — 2026-09-30

## X / TWITTER

### Sam Altman
OpenAI CEO

Sam Altman 为今天的 DevDay 预热，只留下一句意味深长的话："我们对明天的 DevDay 相当期待。我们找到了一个新东西。" 这条帖子拿下 8000+ 赞，全网都在猜这个 "new thing" 到底是什么。

https://x.com/sama/status/2104661956879913457

### Thibault Sottiaux
OpenAI Codex 与 ChatGPT 负责人

在 DevDay 前夜，Thibault Sottiaux 主动公开了 Pro $200 订阅的调整：明天重新开放新用户订阅，但用量计算方式改变，折算下来相当于老 Pro $200 计划一半的 API 支出额度。他给出三点解释：一是不妥协地承诺永不恢复 5 小时限制，让你随时用满每周额度；二是承诺订阅用户长期获得的"工作量"只会越来越多，模型效率提升会以 API 降价的形式传导回来（本周 GPT-6 Sol 和 GPT-6 Luna 已降价 50%）；三是不想通过人为抬高 API 定价来让订阅"显得划算"。他还预告明天会公布订阅中不消耗用量的新内容。

https://x.com/thsottiaux/status/2104823812042940713

### Boris Cherny
Anthropic Claude Code 创造者

Boris Cherny 用一句话总结 Sonnet 5.5 在 Claude Code 上的表现：修同一个 bug，速度提升 30%，用量减少 30%。这条帖子拿下 4800+ 赞，是 Sonnet 5.5 发布后最热的第一手反馈。

https://x.com/bcherny/status/2104638725317923228

### Cat Wu
Anthropic Claude Code 与 Cowork 团队

Cat Wu 补充了数据：在 Claude Code 中，用户用 Sonnet 5.5 比 Sonnet 5 平均多完成约 30% 的任务，因为模型更聪明，同样工作需要的 token 更少。她还放了个有趣的演示：让模型用 tool calls 耙院子里的落叶，Sonnet 5.5 比 Sonnet 5 快 24 秒、省 6K tokens，"省下的时间够她多读会儿书"。

https://x.com/_catwu/status/2104639552170377399

### Thariq
Anthropic Claude Code 团队

Thariq 三条帖子都在讨论 Sonnet 5.5 时代的工作方式。最火的一条（4200+ 赞）是个观察：现在已经基本不可能"只给你看 prompt"了，因为一切都在于 references、skills 和 examples，"我经常让 agent 先看我做的另外 3 个 repo、搜网上的参考资料、调用其他 AI API"。另一条 2700 赞的帖子只是简单一句："我刚跟 Claude 说，能不能帮我把这个问题一步一步想清楚。" 他还提到有了 Sonnet 5.5 和 Opus 5.5，projects、claude tag、dynamic workflows 这类高层抽象的 token 成本顾虑应该不复存在。

https://x.com/trq212/status/2104608785696440510

https://x.com/trq212/status/2104702728270471594

https://x.com/trq212/status/2104660926373023830

### Alex Albert
Anthropic 研究团队

Alex Albert 评价 Sonnet 5.5：手感跟 Opus 5.5 很像，写得清晰、速度很快，相对 Sonnet 5 是一次大的能力跃迁，"是非常好迭代的模型"。

https://x.com/alexalbert__/status/2104633937280811010

### Aaron Levie
Box CEO

Aaron Levie 分享了 Box 在企业场景对 Sonnet 5.5 的 early access 测试结果：最难的知识工作测试整体提升 4 个百分点，完成交付物速度快约 2.4 倍、token 少 12%。几个亮点任务：金融服务尽调审查（发现交易手册里算错的利息总额和定价错误的期权，+48 分且快 61%）；商业租约审查（拒绝编造"行业标准"续约条款，而是指出合同真正缺什么）；生命科学实地试验报告（正确算出两组处理的标准差，快 41%）。

https://x.com/levie/status/2104648654074343480

### Dan Shipper
Every CEO

Dan Shipper 宣布 Sonnet 5.5 发布：在他的测试中，写作能力相对 Opus 5.5 有显著提升，虽然 Astra 仍是他的写作首选，但这个模型在修改任务上反超。它比 Opus 5.5 更快更便宜，已成为同事做快速迭代编码和设计工作的首选。他也调侃 OpenAI DevDay："我 2023 年以来每届都去了，这是 OpenAI 有史以来发布最多的一届。" 还发现一个细节：OpenAI 的 designers "肯定是在耍我们"。

https://x.com/danshipper/status/2104636728992776510

https://x.com/danshipper/status/2104662907716050988

https://x.com/swyx/status/2104741800393253322

### Peter Yang
AI 实战教程作者

Peter Yang 感慨 X 上用户的"墙头草"属性：几个月前说 "Anthropic 被 Codex 打垮了"，现在又喊 "OpenAI 被 Claude 5.5 干趴了"。他的态度是庆幸有多个竞争者一起推进前沿，"我们所有人都是受益者"。他还用 Sonnet 5.5 做了一个可玩的 StarCraft 关卡：扮演人族，造机枪兵、攻城坦克和战巡舰抵御虫族，模型来自 Sketchfab，音乐由 Suno 生成。今天他也会第一次参加 OpenAI DevDay。

https://x.com/petergyang/status/2104809410040336784

https://x.com/petergyang/status/2104736498151256303

https://x.com/petergyang/status/2104781373433377030

### Guillermo Rauch
Vercel CEO

Guillermo Rauch 分享了一次迁移实战：团队把一个成熟站点迁到 Vercel，尽可能少干预，结果构建快约 70%、页面渲染快约 75%，整个项目一周内完成，还从迁移中提炼出两个 AI skills 准备回馈社区。另外 Vercel 现在支持无鉴权搜索域名，"对 agent 特别友好"。

https://x.com/rauchg/status/2104660502723072281

https://x.com/rauchg/status/2104764419305796094

### Garry Tan
Y Combinator 总裁兼 CEO

Garry Tan 认为 Codegen 接入 WhatsApp 是个非常合理的方向：编程 agent 走进聊天软件，意味着写软件正在变成发消息一样自然的事。

https://x.com/garrytan/status/2104771351009702168

### Nikunj Kothari
FPV Ventures 合伙人

Nikunj Kothari 展示了一个由 Opus 5.5 一次生成（one shot）的视频作品，配文只有一个 💥。此前他还发了一条关于融资的思考：当连在位巨头都开始碾压式扩张分发网络时，那些鼓吹"分发即护城河所以要多融资"的投资人去哪了？要回归第一性原理，找到真正的不公平优势。

https://x.com/nikunj/status/2104758141128974358

https://x.com/nikunj/status/2104566122549063756

### Josh Woodward
Google Labs / Gemini App / AI Studio 负责人

Josh Woodward 分享了刚从 Yosemite 回来的感受，转发了一个相关的精彩项目。本周 Google 侧相对安静，重心似乎都在观察 OpenAI DevDay 的动向。

https://x.com/joshwoodward/status/2104616392297451882

### Zara Zhang
独立开发者

Zara Zhang 在找粉丝聊天，想认识三类人：用 AI 做前端但总觉得成品像 "AI slop" 不好看的人、看到 X 上的酷 demo 不知道怎么复刻的人、以及自己就在做这些 demo 愿意分享过程的人。这条帖子收到 70+ 条回复。

https://x.com/zarazhangrui/status/2104689580045979811

### Claude 官方账号

Claude 官方连发三条 Sonnet 5.5 能力演示：同一 prompt 下 Sonnet 5 与 5.5 的弹球物理测试对比、纯代码逐帧绘制的像素风森林生物，并邀请用户分享正在用 Sonnet 5.5 探索什么。

https://x.com/claudeai/status/2104675003673325732

https://x.com/claudeai/status/2104675000787603486

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
