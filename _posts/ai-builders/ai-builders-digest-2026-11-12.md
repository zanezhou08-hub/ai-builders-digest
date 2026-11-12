---
layout: default
title: "AI Builders Digest — 2026-11-12"
date: 2026-11-12
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-11-12

## X / TWITTER

### Gemini 4 Carbon 发布：编码大幅超越 Argon，写作持平但更贵

本日主角是 Google 的 Gemini 4 Carbon。Josh Woodward（Google Labs/Gemini App VP）宣布 Carbon 已上线 Gemini App，面向全球 Ultra 订阅用户。Dan Shipper（Every CEO）照例送上 day-zero vibe check（143 赞）：

- **编码**：Senior Engineer benchmark 上 Carbon 得分 44%，Argon 只有 21%，大跃升但仍属中游。hammer_mt 给它一个 backlog，它识别出 6 个可开工任务，然后干了 15 个，包括别人正在做的活，4.5 小时后被手动叫停，"不知道何时该停"是明确短板。
- **大型构建**：RandyCounsman 给它播客工作室的 3D 扫描和设备清单，它一次就做出浏览器模型，精度足以判断新器材入不入镜；Everycut 视频编辑器的大更新约 95% 由 Carbon 写成。
- **代码质量**：kieranklaassen 称赞它的测试与文档，包括"考虑过又放弃的方案"记录；但会产生巨型文件，Fable 更模块化，两者各有位置。
- **音视频与设计**：抓到了其他模型漏掉的音频剪辑问题；会议录音能直接产出 6 条带标题的 shorts；银杏叶 app 图标的超写实细节令人惊艳，但界面设计团队评价两极。
- **写作**：与 Argon 基本持平但更贵，"没看到足够理由切换"。

Reach Test：🟨 有时用。给它一个大任务和清晰的终点线，回来时记得 review。

https://x.com/joshwoodward/status/2120186249281778135
https://x.com/danshipper/status/2120187507396530309

---

### Claude 产品三连：Data 转正、Whiteboards、Sheets 与交互式连接器

Claude 官方账号集中发布产品更新：Claude Data（原 Dashboards）在付费计划正式 GA，除仪表盘外还能起草 data story 和带解说的视频（1683 赞）；交互式连接器让你可以直接在 Claude 里打开 Adobe、Atlassian、Box 的完整工具界面，边对话边操作，自己在工具里改或者让 Claude 帮你改，网页端和桌面端滚动上线（2885 赞）；另有 Claude Whiteboards、Sheets 等更新同步推出。

https://x.com/claudeai/status/2120206372478566799
https://x.com/claudeai/status/2120206375137484875
https://x.com/claudeai/status/2120206379315261702

---

### Box CEO 双响：与 Anthropic 打通 MCP 全读写 + "Agent Swarm 将造出新工种"

Aaron Levie（Box CEO）宣布与 Anthropic 合作，通过 MCP 实现 Claude 对 Box 内容的完整读写互操作：agent 不仅能拉取内容，还能把更新写回 Box 并直接在 Claude 里查看，合同、演示文稿、策略文档均可创建编辑。"未来 agent 处理企业文件的量会是今天人类的 100 倍。"他的另一条长文展望 agent swarm：从 chat（提速交互）到 agent（把几小时压缩成几分钟）再到 swarm（目标导向、不设产出上限），游戏开发、编码、交易、生命科学、网安、数学突破都在射程内，"一整个新的 FDE 工作领域正在出现"。

https://x.com/levie/status/2120261416733036905
https://x.com/levie/status/2120385739342897469

---

### Vercel Security Review 一周战报：5.7 万漏洞，1.5 万已被 agent 自动修复

Guillermo Rauch（Vercel CEO）公布 Security Review 上线不到一周的数据：57,897 个漏洞被识别，其中 6,029 个为 critical/high，14,665 个已由 agent 自动修复。"① 有这么多致命漏洞本来根本没人发现，② agent 修复它们如此轻松，这两点都让我震惊。"任意 repo 可开，不限部署平台。

https://x.com/rauchg/status/2120188488628977819

---

### Rauch：Rust 诞生于 agentic coding 之前，而 agent 时代语言会百花齐放

Guillermo Rauch 的语言观（518 赞）："Rust 是门出色的语言和生态，尤其考虑到它诞生于 agentic coding 时代之前。有了 agent，新语言会绽放，包括为特定场景定制purpose-built的语言，以及随手可得的 C、甚至 LLVM IR、汇编……AI 是流动的，不再有 one-size-fits-all。"

https://x.com/rauchg/status/2120337388178379178

---

### Thariq：我们需要更少的 one-shot demo，更多"如何与模型协作"的工具

Thariq（前 Claude Code 成员，1590 赞）："我们需要的不是更多一次性 demo，而是更多能展示如何与模型协作、把你的愿景带进现实的工具。"在模型演示越来越炸裂的当下，这是一条清醒的反算法宣言。

https://x.com/trq212/status/2120223476279869875

---

### Steipete 热转：日本企业用 GPT-6 Astra 重跑诊断，多找出 3.5 万个漏洞

Peter Steinberger（OpenClaw 作者，1334 赞）转述：某公司对约 700 个系统做诊断，发现 10,500 个漏洞，开紧急发布会花了三个月修复；随后用 OpenAI 最新模型 GPT-6 Astra 重跑诊断，确认了 35,000 个新漏洞。"说实话，我们已经彻底累垮了。"安全团队与 AI 扫描能力的军备竞赛正在加速。

https://x.com/steipete/status/2120228665946710248

---

### Peter Yang：如果 Anthropic 能加速治愈这些疾病，它将是史上最有影响力的公司之一

Peter Yang（437 赞）："我其实不太在乎股价，但如果 AnthropicAI 能加速治愈这些可怕的疾病，它会成为历史上最有影响力的公司之一。我很高兴 Dario 专注于此，而不是去卷病毒短视频和 TikTok meme。"他同时为游戏行业辩护：用 AI 量产垃圾和把 AI 当工具做出好游戏，是两回事，开发者与玩家对"有品味的 AI 使用"的盲目抵制并不明智。

https://x.com/petergyang/status/2120320377163501817
https://x.com/petergyang/status/2120370522622181809

---

### Ryo Lu：魔法发生在人与人协作中，而不是每人指挥自己的 agent 大军

Ryo Lu（Cursor、Notion、Stripe 的设计者，314 赞）："与其他人一起工作才是魔法所在，而不是每个人在孤岛里指挥自己的 agent 军队。"在 swarm 叙事甚嚣尘上的这周，这句反击值得一读。他同日分享长文：我们做软件不只是为了优化和完成任务，而是像电影人和音乐人一样，让人进来、让人创造、让人找到自己。

https://x.com/ryolu_/status/2120337691661443081
https://x.com/ryolu_/status/2120380317429350654

---

### Zara Zhang 的两条朴素定律：留存与分享

Zara Zhang：① "如果用户没有回来：20% 是因为不喜欢你的产品，80% 是因为忘了它的存在"（119 赞）；② 分享工作的第一步：别等做完或做完美，分享半成品，有时候这恰恰是你判断它值不值得做完的方式（266 赞）。

https://x.com/zarazhangrui/status/2120235104194932841
https://x.com/zarazhangrui/status/2120041030951297033

---

### Swyx 预告 AIE 大会 + 追问 Resend 的 AEO 之谜

Swyx 预告 AI Engineer 大会："我提前看了他的 keynote，你们不知道周四等着你们的是什么。我 literally 签了 embargo 才把这场演讲请上船（这还不是全部）。AIE 直播明后天 9am-6pm。"他还发了与 Zeno Rocha 的对谈片段："我终于问了这位'AEO 之王'的 CEO：为什么我的 agent 总是选 Resend，哪怕我并不想用。"

https://x.com/swyx/status/2120372817720197357
https://x.com/swyx/status/2120260228902264872

## PODCASTS

### Latent Space：为 Agent 而设计——Resend 创始人 Zeno Rocha 深度对谈

**The Takeaway**：在 agent 重新定义软件分发的年代，Resend 的打法是"formless product + 官方 MCP + AEO 精细化运营"。创始人 Zeno Rocha（Dracula 主题作者出身的前端工程师）把一个"如果事先调研就不会入场"的赛道做成了 430 万用户、12 万付费客户、$10M ARR 的生意，SDK NPM 下载量已是 SendGrid 的两倍。

**从零到赢的路径**：完全不懂 email 基础设施反而是最大优势，没有"什么该做什么不该做"的成见。竞品都要求先填表、人工审核、两天后大概率拒绝，Resend 反其道而行：默认信任，进门前零摩擦；一旦 bounce/投诉率异常立刻快速拦截，"多数是 misuse 而非 abuse"。

**邮件送达的黑暗艺术**：逆向工程钓鱼者然后反着做。给 10 万人发信不能一把梭，Gmail 会 throttle；要把最活跃用户排在队列前部、分批间隔发送、按邮箱提供商分流，买 IP 段还要查它的历史信誉。信誉体系已从 IP 时代转向域名时代：transactional 和 marketing 用不同子域隔离，连投资人邮件都走 confidential.resend.com。

**MCP 与 AEO 是新分发**：MCP 月调用量 120 万且逐月翻倍，工具数从 20 个加到 80+ 还在加（与 Cloudflare 只留 2 个工具的路线公开唱反调）；他本人的采购决策已被改写：因为 PostHog 有官方 MCP 而 Plausible 没有，直接砍掉 Plausible。AEO 打法：每个页面加 FAQ、llms.txt、给所有页面做 .md 版本、把定价计算器从 JS widget 改写成 LLM 可读文本，"改完几天后模型就把价格答对了"。

**对 Next.js 的批评**：server components 让你把数据绑死在页面上，默认不再暴露公共 API，"这是 Next.js 的失误之一"；正确的架构是完全 headless 的后端，前端只是众多客户端之一。

**生活侧**：为了第二个孩子搬回巴西。"我宁愿活在 $10M ARR 但女儿愿意跟我玩的世界，也不愿活在 $100M ARR 但女儿对我没兴趣的世界。"招聘页可以 CLI 或 API 投递简历，走 CLI 来的人会被另眼相看。

Key quote: "You gotta do exactly what an abuser wouldn't do. We kinda reverse engineered how phishing works and built a platform that does exactly the opposite."

https://www.youtube.com/@LatentSpacePod

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
