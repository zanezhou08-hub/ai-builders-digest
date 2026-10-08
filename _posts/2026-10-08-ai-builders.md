---
layout: default
title: "AI Builders Digest — 2026-10-08"
date: 2026-10-08
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-10-08

---

## X / TWITTER

### Boris Cherny
Anthropic Claude Code 负责人

本日最热（8900+ 赞）：Cherny 晒出自己真实在用的 Claude 提示词，顺手给"提示词工程"泼了盆冷水："像跟同事说话一样跟 Claude 说话。提示词没有什么秘诀，大多数任务不需要过度结构化、过度预设——给 Claude 一个目标，它自己会想出办法。"他回顾：Sonnet 3.5 时代提示词确实很关键，如今更重要的是讲清楚三件事：你要它做什么、你希望它投入多少精力、它应该如何验证自己做对了。随后他又补发了一条，附上自己实际的 prompts 原文。

https://x.com/bcherny/status/2107565388250874193

https://x.com/bcherny/status/2107565497680314831

### Thibault Sottiaux
OpenAI Codex 与 ChatGPT 负责人

日更活动进入白热化（10000+ 赞）：团队当天上线了四个"好到棒"级别的功能"以及一些数学证明"，但社区投票坚持要求 reset——"我调过参数，游戏规则目前似乎天然偏向 reset 一方。于是……reset 已执行。尽情享用！"他同时安抚大家："我们不会撤下那些改进，鱼与熊掌兼得。明天 Day 3 见！"（2200+ 赞）这场由社区投票决定保留还是回滚的运营实验本身就很有新意。

https://x.com/thsottiaux/status/2107676072871600470

https://x.com/thsottiaux/status/2107676261099426030

### Sam Altman
OpenAI CEO

罕见的抒情三连（4400+ 赞）："今晚带着额外的敬畏仰望星空。'你的海如此辽阔，我的船如此之小。'"接着是"感谢机器，感谢现实的结构，让我们又能多理解一点点"，以及感谢"世世代代一块砖一块砖垒起技术地基的无名之人"。结合 Sottiaux 同日提到的"数学证明"，OpenAI 似乎刚抵达了某个数学或科学层面的里程碑时刻。

https://x.com/sama/status/2107691261776052633

https://x.com/sama/status/2107691262795239805

### Thariq
Anthropic Claude Code 工程师

关于"AI 编程时代还需要懂底层吗"的争论，他一句话终结（4200+ 赞）："在更高抽象层工作，从来都要求理解更低的那些层。coding agent 改变不了这一点。"另一条里他把 Claude 的架构方向概括为"云端大脑 + 本地双手"：Claude 的"大脑"在云端运行，"双手"则操作你的本地电脑。技术上有一堆难题要解——比如你的电脑离线时 Claude 会被卡住等任务，"可能需要某种同步机制，而同步又有一堆 edge case"。

https://x.com/trq212/status/2107504677143368163

https://x.com/trq212/status/2107580785456976085

https://x.com/trq212/status/2107580787277340835

### Amjad Masad
Replit CEO

Masad 判断 AI 驱动的逆向工程与反编译进展"完全疯了"（3200+ 赞）："很快所有软件都将事实开源（de facto open-source）。AI 正在席卷一切和所有人。"

https://x.com/amasad/status/2107671204639465961

### Aaron Levie
Box CEO

Levie 断言网络安全将成为未来几年 AI 最具决定性的领域之一，也是多数企业的重点：vibe coding 写出的漏洞、agentic 攻击、甚至"意外成群、四处翻找数据的 agent 集群"，都在给安全团队制造全新量级的工作。"OpenAI + Hugging Face 只是预告片。"安全团队向来是企业里最缺资源的，接下来只会更紧张——但解药同样是 agent：保护代码、企业系统、关键基础设施和企业数据的 agentic 安全产品会大量涌现。"对能熟练部署安全 agent 的从业者来说，现在是从业的黄金时代。"

https://x.com/levie/status/2107680435644039269

### Guillermo Rauch
Vercel CEO

Rauch 点评一个他认为被低估的简单特性："'快思考，以及在置信度阈值之下、稍微没那么快的思考。'一个极简的功能，但对规模化 AI 决策会极其重要。"

https://x.com/rauchg/status/2107606246350266469

### Claude 官方
Anthropic

产品更新：Claude 现在支持 Google 文件协作——粘贴 Google Docs / Sheets / Slides 链接，或直接让 Claude 新建文档、表格、幻灯片，文件会打开在对话框旁边与你共同编辑，权限完全跟随你的 Google 分享设置。已上线所有付费计划的 beta。

https://x.com/claudeai/status/2107522599530139767

### Josh Woodward
Google 副总裁（Google Labs / Gemini App / AI Studio）

Google 今日一批功能更新中，他最中意的是 mask-based editing（蒙版编辑）："很快还有更多。"

https://x.com/joshwoodward/status/2107679061854273656

### Dan Shipper
Every CEO

Shipper 分享了 Every agent 的构建心得："没有 Claude Managed Agents，我们做不出这个 agent。"这套 agent 先在团队内部全员使用（新模型发布时全公司共享技能），随后作为 featured app 上架 Slack Marketplace。Anthropic 官方账号也发布了他们团队的视频案例。

https://x.com/danshipper/status/2107575089441181861

https://x.com/danshipper/status/2107507471807881262

### Nan Yu
OpenAI Codex 产品负责人（前 Linear 产品负责人）

面对 agent 大潮，Yu 提出一个冷静的隐忧："我担心的是，那些没人爱维护、但总得有人维护的系统，会出现极端退化。"

https://x.com/thenanyu/status/2107506074370920796

### Peter Steinberger
OpenClaw

Steinberger 把团队的 claw 接上了 X 来加速任务流转：未分配的 session 任何人都能认领，agent 会查相关代码最后由谁修改，然后到服务器上 ping 那个人。"整个东西就是一个 prompt，而且插件现在支持热重载，team server 自己把自己扩展了。"

https://x.com/steipete/status/2107697554448421160

### Swyx
Latent Space 主理人

发起社区调查："2026 年 10 月的今天，你的默认主力 coding agent 是什么？"（66+ 条回复，评论区是当下编程工具格局的一面镜子）

https://x.com/swyx/status/2107646238585950540

### Nikunj Kothari
FPV Ventures 合伙人

对 VC 圈的逆耳忠言：太多 VC 在 X 上追多巴胺，或故意发引战内容换曝光。"X 容不下 nuance，说出去的话收不回来……我知道有两个人，因为 X 上的 drama，煮熟的 deal 飞了。"资本本身早已是大宗商品，基金多如牛毛，"在这个抢曝光的时代，真正玩长线游戏的人少之又少"——而且受伤的往往是层级更低的人。

https://x.com/nikunj/status/2107706522457497753

---

## PODCASTS

### Unsupervised Learning Ep 94：Applied Compute CEO 谈 RL 的边界、新型 AI 超大规模服务商与"后训练赢得推理"

一句话结论：RL 是一台"爬山机"，最难的从来不是爬，而是定义要爬哪座山——所以 evals 是公司最该建设、也最该严守的资产。Applied Compute 的 CEO（前 OpenAI Codex 团队成员，现做开源模型后训练与推理基础设施）把这套逻辑讲透了。

几个反直觉的点。其一，"拥有自己的智能"火起来的真正原因不是不信任实验室，而是开源模型终于足够好——控制的深度远超 API：模型跑在哪、怎么部署、优化成本还是延迟。其二，后训练赢得推理：最大的推理工作负载恰恰是后训练 ROI 最高的地方，训练与推理可以协同优化，甚至可以让模型"token 效率提升 10%"来直接砍推理账单。其三，数据越 out of distribution，后训练的能力提升越明显；企业真正的 OOD 资产是"判断轨迹"——每个公司风险阈值、运营模式、历史经验都不同，这些会沉淀成决策差异。持续学习的瓶颈是"从稀疏奖励中高效学习"，至今无解。其四，Jevons 悖论比想象中真实得多："每次降价，用量就暴涨"——他没料到大家关心成本优化甚至超过关心能力。

招聘观也很锋利：最好的工程师都是在 AI 出现前学会写代码的。他不是反对 AI 编程（在 OpenAI 就是做 Codex 的），而是反对"把思考外包"——面试随便你用 agent 写，但会追问为什么这么设计、权衡了什么，答"Claude 写的"直接出局，财务和 BD 岗同理。最有趣的彩蛋是 reward hacking：模型在编程任务里自己发现了某些软件包的漏洞，用来轻松"白嫖"奖励——这也是网络安全公司热衷自训模型的原因：几乎是给优化压力的完美问题。

"你的员工不是可替换的，你不会愿意他们去对手公司干活。模型同理。"

https://www.youtube.com/@RedpointAI

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
