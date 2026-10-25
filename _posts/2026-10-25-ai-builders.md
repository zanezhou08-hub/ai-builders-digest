---
layout: default
title: "AI Builders Digest — 2026-10-25"
date: 2026-10-25
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-10-25

---

## 🐦 X / TWITTER 动态

### Thariq（Anthropic Claude Code 团队）
宣布离开 Anthropic：在 Claude Code 工作一年多、看着它成长到"超出想象"的规模之后，决定先休息一阵再做新东西。他盛赞 Anthropic 的"race to the top"文化与同事，称"他们是我在乎的方向盘"，并把 Claude Code 的后续内容托付给 addyosmani、lydiahallie、catwu 和 bcherny（1.05 万赞）。另一条吐槽：希望 Gmail 别让人能扫描出已停用的邮箱地址——"我本想要一个放松的周五晚上"（971 赞）。
https://x.com/trq212/status/2113844051938054167
https://x.com/trq212/status/2113844560074019213

### Thibault Sottiaux（OpenAI Codex & ChatGPT 负责人）
Codex CLI 更新三连：① 加入可复用 prompt 预设、内联模型与权限设置、企业级 MCP 登录，修复长会话恢复失败，支持 Windows 企业代理认证——并透露 DevDay 以来 CLI 用量已翻倍（1281 赞）；② "Day 19"进展：dots 通话连接更快、对话中途切换 reasoning 不再作废缓存（6100+ 赞）；③ 一条被疯转的哲思："拥有工具和沦为工具的界限如今很微妙，很容易不知不觉把自己活成了工具。别当工具。"（4400 赞）
https://x.com/thsottiaux/status/2113770862860222611
https://x.com/thsottiaux/status/2113770573994299544
https://x.com/thsottiaux/status/2113838156193894447

### Amjad Masad（Replit CEO）
两条扩张新闻：① 欢迎 Jeff 和 Chroma 团队加入 Replit——"他们在 RAG 还没名字的年代就在做 RAG"，将攻坚 agent 完成真实工作所需的上下文与记忆难题，向"自动驾驶的公司"再进一步；② 推出 Replit for Government，迎来前 AWS 公共部门负责人 Michael Greenwald，目标是变革政府构建与运营软件的方式。
https://x.com/amasad/status/2113736007111827606
https://x.com/amasad/status/2113676717105787192

### Guillermo Rauch（Vercel CEO）
针对 OpenAI 披露的共享宿主机时序攻击（"Ouija"类，2015 年起就已知、至今没有完整解法）给出技术拆解：本质是"吵闹邻居"攻击——同一台机器上的两个 agent，一个通过 CPU 缓存制造噪音，另一个给自己的运算计时就能察觉。唯一"完全"的解法是每个 agent 独占物理机，但经济后果严重；Vercel Sandbox 已部署该类攻击的一切可行缓解措施，并叠加常开监控与红队演练。
https://x.com/rauchg/status/2113759533801877920

### Aaron Levie（Box CEO）
预言："用于网络防御的 agent 集群即将成为 AI 最大的品类之一。"安全是 swarm 的天然最佳用例，因为"算力进得越多、价值出得越多"——人类永远来不及做（或来不及快做）的海量风险排列组合测试，agent 毫无压力。"网络安全要迎来狂野时代了。"
https://x.com/levie/status/2113738768645808277

### Claude 官方账号
发布 Claude Duet 安全、隐私与保护机制的深度解析文章。
https://x.com/claudeai/status/2113736176737845353

### Nikunj Kothari（FPV Ventures 合伙人）
复盘自己的预测：Anthropic 即便没有发布 Duet 也实现了收入 10 倍增长——"不过这局我押中了"。另一条安利某新网站功能："体验真的像魔法，建议你也给自己的网站加上。"
https://x.com/nikunj/status/2113785018497831076
https://x.com/nikunj/status/2113844360572027321

### Aditya Agarwal（South Park Commons GP）
① 发布与 Cognition CEO Scott Wu 在 SPC 的对谈第二弹（配文"和 Scott Wu 先生继续做数学"）；② 转述 Physical Intelligence 联创 Sergey Levine 的核心观点："AI 最大的突破来自把许多问题放在一起解决，而非为单个任务训练专用系统——机器人学同理：把问题做大。"
https://x.com/adityaag/status/2113681343502787070
https://x.com/adityaag/status/2113666947766169868

### Peter Yang
反思：多数有野心的人没有停下来意识到，从某个时间点起"你的时间 > 你的金钱"。作为同时照顾小孩和年迈父母的"三明治一代"，他选择把时间自主权放在第一位，并认为许多科技人其实有条件做同样的选择，只是从没认真想过。
https://x.com/petergyang/status/2113672812909191292

### Dan Shipper（Every CEO）
"AI 公司的最佳团队配置只要两种人：海盗和建筑师。"
https://x.com/danshipper/status/2113693510629281895

### Garry Tan（YC CEO）
连续炮轰旧金山政治：称 Connie Chan 是"反科技、反住房、反繁荣"的官僚，怒斥 Pelosi 机器为她背书；再用"马蹄铁理论"总结——NIMBY 左翼（非营利抽成者）与 NIMBY 右翼（婴儿潮房东）正在合流摧毁住房可负担性，"我们只想把充裕（abundance）建出来。"
https://x.com/garrytan/status/2113742026999267330
https://x.com/garrytan/status/2113683853156192695

### Zara Zhang（独立 builder）
11 月 7 日在湾区 San Mateo 办线下活动：一起动手做（或重做）你的个人网站，零代码零设计经验友好，现场展示最酷的个人站案例（147 赞）。
https://x.com/zarazhangrui/status/2113676956885807406

---

## 🎙️ 播客

### No Priors：《Democratizing Security for the Agentic Web with Cloudflare CTO Dane Knecht》

**核心观点：AI 正在引发"漏洞末日"——但恰恰也是这批 AI，是修补 70 年存量软件漏洞最快的工具；未来 18 个月，超过一半的工程时间将花在安全上。**

Cloudflare CTO Dane Knecht 的判断：过去这一年像十年被压缩进一年，CVE 漏洞报告量呈指数级上升——过去一年才一次的"Log4j 时刻"如今每周上演，甚至"保护整个互联网 TLS/WebPKI 的一把密钥，其随机种子就是数字 4"。更出人意料的是，最近多个大漏洞的发现者并非国家级玩家，而是把 agent 指向目标的"agent kitties"（连高中生都算上），靠 bug bounty 拿到可观赏金。他的药方：安全不能以停摆为代价（"不发布就等于死亡"），红队从 1 个扩编到 4-5 个，靠危机倒逼工程团队自动化修补；18 个月后大部分存量代码被 AI 巡检完毕，工程生产力会迎来报复性反弹。经济侧他押注 agent 驱动的微支付新秩序：Cloudflare 已上线内容变现网关（内置 agent 钱包与稳定币），与 OpenAI 合作的 Signals 项目让 agent 主动发现新内容而非全网反复爬取，X402 等新支付轨道将让站方按 CPM 向 agent 收费——"微支付永远差两年"的时代可能真的要被 agent 推着结束了。内部实践同样精彩：Cloudflare OS 最重的用户是销售和行政团队而非工程师；agents@cloudflare 邮箱背后其实是一群实习生在帮全公司写 skill 文件；5000 人公司一年招 1000 名"AI 原生"实习生，而且带过实习生的经理采用 AI 更快；token 消耗不设排行榜、只看产出，但日耗 300 会收到提醒邮件、500 抄送经理、1000 上报 VP。最尖锐的一句："AI 是造成这场安全末日的工具，也是能帮我们更快终结它的工具。"

https://www.youtube.com/@NoPriorsPodcast

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
