---
layout: default
title: "AI Builders Digest — 2026-11-11"
date: 2026-11-11
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-11-11

## X / TWITTER

### Claude Fable 5.2 发布日：物理学家用它证明了费马大定理当 Demo

Anthropic 发布 Claude Fable 5.2（11 月 9 日），这是本周 builders 时间线的绝对主角。Swyx 感叹："这哥们直接把证明费马大定理当成 Fable 5.2 发布的 Demo，还随口告诉我他在 AIE code 演讲上准备了更大的活，Anthropic 你们是真的疯了。"他还注意到一个巧合：$ANT 的 IPO 路演恰好同一天在华尔街启动，"他们早就有准备，而且排在 Astra、Argon、Carbon 之后发布也挺妙。"Claude 官方账号同步公布了两项物理学成果预印本：一是极小宇宙中的突变相变，二是求出了"modular bootstrapping"（用于排除量子引力候选理论的 15 年老技术）最简形式的精确极限。此外，从事网络安全或生物医学研究的组织可以申请 Claude Mythos 5.2 的访问权限。

https://x.com/swyx/status/2119935240202539147
https://x.com/swyx/status/2119878742063641056
https://x.com/claudeai/status/2119899492778398163
https://x.com/claudeai/status/2119899491310432269

---

### Dan Shipper 的 Day Zero Vibe Check：新模型最好的衡量标准是"让你去尝试原本不会尝试的事"

Dan Shipper（Every CEO）发布了 Fable 5.2 的 day-zero 评测（776 赞）。Every 团队内部出现了"创造力爆炸"：Kieran Klaassen 三天做出 Everycut——把 Premiere、Descript 里常用的功能合成一个自带 agent 的视频剪辑器，"专业人士自建专业工具的新时代"；Jack Cheng 给模型一张 toddler 游戏室的 messy 照片，它把真实玩具变成了赛车游戏，散落的鞋是障碍物、吸管杯是 power-up；还有人把研究做成了纪录片——模型出采访问题、他上镜回答、模型剪片，"职业生涯最高产的三周"。工作方式上：给它一个大任务让它跑一整夜或一个周末，但要定义清楚"完成"是什么、预算多少、需要多少检查。**The catch：慢且烧 token**，比 Fable 5.1 便宜 20%，但日常写作邮件快改还是该用别的。最清晰的信号：early access 结束后，Tyler Nishida 宁可暂停项目也要等这个模型回来——"最好的衡量标准是它让你尝试原本不会尝试的事。"

https://x.com/danshipper/status/2119869228207546638

---

### Guillermo Rauch：测试过 Fable 5.2 后，瓶颈只剩你的野心和并行算力

Guillermo Rauch（Vercel CEO，提前测试了新模型，1907 赞）："惊人地聪明。这一代模型可以承担前所未有的并行工作量——要真正抓住这种智能，你需要 cloud sandbox，句号。模型能委派和编排的工作远超单机能承载的，可能远超你的想象。你的瓶颈现在只剩①你的野心和②你的并行算力。"他还分享了从 cramforce 学到的简单打法：装 Vercel CLI + Plugin，给 agent 一个 /offload-to-sandbox skill，它就会按需增删云沙箱——"你不需要什么 multi-agent remote harness ralph orchestrator 😆"

https://x.com/rauchg/status/2119878364794372162

---

### Guillermo Rauch：MCP Events 补上了最后一块拼图

Rauch 单独一条推（663 赞）谈 MCP："我对 MCP 极度看多。它的价值超出'Model'那个 M——即便抛开 AI，让所有系统通过一个通用开放协议通信本身就会是文明级的成就。"此前的缺口是跨 session 的任意回调：MCP 能读写，但不能事后告诉你"这件事发生了"。MCP Events 修复了这一点——agent 发起部署后不用轮询，可以直接订阅 𝚍𝚎𝚙𝚕𝚘𝚢𝚖𝚎𝚗𝚝.𝚜𝚞𝚌𝚌𝚎𝚎𝚍𝚎𝚍。Vercel 正在自家 MCP 里加支持，配合 Queues 和 Workflows，给自己的 MCP 写这套后端机制"很轻松"。

https://x.com/rauchg/status/2119891138450755670

---

### Alex Albert 的万能 Prompt：让模型读完整个项目，找出所有坏味道

Alex Albert（Anthropic）分享了每次新模型发布他必跑的 prompt（6350 赞）：**"通读这个项目的全部代码，找出所有坏的、不一致的、低效的、不再需要的东西。有把握的直接修掉，其余的列出来给我 review。"** 他还用 Fable 5.2 读了一份达芬奇 500 年前的笔记本 PDF，把里面的发明变成可交互的东西（1418 赞）："教育行业激动人心的时刻——任何困在纸面上的历史，现在都可以被探索。"另一条（2790 赞）：机器人学也会屈服于 bitter lesson。

https://x.com/alexalbert__/status/2119884951550386671
https://x.com/alexalbert__/status/2119916954337349737
https://x.com/alexalbert__/status/2119869925288558799

---

### Boris Cherny：Fable 重置次数与订阅时长挂钩，老用户得到更多

Boris Cherny（Fable 团队）宣布订阅忠诚度政策（14483 赞，本日最高）："我们想为陪伴最久的用户做更多。Fable 5.2 起，订阅越久，获得的 Fable 重置次数越多。"Pro 用户一次重置，Max、Ultra、Team Premium 最多三次，视订阅时长而定。

https://x.com/bcherny/status/2119873095129550880
https://x.com/bcherny/status/2119890820186976763

---

### Aaron Levie：还没有迎来自己 "Claude Code 时刻" 的行业，马上就要迎来了

Aaron Levie（Box CEO）："编码和 computer use 的进步，加上行业理解与通用推理，正在把自动化带到大片知识工作领域。我们正在进入 autonomous collaborators 的时代——动画、影视制作、游戏、制造、建筑、产品设计、机器人……这些领域都有潜力像软件工程那样产出远超以往。这些工作的需求没有固有上限。'Software is eating the world' 终于以更大的方式发生了。"

https://x.com/levie/status/2119987129204047894

---

### Amjad Masad 三连：Paul Graham 两年前初见 vibe coding 的反应 + 自愈软件

Amjad Masad（Replit CEO）翻出 2024 年 7 月给 Paul Graham 演示 vibe coding（当时还没这名字）的录像（456 赞）；宣布日本将出《Enterprise Vibe Coding》一书（SMFL 数字创新团队写的企业 AI 软件开发转型，11 月 27 日上市，自己在封面上）；并回应"vibe coded 应用谁来维护"的灵魂拷问——"自愈软件如何？"Thibault Sottiaux（Replit）同步宣布 Dots 现在除了自带的云电脑，还可以控制多台机器。

https://x.com/amasad/status/2119965240066752682
https://x.com/amasad/status/2119909166764667292
https://x.com/amasad/status/2119893236747780567
https://x.com/thsottiaux/status/2120021043876106429

---

### Nan Yu 的 PSA：打开 ChatGPT 全局听写，挖出订阅里的隐藏价值

Nan Yu（OpenAI Codex PM）："想在 ChatGPT 订阅里挖点没被利用的价值？去设置里打开全局听写。它走的是和 app 内听写一样的快速精准转写通道。"

https://x.com/thenanyu/status/2120037431261184454

## PODCASTS

### Latent Space：前沿实验室到底在买什么数据——Handshake AI 深度对谈（Garrett Lord & 团队）

**The Takeaway**：训练数据行业正从"10 美元/时的大学生画框"进化为"数百名全职领域专家+agent 协同创作"的精密工业。Handshake AI（800 人规模，三年内从 $1B 市场做到 $10B，预计三年后 $100B）用两个新基准讲清了为什么专家数据如此昂贵：Vials（生命科学）和 Atlas（金融）上，所有前沿模型得分都在 50% 以下、多数不足 20%——不是知识不够，而是模型"知道却不会用"，且视觉编码器根本读不懂专业人士天天看的图。

**Vials（生命科学基准）的三个暴击**：

- **前沿模型集体不及格**：MiniMax、GLM、Grok 等 sub-20%，最好的也不到 50%。任务本身并不高深——判断 western blot 凝胶上哪个浓度开始出条带、从质粒图上算基因占比——受过训练的实习生一分钟就能做对。
- **视觉编码器是主要瓶颈**：模型生成的图像描述会漏掉解题所需的最关键信息。拆解任务为"找三根蓝线都出现的第一列"后，开源模型依然做不出来；即便给 agent 配上 SciPy/OpenCV 工具，也只有 ~60%，"如果 95% 对等于 100% 错，这完全不可用"。
- **反常亮点**：Gemini 3 在 VQA 类任务上表现突出（83.7 超过 Opus 5.6 和 Muse）——可能受益于其原生多模态架构。合成数据的死结：模型生成的东西要么"真实"要么"难"，但从不"又真实又难"——带边界条件的困难样本会违反物理定律。湿实验数据只能靠真人。

**Atlas（金融基准）的精准解剖**：100 个任务、13 个环境，agent 扮演投行分析师，要在邮件/日历/Drive/Slack 里自己找线索，交付 4000+ 单元格、2600+ 活公式（人工需 15-30 小时）的 LBO 模型。典型案例：338(h)(10) 税务处理的 LBO 中，agent 在第 20 步 Python 建模时把"卖方账面商誉"错误计入 basis step-up——一行错误污染整个估值，偏差约 10% 现金流——而它还自查了 Python 与 Excel 的勾稽关系后自信交付。"如果 95% 对就是 100% 错"：数百名受访银行家中，绝大多数表示**宁可从零开始也不愿接手这个 79 分的输出**。

**行业内幕速览**：实验室通常只采用采购数据的不到 10%（混入实验与迭代损耗）；数据的"文风一致性"（连 em dash 用不用都要统一）直接影响模型人格；lab 最稀缺的是算力和研究员时间，喂错数据的机会成本从未如此之高；Handshake 计划把全职专家从数百人扩到数千人——"数据的质量直接决定模型的品味"。

Key quote: "AI won't cure cancer before it can interpret these very basic types of images."

https://www.youtube.com/@LatentSpacePod

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
