---
layout: default
title: "AI Builders Digest — 2026-09-12"
date: 2026-09-12
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-12

---

## 🐦 X / TWITTER 动态

### Boris Cherny（Anthropic，Claude Code 负责人）
Boris Cherny 推荐了 Anthropic 最新的 Threat Intelligence 报告，观点很直接：模型越聪明，如果缺乏足够的安全护栏和监控，就越危险。很多能力天然是双刃剑，擅长写代码的模型也能被用来攻击关键基础设施，能辅助生物研究的模型也可能被用来设计下一代流行病。他认为这些问题复杂、棘手，而且越来越需要全世界共同理解并应对快速升级的风险。
https://x.com/bcherny/status/2098281805770309686

他还公开回复了一位用户的求助邮件，谈 AI 写代码的质量问题：原型代码可以当黑盒，反正要扔，坏了影响也不大；但 Claude 写的生产代码应该比人写的标准更高。Anthropic 内部有大量护栏：大量 lint 规则、测试、Claude 驱动的端到端测试、每日运行的 fuzzer、自动化代码审查和安全审查。如果代码不达标，他的建议是：换最新的前沿模型（Opus 5 或 Fable 5.1）、把 effort 调到 high 或 xhigh、认真维护你的 CLAUDE.md 和 skills 来教 Claude 在你的代码库里怎么干活。
https://x.com/bcherny/status/2098217573276131577

### Thibault Sottiaux（OpenAI，Codex & ChatGPT）
OpenAI 把 ChatGPT Work 背后的 agent 基础设施打包成了 API，主打"按需扩缩的 agents"，官方称一分钟内就能上手开始构建。
https://x.com/thsottiaux/status/2098238138334548260

另一个大动作：由于 Astra 需求暴涨，$200 Pro 订阅对系统压力最大，OpenAI 暂停了 Pro 计划的新订阅，现有账户不受影响，其他计划和 API 照常。这条推文拿到了超过 1.5 万个赞。
https://x.com/thsottiaux/status/2098113585683808624

### Guillermo Rauch（Vercel CEO）
Rauch 给出了 agent 时代基建的愿景："给每个 agent 一台电脑，覆盖每个区域。" 背后是 Vercel 真实的规模压力：现在每天约 1000 万次部署，历史累计 23.5 亿次。他们刚把支撑 CDN 的全球元数据存储在 p99 上提速 91%，整个 build 到 deploy 的流水线随之变快，而且是在 agentic 部署暴增的压力下完成的。
https://x.com/rauchg/status/2098158541932794222
https://x.com/rauchg/status/2098091056302833837

### Aaron Levie（Box CEO）
Levie 这周见了几十位银行、媒体、信息服务、保险、咨询行业的技术负责人，总结出企业落地 agent 的几个真实现状：大家最焦虑的是 AI 带来的安全漏洞激增，OpenAI Hugging Face 事件的余波还在；多数公司同时部署多个前沿模型，标准化几乎不可能；agent 的安全和身份管理成为全新课题；真正的 ROI 来自重构工作流程本身，而不是在旧流程上叠一层 agent；企业换技术栈空前果断，"试过 X 不行就换 Y"；evals 还非常早期，谁先把工作流量化谁占先机；遗留系统依然是最大的绊脚石。
https://x.com/levie/status/2098218284139311615

另外 Box 宣布与 OpenAI 深化合作：用户可以在 ChatGPT 里安全地直接使用 Box 中的企业内容。他的判断是软件正在 headless 化，未来工作属于能在任何地方处理数据、执行工作流的 agent。
https://x.com/levie/status/2098135659714085281

### Amjad Masad（Replit CEO）
Masad 公开表态：AI 的风险里他最担心的是网络安全这类问题，但"灭绝风险"，也就是字面意义上 100% 的人类死亡，根本不在他的担忧清单里。在 AI 安全讨论升温的当下，这个表态相当醒目。
https://x.com/amasad/status/2098171265924116732

### Aditya Agarwal（SPC 合伙人，前 Dropbox CTO）
一个简单的思想实验：如果你有一台只能做一件事的机器，攻克人类最紧迫的疾病，你愿意投入多少 GDP？他的答案是非常高。"而这就是我们如今生活的世界。"
https://x.com/adityaag/status/2098112281267843264

### Madhu Guru（Meta AI 高级总监，前 Google，曾带 Gemini / Veo / Nano Banana）
Eval 系列第 10 篇：不要只测结果，要测过程。两条 agent 轨迹可能都算出 42，但一条精准检索、4 次干净的工具调用搞定，另一条重复搜索 3 次、出错 2 次才磕磕绊绊到达，高下立判。他的落地四步法：定义完整工作流、定义每步任务、为每一步设计度量、在 eval 里同时覆盖中位数任务和困难任务。
https://x.com/realmadhuguru/status/2098064969464217720

### Peter Steinberger（OpenClaw + OpenAI）
对 AI 时代软件工程的一句精辟总结："复制逻辑不再痛苦，抽象才是。"
https://x.com/steipete/status/2098089196800098798

### Nikunj Kothari（FPV Ventures 合伙人）
早期 VC 圈现状三连：人人都想融 5000 万美元的 seed 轮；人人都觉得自己明年能做到 3000 万美元 ARR；每个热门分期付款结构的 seed 轮，最后估值都神奇地落在 3 亿美元附近。
https://x.com/nikunj/status/2098078391065018816

### Josh Woodward（Google，VP of Google Labs / Gemini App / Google AI Studio）
Gemini 登陆 Windows 了。
https://x.com/joshwoodward/status/2098131750660772342

### Google Labs（官方）
Dreambeans 正式向全美 18 岁以上用户开放，iOS 和 Android 免费可用，无需订阅。现在还能连接 Gemini app，Dreambeans 会基于你聊天里的细节，生成更个性化的每日故事合集。
https://x.com/GoogleLabs/status/2098110018289803558

### Thariq（Anthropic，Claude Code）
一个实用 prompt 技巧：让 Claude 深入"采访"你，把它还不了解的你生活里的部分问出来，然后全部存进 memory。
https://x.com/trq212/status/2098157600361861579

### Nan Yu（即将加入 OpenAI 产品团队，前 Linear 产品负责人）
面对"AI 还没渗透普通人"的论调，他的观察是：普通人照样整天泡在 Google、Instagram、Zillow、DoorDash 上，而 AI 产品的日常渗透还差得远。"Still. Early."
https://x.com/thenanyu/status/2098216215525331353

### Peter Yang
一个直接的使用体感：论把事办成，Sol 比 Astra 好用。
https://x.com/petergyang/status/2098215935467544604

### Zara Zhang
一个引发 49 条回复的灵魂拷问：为什么 computer use 还是这么慢？
https://x.com/zarazhangrui/status/2098136119154254287

### Claude（Anthropic 官方账号）
Fable 5.1 Build Days 本周启动：9 月 11 日至 25 日，全球各城市的社区 buildathon，带一个问题、一个点子，或者人到就行。
https://x.com/claudeai/status/2098138736642933143

---

## 🎙️ PODCASTS

### The MAD Podcast: When AI Improves Itself | Richard Socher（Recursive）

**一句话要点：凡是能被模拟且能验证的领域，AI 都会解决，而这一切的终点是 AI 改进 AI 的递归自我提升循环。**

Richard Socher 是 AI 领域被引用最多的研究者之一，曾担任 Salesforce 首席科学家，如今创立 Recursive 并融了 6.5 亿美元，目标是实现 recursive self improvement：让 AI 做出更好的 AI。他的新书 The Eureka Machine（9 月 22 日出版）开篇就抛出一个反直觉的论点：科学进步正在变慢。知识已经从"知识体系"变成"知识迷宫"，3.4 万本期刊像挂满"禁止入内"牌子的领地，每个细分领域都要深耕多年，文艺复兴式的通才已经不可能存在。

他最核心的判断几乎可以当作定律："Anything you can simulate, AI will solve." 凡是能模拟的东西，AI 都能解决。游戏如此，数学如此（他预测数学未来几年会剧变，顶尖数学家们已经清楚意识到），编程更是如此，因为代码天然可验证。下一个被攻克的领域是生物学，前提是收集足够的实验数据：基因敲除、分子扰动实验，最终拼出一个 virtual cell，让 AI 在里面无限次试错。

书里另一个反直觉观点：hallucination 在科学发现中可能是特性而非缺陷。探索全新蛋白质时，恰恰需要模型"幻觉"出训练数据里没有的合理组合。历史上不少科学突破也发生在科学家半恍惚的精神状态里。不过 Socher 不相信 hard takeoff：临床试验仍然需要时间，AI 会加速一切，但物理世界的约束跳不过去。

Eureka Machine 的四大支柱：LLM 吸收人类知识、科学测量超越人类感知、模拟、机器人自动化实验，顶上再跑一个 agent swarm。为了算力，Recursive 把 6.5 亿融资里的 4.1 亿签给了 Amazon 的算力合同，他还说这可能是"未来最小的一笔算力交易"。

完整对话（YouTube / Spotify / Apple Podcasts）：https://www.youtube.com/@DataDrivenNYC/videos
Matt Turck 的推文（含完整时间戳章节）：https://x.com/mattturck/status/2098081448330674182

---

*Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders*
