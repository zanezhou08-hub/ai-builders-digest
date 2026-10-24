---
layout: default
title: "AI Builders Digest — 2026-10-24"
date: 2026-10-24
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-10-24

---

## 🐦 X / TWITTER 动态

### Claude 官方账号
三条重磅：① 从下周起，Claude Web/桌面/移动端的会话将在 Pro、Max、Team 套餐上默认切换为 auto 模式——不再逐步请求你批准，改由自动检查拦截高风险动作，随时可切回手动（1.47 万赞）。② Claude Models on Google Cloud（Anthropic 托管版）正式 GA，可在 Google Cloud 上获得全套 Claude Platform 功能，带 GCP IAM 凭证和计费（4100+ 赞）。③ 原生 Claude Platform 新功能当天同步上线：Opus 5.5 的 Fast mode、代码执行、Skills API 等。
https://x.com/claudeai/status/2113360845409583307
https://x.com/claudeai/status/2113380122468454765
https://x.com/claudeai/status/2113380126561800305

### Boris Cherny（Anthropic Claude Code 团队）
Agent Skills 最初只是 Claude Code 里的一个实验，如今已被全行业广泛采用，因此 Anthropic 决定把它捐给 Agentic AI Foundation，与 MCP 并列成为基金会旗下的开放标准（1700 赞）。Agent 生态的两大基石如今都是中立治理了。
https://x.com/bcherny/status/2113333859907747871

### Thibault Sottiaux（OpenAI Codex & ChatGPT 负责人）
Codex "Day 18" 总结：Decisions API 正式 GA，OpenResponses 加入 Linux Foundation，一批性能改进上线，以及 Uber 全面押注 Codex 和 Work（4800 赞）。但他话锋一转"不过……这是一次 reset"，并预告新东西将在明早 10 点（太平洋时间）前与"一艘小船"一起落地——OpenAI 对 Anthropic Duet 的回应眼看要来了。
https://x.com/thsottiaux/status/2113492187770175603
https://x.com/thsottiaux/status/2113492502355562875
https://x.com/thsottiaux/status/2113162413008884099

### Guillermo Rauch（Vercel CEO）
安全周总结两连发："本周 TL;DR：你姑妈的密码是 'P4ssword!'（贴在厨房便利贴上），而互联网加密体系守护者的密码是 '4'——就是 4。这把钥匙理论上可以解密几乎一切，残余风险至今仍在清理。"（616 赞）他的药方：是时候消灭"静态凭证"了——设想小偷只能偷到会"自毁"的密钥，并呼吁行业像当年推动全站 TLS 那样推动 OIDC 升级（1270 赞）。另一条展示了生成式 UI 的最佳实践：给 AI SDK 加一行代码，就把"Google"（搜索、天气、股票、选举）变成 agent 可调用的工具市场。
https://x.com/rauchg/status/2113462657059639505
https://x.com/rauchg/status/2113399539227136084
https://x.com/rauchg/status/2113451268316205515

### Swyx（Latent Space 主播）
"Opus 5.5 是我用过的最好的工作量估算模型。"他的观点：校准会越来越重要——别再按人类习惯报"2-3 个工作日"，对一个干劲十足、不知疲倦、可尴尬级并行的 AGI 来说，2-3 小时就该搞定（274 赞、188 回复，争论激烈）。另一条谈近期安全事件的态度："别怪 AI 找出了漏洞，赶紧他妈的把所有漏洞清干净才是正事。"（253 赞）
https://x.com/swyx/status/2113283272130412684
https://x.com/swyx/status/2113359027682050352

### Aaron Levie（Box CEO）
"任何形式的'隐蔽即安全'都彻底玩完了。这在人类时代就勉强成立，在自主系统会把每个角落、每种攻击排列组合都试一遍的世界里，直接终结。"由此：多年遗留企业基建要升级、安全实践要现代化、数据管道要清理、访问控制要重做；agent 也能在防守端帮忙——既能加速升级，也能模拟风险向量。这也是他认为 AI 扩散时间线会比某些人预期更长的原因之一。
https://x.com/levie/status/2113499900399034689

### Amjad Masad（Replit CEO）
分享 Replit 如何保护你的应用免受本周这一连串漏洞影响，配套官方博客。
https://x.com/amasad/status/2113474587166171560

### Garry Tan（YC CEO）
Aside Browser 是"让 agent 真正擅长用网页"的实打实的方案（141 赞）；另一条感叹 AI 正在重创一批强大的 SaaS 业务："这就是它'真的'打进来时的样子"（250 赞）。
https://x.com/garrytan/status/2113367007567794563
https://x.com/garrytan/status/2113353678895919196

### Matt Turck（FirstMark VC）
发布与 Mistral 研究负责人 Pierre Stock 的深度对谈《Inside Le Chonk：西方最大的开放模型》。信息量巨大：Le Chonk 在 Mistral 自有数据中心的 3800 张 GPU 上训练、仍在训练中；10 万亿参数模型正在路上；借鉴了 DeepSeek 的做法；Mistral Large 5 即将推出；还谈到美国关停 Anthropic 模型、开放权重与网络攻击拒绝策略、AI 做 AI 研究等话题。另一条锐评 AI 竞争格局："芯片商和推理商竞争，推理商和 neo-cloud 竞争，模型和应用、芯片互相竞争——NVIDIA 卖给所有人，哈哈。"
https://x.com/mattturck/status/2113311361639829673
https://x.com/mattturck/status/2113263905950568730

### Aditya Agarwal（South Park Commons GP）
发布了与 Physical Intelligence 联合创始人 Sergey Levine 在 SPC 的完整对谈。核心观察："机器人学正在经历 LLM 走过的同一场转变：从微调，到 prompting，到直接用自然语言告诉模型你要什么"——π0.7 已经能通过语言"教练式"指导学会新技能。另一条争议观点："顶尖大学的博士学位并不必然让人成为出色的机器人学研究员。"（195 赞）
https://x.com/adityaag/status/2113385973304160663
https://x.com/adityaag/status/2113332746277789845

### Peter Yang
一条扎心的对比：一边在 X 上天天看技术突破，一边陪母亲做癌症治疗时还在用传真机传文件、用光盘物理递送影像。"所有这些伟大科技和这里的现实，是两个世界。"（137 赞）另一条发了新视频：鉴于近期一连串安全事件，用 AI 带你走完账户加固 6 步并生成个性化安全报告。
https://x.com/petergyang/status/2113420357726257335
https://x.com/petergyang/status/2113405131106742406

### Alex Albert（Anthropic 研究负责人）
抛出一个有趣的 side quest："现在用 Claude 帮你经营一堆本地小生意会非常好玩。像 Claude Duet 这样的产品，对这些小生意的影响可能比当年的 Square 或 Google Maps 还大。"并在收集用 Claude 经营小生意的真实案例。
https://x.com/alexalbert__/status/2113386454907007444
https://x.com/alexalbert__/status/2113386456098197941

### Dan Shipper（Every CEO）
配图一句："我们正活在史无前例的时代。"（227 赞）
https://x.com/danshipper/status/2113269180279751078

### Madhu Guru（Meta AI 高级总监）
给感觉职业卡住的 PM 的建议：别等清晰方向，用行动创造它。"清晰往往是行动的副产品。"每个行动带来经验、反馈和新想法。
https://x.com/realmadhuguru/status/2113437016818057641

### Nikunj Kothari（FPV Ventures 合伙人）
观察：他见过的种子期公司里约 10% 在首次见面后几个月内就被收购——"seed → A 轮的挤压处于历史最高，且不会缓解。做梦从未这么容易，扩张从未这么难。"新文章下周发。
https://x.com/nikunj/status/2113405034826477910

### Zara Zhang（独立 builder）
"这件事对设计师和开发者来说一直是常态，现在正扩展到所有其他人。"
https://x.com/zarazhangrui/status/2113510486834921598

---

## 🎙️ 播客

### Training Data：《David Silver and Lasse Espeholt of Ineffable Intelligence: A Superlearner for the Age of Experience》

**核心观点：通向超级智能的路不经过 LLM——AlphaGo 之父 David Silver 离开 DeepMind 创办 Ineffable Intelligence，押注完全放弃人类数据、纯靠经验自我发现的"超级学习者"。**

David Silver（AlphaGo/AlphaZero 缔造者）和 Lasse Espeholt（IMPALA/SeedRL 作者、大规模强化学习奠基人之一）解释了为何离开 DeepMind：他坚信的路径不经过 LLM 产品这个中间站，与其做第 100001 个押注 LLM 的研究员，不如去点亮那盏没人看的路灯。所谓 super learner，深要能从零开始发现远超人类的知识，广要能插进任何经验流（模拟、数字、物理世界）持续学习。方法论上他们拒绝"面包屑式"奖励设计——不在奖励函数里精确编码"什么是科学"，而是给简单目标、丢进高涌现复杂度的"熔炉"（crucibles）环境，让复杂度自己长出来，正如进化只用"适者生存"一条简单规则就造出了生命的一切。最硬的证据是亲身经历：AlphaGo 用人类数据和人环协同干了两年，而 AlphaZero 放弃人类先验后，"算法调对的那一刻，只用了几个小时就超越了那两年的全部工作"。语言也不是终点：从人类语言出发推理，会把"世界是平的"式的时代偏见焊死进系统。算力上他们是 GCP 最大 Vera Rubin 集群的首批客户，可跑比 OpenAI 捉迷藏实验多十万倍量级的实验。对齐问题的答案也在这条路径里：加速在模拟中建立"超级智能的科学"，现实世界则谨慎配速——模拟里先搞明白一群超级智能如何和平共处。团队只有 20 人但人均算力极高。最后放话：一年内拿出方向正确的强证据，三年内实现真正的超级智能（原估 3-5 年，因编码 agent 加速了进度）。

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
