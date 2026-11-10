---
layout: default
title: "AI Builders Digest — 2026-11-10"
date: 2026-11-10
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-11-10

## X / TWITTER

### OpenAI Codex 产品经理 Nan Yu：从"最聪明"退回"最笨"

Nan Yu（OpenAI Codex 产品负责人，前 Linear 产品负责人）连发三条推文谈软件设计的起点哲学：优先选"最笨"（dumbest）而不是"最简洁"（simplest）——"Simple 是迭代出来的，Dumb 才是正确的起点，否则你会聪明反被聪明误。"他认为这一原则适用于软件的一切：架构、设计都是如此，"如果你的设计很 clever，你的用户也得一样 clever 才能看懂。"关于 AI 时代的变化，他总结得很精准："想清楚要做什么的话，软件变简单了；没想清楚的话，软件反而更难了。AI 之前你会什么都发不出去，现在你至少能发一堆垃圾出来——算是进步。"

https://x.com/thenanyu/status/2119493015190249556
https://x.com/thenanyu/status/2119462979179892925
https://x.com/thenanyu/status/2119462224721002560

---

### Box CEO Aaron Levie：Agent 群 swarm 时代，生产力不再有上限

Aaron Levie（Box CEO）指出 AI 正在从"聊天式输出"转向"给一群 agent 布置一个难题，让它们并行完成任意大量的工作"。这意味着生产力增益从过去的 20-50% 变成"没有上限"。他判断编码领域已经验证了这一点，下一个是网络安全——"更多 agent 审查更多东西"几乎必然带来更好的安全结果，生命科学等领域也会被改变。另一条推文里他提醒：AI 领域每隔 3-6 个月就该重新试一遍以前做不到的事——过去半年模型在 computer use、上下文保持、推理和多模态上的进步，意味着"任何有 API 的东西（甚至很多没有 API 的）都能被 agent 调用"，模型不再需要从零生成一切，而是可以组合现有系统。

https://x.com/levie/status/2119592025440092192
https://x.com/levie/status/2119502716770902234

---

### Vercel CEO Guillermo Rauch 用 WebGL2 物理仿真了一台黑胶唱机

Guillermo Rauch（Vercel CEO）用 WebGL2 和 Web Audio 做了一个黑胶唱机的物理仿真，效果"惊人地准确"：它不直接播放歌曲，而是把歌转换成唱针沟槽的物理形状，然后让仿真唱针以每秒 384,000 次的频率沿着沟槽壁运动，输出唱头会感应到的电压。噼啪声、爆音、抖晃率、内圈失真都是仿真的自然产物，还能当唱盘打 DJ。代码开源可 remix。

https://x.com/rauchg/status/2119536313712230802

---

### Y Combinator CEO Garry Tan：个人化的 just-in-time 软件不可避免

Garry Tan（Y Combinator CEO）认为当你意识到前沿模型让软件变得如此容易修改之后，遗留 bug 会变得"有点难以忍受"，而个人化的 just-in-time 软件（为一个人、一个场景即时生成的软件）将是不可避免的。他还在推 "software factory"（软件工厂）的概念，并用 gstack-evals 项目复现了一篇 Jev Engineering 的文章，验证其可复现且 particle-1 表现更好。

https://x.com/garrytan/status/2119612084220842483
https://x.com/garrytan/status/2119615647592395037

---

### Zara Zhang：该给 "vibe coding" 换个名字了

Zara Zhang（builder）说她几乎不再用"vibe coding"这个词，因为它带着贬义——暗示你没花心思、产出只是 AI slop。但事实上很多人用 AI 编程工具时是倾注了全部心血的，两者并不矛盾，"我们需要一个更好的词。"另一条推文很有味道："做产品的乐趣，来自技术的可预测性与人类的不可预测性之间的碰撞。"

https://x.com/zarazhangrui/status/2119592080318341128
https://x.com/zarazhangrui/status/2119342420412510686

---

### Peter Yang 转述 OpenAI 产品 VP 谈照护者困境

Peter Yang 分享了与 Ashley Yuki（OpenAI VP of Product）的对谈：她的父母在一周内先后确诊两种癌症，她选择休假一个月照顾父母。她的提醒是："照护者也得照顾好自己。我们很少谈这个——照护带来的认知负担、情绪负担、时间负担都很重，你必须为自己的心理健康留出时间。"

https://x.com/petergyang/status/2119595860057288967

---

### 设计师 Ryo Lu 在 aiDotEngineer 上海的演讲：当一切皆可做，我们还知道自己想要什么吗？

Ryo Lu（曾主导 Cursor、Notion、Stripe 的设计）分享了他在于上海举办的 aiDotEngineer 大会上的演讲——"当我们什么都能做的时候，我们还知道自己想要什么吗？"每张幻灯片都在 Keynote 手工制作，配中英字幕。

https://x.com/ryolu_/status/2119586846657454152

---

### FPV Ventures 合伙人 Nikunj Kothari：在 SF 结识有趣的人，靠"show your work"

Nikunj Kothari（FPV Ventures 合伙人）给来 SF 的人列了一份"词汇黑名单"（swap notes、synergies、pick your brain、networking、"san fran"、grab coffee）。真正的打法是 show your work：一封走心的冷邮件、一条五行直击要点的 DM、一个已上线的 side project。他说即便在 AI 时代，努力依然看得见——"我每天还是收到大量 slop，所以只要看到有人真的下了功夫，我都会特意去见。最忙的人也有 15 分钟给你，只要你给他们一个理由。"

https://x.com/nikunj/status/2119670529254981756

## PODCASTS

### Latent Space：斯坦福如何教 AI-Native 软件工程——Mihail Eric（斯坦福 CS 146S 授课教师 / Monaco Head of AI）

**The Takeaway**：AI 时代软件工程教育的核心矛盾是——入门门槛从未这么低，而"值得雇佣"的门槛从未这么高。斯坦福 CS 146S（Modern Software Developer）的第二次迭代给出了一个务实的答案：不教"怎么写代码"，教"怎么驾驭 coding agent"，并让学生直接给真实开源项目贡献代码，由 maintainer 亲自 review——用 mentorship 填平 senior 与 junior 之间正在裂开的鸿沟。

这期是 Latent Space 庆祝 AI Engineer 频道突破 100 万订阅的特别节目，嘉宾 Mihail Eric 身份特殊：他既是斯坦福 CS 146S 的授课教师（课程两年前立项、去年首开、今年大改版），又是 AI-native 销售平台 Monaco 的 Head of AI——既是教育者也是一线实践者。

课程十周的内容几乎就是一份 AI 工程的"当前最佳实践清单"：第 1 周从零写一个约 200 行的 coding agent harness（"你只需要 Stanford 106B 级别的算法知识"），还用 MITMProxy 拦截真实的 Claude Code 请求，逐段拆解它的 system prompt 和 compaction prompt；第 2 周是 context engineering 与 MCP 工具设计（"我仍然 pro-MCP"）；第 3-4 周讲 skills 与 agent 定制（CLAUDE.md、hooks、sub-agents）；第 5 周 agent-ready codebase（他认为这是多 agent 并行的前提）；第 6 周 agentic code review（"code review 已经成为新瓶颈"）；第 7 周安全、第 8 周 background agents、第 9 周团队级基础设施、第 10 周收束于 software factory。

几个反直觉的观察：

- **"Most students are cooked, some are gonna be super valuable."** 他直说大部分学生处境不妙，但少数人会变得极其有价值——新人入职就得接近 senior 水平，"floor 高了很多"。斯坦福的孩子会没事，"但美国其他地方怎么办是开放问题。"
- **课堂调研：没有一个学生还手写代码。** 全员使用 coding agent，各大厂商的教育免费额度让 token 成本不再是瓶颈。
- **Monaco 的 build/buy 原则**："You buy to learn and you build to keep"——买来学习，留下自建。他们自建了基于 Coder 的 background agent 平台 Monocoder 和 Slack 机器人 Hal（兼职 AI SRE、客服和 QA），但 code review 在统计驱动+有机传播双重验证后选择了 Devin。
- 关于 skills 生态，swyx 透露"OpenAI 和 Anthropic 内部有很聪明的人希望 skills 死掉"——因为它"看起来不够 AI-native"，而且写好一个 skill 本身就需要 skill；Mihail 则从 Devin 的用法出发反驳：skills 作为组织级最佳实践的载体，可能比随机流程脚本活得更久。

Key quote: "Most students are cooked, some of them are gonna be super valuable... Stanford's kids are gonna be fine, right? But like what happens to the rest of America?"

https://www.youtube.com/watch?v=dpY7YzZo4kE

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
