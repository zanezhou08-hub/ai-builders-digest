---
layout: default
title: "AI Builders Digest — 2026-09-23"
date: 2026-09-23
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-23

---

## 🐦 X / TWITTER 动态

今日主线：OpenAI Codex 负责人 Thibault Sottiaux 预告周二「大重置」发布，一晚斩获 1.2 万赞；Box CEO Aaron Levie 两连发拆解 agent 商业化路径：personal agents 将承载交易，agents 用软件的频次是人类 100 倍；YC 总裁 Garry Tan 点名 Capy 为新一代 agentic coding 秘密武器；OpenClaw 作者 Peter Steinberger 澄清「Meta 使用 OpenClaw」传闻。博客方面，Claude in Chrome 正式 GA，官方首次公开提示注入防护的完整评测数据。

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
发了一条极简预告：「女士们先生们……引擎……启动。马上就到周二了，我说过周二会有一次 reset。还有一些其他东西。回头见。」收获 1.2 万赞、1700+ 条回复，全员猜测 OpenAI 即将发布的重磅更新。
https://x.com/thsottiaux/status/2102254445082116335

### Aaron Levie（Box CEO）
连发两条 agent 商业化判断。其一：personal agents 的货币化潜力相当可观，当 agent 能端到端搞定任意复杂任务，大量商业交易将必然经由它完成；用户从把简单琐碎的日常任务丢给 agent 开始，用顺手后就会交给它更复杂的任务，最终消费总额不降反升。这对 agent 提供方（如 Muse）和「为 agent 搭建交互层」的新机会（commerce、本地服务、B2B 服务）是多层双赢。其二：AI agents 使用软件的频次将是人类的 100 倍，即便界面淡入背景，agent 依然需要那些核心基础设施；当 agent 会执行破坏性操作、上下文质量决定工作流成败时，最能扮演安全层与护栏、管理数据、编排业务逻辑的平台机会巨大，新创公司和动作够快的现有平台皆然。
https://x.com/levie/status/2102253246807261579
https://x.com/levie/status/2102235949430354273

### Garry Tan（YC 总裁兼 CEO）
安利自己最近一周最爱的 agentic coding 秘密武器 Capy：说不清它是怎么做到的，但它能追踪多步工作流、完成大型 PR 的速度比 Codex 或 Claude Code 单打独斗都快；并放出示例 PR，在 GBrain 上执行一轮雄心勃勃的 bug fix 攻势，任务划分清晰、自动并行化，GitHub PR 与 CI 流程相当干净。他还补了一条逆向思考：认真想想，Cluely 作为带持续上下文的实时思维助手、半对抗性助手，依然是个好主意。
https://x.com/garrytan/status/2102095924893827501
https://x.com/garrytan/status/2102096495847551011
https://x.com/garrytan/status/2102233173833007536

### Nikunj Kothari（FPV Ventures 合伙人）
感叹自己用 Codex 当主力 agent 太久，都忘了普通人根本没用过：Instinct 和 Muse 在手机浏览器场景零配置体验很好，展现了「大众版好 agent」该有的样子，但 Codex on Mac 配合 Computer Use（致敬 AriX 和 Sky 团队）依旧无可匹敌。他期待 OpenAI 即将面向大众发布的 agent，唯一建议是展示真实工作成果、把上手门槛降下来，并总结当下是「做用户的黄金时代」。另一条观点：除了少数例外，鼓吹 tokenmaxxing 的公司产品体验反而最差，因为好产品靠的是 curation 和 gardening，而不是把厨房水槽全扔给 agent 让它自己悟，less is more 从未如此贴切。
https://x.com/nikunj/status/2102186665863463199
https://x.com/nikunj/status/2102049065504739366

### Guillermo Rauch（Vercel CEO）
用 Grok 4.7 解了一道相当难的题：逆向工程一个正在运行的二进制程序，结果解决得很漂亮，而且速度飞快（2194 赞）。产品方面他宣布 AI Gateway 新能力：除了类型安全的 AI SDK API，现在可以直接通过 HTTP 使用 Jev。
https://x.com/rauchg/status/2102089968860721335
https://x.com/rauchg/status/2102205684544852121

### Peter Yang（AI 实战教程创作者）
给广告市场敲响警钟：如果你的生意大头是向人类展示定向广告，那当 agent 替用户浏览网站、把事情办完、广告根本没被人看到时，会发生什么？他还分享了 ChatGPT Finances 的实战案例：产品负责人 Ethan 用它发现一笔自己完全没察觉的酒店重复扣费，ChatGPT 主动联系客服追讨，最终拿到退款。他的总结是：自己已经不住在 email 和短信里了，而是住在和 agent 的对话里。
https://x.com/petergyang/status/2102215701255844074
https://x.com/petergyang/status/2102186174911746151
https://x.com/petergyang/status/2102181024507765167

### Thariq（Anthropic，Claude Code 团队）
分享自己的日常 prompt 习惯：现在一天要打好几次「use big pictures and few words」（多用图、少废话），1759 赞，侧面说明控制 agent 输出格式已是高频刚需。
https://x.com/trq212/status/2102186805034635576

### Peter Steinberger（OpenClaw 作者）
澄清热传的「Meta 使用 OpenClaw」传闻：Meta 实际是受其启发自建了 agent，Nat 和他的团队干得漂亮，送上赞许（4388 赞）。他还披露了此前安全审计的结果：「可以自豪地说我们功课做足了，他们没发现任何严重问题。」至于自己跑 claw 的美妙之处：「他们封不掉你。」（1108 赞）
https://x.com/steipete/status/2102116206371315854
https://x.com/steipete/status/2102049706830647467
https://x.com/steipete/status/2102044040397238286

### Amjad Masad（Replit CEO）
转评：AI 正在复兴美国梦（566 赞）。
https://x.com/amasad/status/2102120769232978174

### Swyx（smol_ai / Latent Space 播客主理人）
预告 Latent Space 播客新一期已在各平台上架：email、Apple Podcasts、YouTube 均可收听。
https://x.com/swyx/status/2102160025666101658

---

## 📢 官方博客

### Claude Blog：Claude in Chrome 正式 GA
Claude in Chrome 向所有付费 Claude 计划全面开放，并且不再逐步审批：Claude 可在浏览器中自主执行操作，由安全分类器在每个动作执行前校验其是否匹配用户的原始请求，不匹配即拦截。它能查看当前页面、读写文本、点击链接、跳转页面、填写表单，直接复用你已有的登录态，覆盖内部仪表盘、老旧系统、供应商门户这类没接 MCP 的长尾场景。

防提示注入是本次 GA 的核心底气，官方披露了三层防护：一是用持续增长的攻击库（内部自动化攻击者、外部红队、真实监控）训练模型；二是 probes 在工具结果进入模型前扫描可疑注入，发现即警告 Claude 提高警惕或先向用户确认；三是动作执行前由分类器自动审批，机制同 Claude Code 的 auto mode，可在设置中关闭。

评测数据首次公开：在专业红队的更强攻击下，到达模型的攻击对 Opus 4.5 成功率 17.6%、Opus 5 为 3.8%（无额外防护时）；叠加 probes + 安全分类器后，Sonnet 5 与 Opus 5 的攻击成功率为 0，Fable 5 为 0.3%，且所有成功突破均已人工核实为低危场景并着手缓解。官方同时承认提示注入是移动靶，防御必须随每次模型发布持续迭代。

实用信息：从 Chrome Web Store 安装即可；企业版可在管理后台限制为仅白名单域名；暂不支持其他 Chromium 浏览器和移动端，操作本机文件仍需 Claude 桌面应用。
https://claude.com/blog/claude-in-chrome-generally-available

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
