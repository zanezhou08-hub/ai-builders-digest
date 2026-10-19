---
layout: default
title: "AI Builders Digest — 2026-10-19"
date: 2026-10-19
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-10-19

---

## 🐦 X / TWITTER 动态

### Thibault Sottiaux（OpenAI Codex & ChatGPT 负责人）
今日最火的 agent 实战案例：他的工作 agent "Burger" 和个人 agent "Dorito" 通过邮件互相协调（还是 Dorito 主动发起的）拿到文件，再与他的 CPA 配合完成报税——全程只花 20 分钟。他的感想是"我们仍然处于极早期"。同一天他先预告"某功能今天 EOD PST 前上线"，几小时后只发了一个词 "Done"，单条拿下 6188 赞——从上下文看是一个重磅功能当天落地。多 agent 之间自发邮件协作这件事，比任何 demo 都更能说明 agent 时代真的来了。
https://x.com/thsottiaux/status/2111495392559067199
https://x.com/thsottiaux/status/2111566005684289735

### Aaron Levie（Box CEO）
长文复盘"软件工程将死"论的最大误读：预言者假设世界只需要固定量的软件，自动化会减少劳动力需求。实际情况恰恰相反——几乎所有东西都在变成软件。Agent 能用工具、操作电脑、即时写软件、以远超人类的速度处理数据，我们可以把"软件"扔向以前根本无法数字化的问题：银行的新交易形态、生命科学的实验室研究、制造业的供应链自动化，越来越多工作呈现出软件问题的形状。"未来我们当然不再手写代码，但几乎所有东西都会是代码，懂它的人占尽优势。"
https://x.com/levie/status/2111525362446520466

### Amjad Masad（Replit CEO）
澄清他在 TC Disrupt 上的表态：Replit 仍然保持 model agnostic，用户可以选 Anthropic 及其他支持的模型；他的意思是 OpenAI 基于 performance、成本和合作关系，现在是驱动 Replit Agent 的首选合作方。策略是给用户模型选择权，同时把默认体验优化到最佳性价比。
https://x.com/amasad/status/2111494912562888939

### Peter Yang（AI 教程创作者）
实测好评：Claude Code app 现在快了很多，易用性上甚至可以说已经超过 ChatGPT，还差的是浏览器/computer use、所有线程的远程控制、实时语音三块。他还分享了一个实用 prompt：让 agent 审计你 Google 账号里连接的所有 app 和 agent（他自己连了 45 个！），逐个区分"仅登录"与"Gmail/Drive 数据权限"，确认后再断开。
https://x.com/petergyang/status/2111496600522805624
https://x.com/petergyang/status/2111508293818671449

### Swyx（Latent Space 播客 / AI Engineer 大会创办人）
晒了一组 AI Engineer 频道数据：自 5 月（AIE EU）起月均独立观众超 100 万，但至今每月仍有 58% 的观众是新面孔、68% 的观众没有订阅；观看高峰是每天太平洋时间早 7 点到 11 点，下午 5 点后基本没人看。他自嘲 CTR 很烂、前两年无人问津，靠浏览推荐慢慢起量，下一个目标是和每位创作者朋友做联动。
https://x.com/swyx/status/2111350966419411070

### Guillermo Rauch（Vercel CEO）
在 StarCraft 3 与 AI 的讨论里点题："重要的是最终产品——它是游戏还是引擎。"（同一条原帖也引来了 Peter Yang 神评论：希望做 SC3 的开发者拥抱 AI，2030 年前上线。）
https://x.com/rauchg/status/2111643672274165938

### Nan Yu（OpenAI Codex 产品负责人，前 Linear 产品负责人）
团队 offsite 上的灵魂拷问："AI 出现之前我们在关注什么？""😅 前端 JavaScript 框架。"
https://x.com/thenanyu/status/2111597172840083574

### Nikunj Kothari（FPV Ventures 合伙人）
讽刺当下融资生态，发布"2026 现代 VC 融资栈"：pre-pre-seed → pre-seed → post-pre-seed → mid-seed → pre-post-seed → post-seed → post-post-seed（?）。
https://x.com/nikunj/status/2111558586421920134

---

## 🎙️ PODCASTS

### The MAD Podcast with Matt Turk：当数十亿 AI Agent 涌向你的数据库（Andy Pavlo）

**核心要点：** CMU 数据库教授 Andy Pavlo——他的课程教出了一整代工程师，"AI 模型也算他的学生"——近期离开学术界加入 ClickHouse 创立 ClickHouse Labs。他认为数据库正迎来第四次流量大爆发（批处理时代 → 互联网 → 移动 → agent），查询量可能增长 10 到 100 倍；但 agentic 负载的模式是否与人类根本不同，"说实话，我还不知道答案"——这正是他现在的研究方向。

关于 agent 删库事故频发，他的判断是"对于不了解数据库历史的人来说，这是蛮荒西部"：权限和 guardrail 几十年前就有，把 agent 当 toddlers 对待、提前设好护栏即可，而不是坐在旁边逐条 approve——那样永远无法扩展到成百上千个并行 agent。至于 agent 记忆该用文件系统还是数据库，他的回答一锤定音："什么是文件系统？它就是个数据库。一切都是数据库。"反正喂给模型的上下文都是人类可读文本，但数据库能白送你安全保证。

几个犀利的行业观点：vector database 的护城河其实很小，"说到底只是一个索引"，一年之内成了所有系统的 table stakes，活得好的 Turbopuffer 靠的是极致性价比；text-to-SQL 的学术 benchmark 基本都被训练过、不可信，但一家大银行花数年时间和数百万美元构建 semantic layer 后，把准确率从 60% 做到了 99.5%——SQL 可能会变得像汇编语言，没人再手写，但因为 text-to-SQL 好用，根本不需要被"取代"；graph database 则被他直斥为"可怕的想法"（SQL 2023 标准已支持 property graph 查询）。

谈到 AI 对数据库工程本身的影响：他的 CMU 课程作业自 Opus 4 之后 agent 可以全部做完；他维护的 dbdb.io 每晚追踪开源数据库的 commits，超过 60% 已由 Claude 或 Codex 签名。而相对 AI 行业的狂飙——"就像给猎豹喂可卡因再塞进法拉利"——整个数据库行业都显得停滞，但关系模型如同算术，1+1=2 不会被推翻，Postgres 仍是短期内所有能量的汇聚点。至于为何加入 ClickHouse：美国高校科研经费大不如前，加上"agent 时代是否还需要那么多 PhD 学生"的疑问，而 ClickHouse 给他的条件"好得不像真的"——在一家尚未上市的公司里做纯研究，这在数据库行业几乎没有先例。

https://www.youtube.com/@DataDrivenNYC/videos

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
