---
layout: default
title: "AI Builders Digest — 2026-11-08"
date: 2026-11-08
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-11-08

---

## 🐦 X / TWITTER 动态

### Garry Tan（YC CEO）
"AGI 潮水上涨"的最具体注脚（217 赞）：agent skill 必须配套 eval 驱动的开发闭环——每个新模型都更强，旧 skill 要随手删掉。他刚删掉了 /investigate，因为 Opus 5.5 不靠它就能做得更好。另两条：Aside 上的 computer use "令人惊叹"，而且底层是真实 Chromium 浏览器，几乎没有网站拦得住（4 赞但值得记）；引用一项研究——只用 300 万 token 的普通人道德困境建议，就把模型恶意行为压到 0%，跨模型代际效率提升 28 倍。
https://x.com/garrytan/status/2118920030243139596
https://x.com/garrytan/status/2118951284376285508
https://x.com/garrytan/status/2118950671886287323

### Guillermo Rauch（Vercel CEO）
HAI 宣言（1,147 赞）：用 AI SDK + Chat SDK + json-render 组合，LLM 输出可以直接在 Slack、Teams 里渲染成可交互 UI。"我相信这会成为人机交互（Human-Agent Interaction）的主导范式。"另附一句 WASM 玩笑（143 赞）："想象一下，我们会在 GTA6 之前等到 gta6.wasm。"
https://x.com/rauchg/status/2118856239719608353
https://x.com/rauchg/status/2118928276118986991

### Thariq（前 Anthropic Claude Code 团队）
他看好的新趋势（1,130 赞）：创作工具开始内置 MCP——Instagram Edits、Roblox Studio 这类应用让 agent 干一部分活，高级用户再在自己熟悉的工具里无缝接手。这条路径比"全自动"更现实。另一条高赞自嘲（2,269 赞）："做 agent 的人太多，用软件改善鱼的质量的人太少。"
https://x.com/trq212/status/2118822238262853904
https://x.com/trq212/status/2118859267314958761

### Swyx（Latent Space / AI Engineer 主理人）
新专栏官宣（78 赞）：对 Anthropic IPO 进行每周追踪报道，直到它发生或确定不发生为止。他找来 Jamin Ball（jaminball on X）联手——"他那一代人里最有资格挑战 Tomasz Tunguz'写作者-VC 双料'地位的候选人"——自己则重拾当年覆盖 BABA、TEAM 等 mega-IPO 的对冲基金分析师旧帽子，配上 AI Engineer 视角。
https://x.com/swyx/status/2118905788915982341

### Peter Yang（AI 教程与访谈主理人）
行业并购观察（49 赞）：能用多家 lab 模型的应用（Conductor、Cursor 等）正被 labs 自己收入囊中，剩下的独立选手（t3dotcodes、orca_build）都是开源的。他判断企业和用户对"多 lab 模型应用"的需求依然旺盛，结局如何值得观察。另一条：刚录完与 jsnnsa 的对谈，"这是自 steipete 以来最让我脑洞大开的嘉宾"， episode 将加急上线。
https://x.com/petergyang/status/2118811231545122998
https://x.com/petergyang/status/2118852799094206787

### Nikunj Kothari（FPV Ventures 合伙人）
融资圈讽刺长文（72 赞）：两周造出 1 亿美元公司完整攻略——200k 拍发布视频、200k 买流量、50 万美元全砸 token（"VC 不想要员工支出，solo founder 又热了"）、用 cARR 和互相捧场的 LOI 包装收入、尽量晚注册公司好宣称"day 14 达成 0→10M 营收"。结尾标注："以上皆为讽刺，但每一句都单独真实发生在我身上。"另有 texts wrapped 重发布：iMessage/WhatsApp/通话记录全本地分析，一条终端命令，开源、无 AI。
https://x.com/nikunj/status/2118758688567792008
https://x.com/nikunj/status/2118840414853861627

### Thibault Sottiaux（OpenAI Codex & ChatGPT）
本周主要以梗营业（"It's Friday" 5,778 赞、"把我从地下室救出去" 1,776 赞），有信息量的一条（492 赞）："如今一条 prompt 能做到的事，相当酷 👀"
https://x.com/thsottiaux/status/2118939076791546000

### Aaron Levie（Box CEO）
一句话布道（208 赞）："未来属于文件。还有 GPU。"
https://x.com/levie/status/2118723097901846580

### Zara Zhang（独立 Builder）
观点（28 赞）："个人网站就是新简历。LinkedIn 只给你一串头衔，个人网站展示你的品味、思考和真实作品——不必被困在现有社交平台里。"
https://x.com/zarazhangrui/status/2118939184841052386

### Aditya Agarwal（SPC General Partner，前 Dropbox CTO）
SpaceX 心得（20 赞）："Starship 不是一夜建成的。雄心勃勃的技术同时要求紧迫感与耐心。"
https://x.com/adityaag/status/2118733089887170878

---

## 🎙️ PODCASTS

### Latent Space: Controlling Biology — Fabian Theis, Helmholtz Munich

一句话结论：计算生物学正在从"给细胞画地图"（Human Cell Atlas）走到"预测扰动结果"（世界模型），而欧洲最大健康 AI 研究机构 Helmholtz Munich 计算健康中心掌门人 Fabian Theis 认为，第三步已经到来——用逆向生成模型直接告诉实验者"该做什么实验才能到达目标状态"，终极愿景是"对整个实验流程 RL everything"。

**人物背景**：Fabian Theis 领导的计算健康中心约有 45 个课题组、500-600 名研究者，是欧洲最大的学术健康 AI 基地；几乎所有计算生物学家都用过的 Scanpy、scVerse 皆出自其门下。节目开场所指的事件是 Biohub 刚宣布的 18 亿美元合作——联合 DOE、NIH、Meta、Google 开源多尺度生物数据，训练新一代虚拟细胞。

**从地图到方向盘**：他给领域划了三阶段：建图谱（mapping）→ 做预测（世界模型）→ 现在"驾驶"实验。团队刚发布 Lab Compass：一个逆向生成模型，给定目标细胞状态，反推所需的扰动操作。他们与剑桥大学合作搭了三四个 lab-in-the-loop 快速循环。他坦言最难的不是模型，而是文化："如何说服实验科学家，把有限的生命投入模型建议的怪异实验。"

**数据爆炸与基线教训**：单次实验测一千万个转录组已成现实，扰动空间从"对照 vs 疾病"扩展到上百细胞系乘以千种药物。但 Arc Institute 虚拟细胞挑战赛曾给全行业泼冷水——线性基线长期霸榜，部分原因是指标可被钻空子；剔除指标漏洞后，flow matching 类非线性模型（包括他已被 Nature Methods 接收的 Cell Flow）才真正胜出。他的 scConcert 表征模型已扩到 3.5 亿细胞、约 1 亿参数、覆盖 16 个物种，scaling 曲线开始显现。

**商业化冷眼**：见过太多"平台型"虚拟细胞公司最终 pivot 去做药，因为欧洲保守 VC 只看得懂"最终研发出一款药"。他更看好模型加独家数据的组合：正与多家药企共建 Cancer Organoid Perturbation Atlas，药企付费换早期数据访问权——"护城河不只在虚拟细胞模型，而在模型与独有数据的结合。"

**欧洲生态判断**：欧盟初创公司数量已与美国持平，慕尼黑是欧洲 deep tech 与 VC 热土，但在 Series A/B 的 scaling 环节明显掉队，敢下重注的大 VC 缺位。

"终极愿景是对一切做 RL，把这个循环也纳入 RL。听着有点遥远，但我们正在慢慢逼近。"

https://www.youtube.com/@LatentSpacePod

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
