---
layout: default
title: "AI Builders Digest — 2026-11-03"
date: 2026-11-03
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-11-03

---

## 🐦 X / TWITTER 动态

### Andrej Karpathy
周末项目 HackerTube（3.7 万赞）：受够了 YouTube 推荐算法，他用 Claude 把 HN 二十年来的 4300 万条评论过滤成 6,454 个被反复推荐的视频，观看体验"显著更好"。技术细节：Claude Code 桌面版 + Opus 5.5（medium effort），全程只跟 Claude 对话，约 2 小时完成；无需登录（状态存在浏览器本地 session）；缩略图取视频中段的代表帧，而非 A/B 测试调优过的"超钩子"封面；底层评论分析数据打包成一个 zip，"把你的 Claude 指向它，让它给你做一个你自己的版本"。他唯一的"手动工作"是在 Google Cloud 建 API key、开一台 VPS、买域名，剩下的更新、加固、部署、优化全部由 Claude 完成。结语："以前要花数周甚至数月的项目，现在早餐时间就能 few-shot 出来——还有什么是我们没想到的？"
https://x.com/karpathy/status/2116957135661945283

### Thibault Sottiaux（OpenAI Codex & ChatGPT 负责人）
谜题继续："Day 28 / Banked 2/2"——reinstall 系列连续第 28 天，且"两问皆已入账"。这条四个字的推文拿下 7,495 赞、1,342 条回复，评论区继续疯狂解读"banked"到底指用量结转还是别的什么。同日还发了两条程序员冷笑话："我的狗刚修好了我们两周没找到的 bug""我的狗把昨天的会议纪要发你了，看到了吗？"
https://x.com/thsottiaux/status/2117035794678546764
https://x.com/thsottiaux/status/2116936205623611781

### Amjad Masad（Replit CEO）
一条警告引发共鸣（2,266 赞）："如果你正在享受补贴价的 AI 订阅，准备好被 rug pull。"——补贴终会退坡，按补贴价规划工作流的人要小心了。另一条产品动态：Replit 现在一个开关就能把网站"反馈小组件"接进 agent——用户的每条反馈自动变成 prompt，驱动 agent 直接改进站点。
https://x.com/amasad/status/2117010858845089805
https://x.com/amasad/status/2116998155925360965

### Guillermo Rauch（Vercel CEO）
"Own your intelligence"（2,251 赞）：凡是反对"拥有你自己的智能"的人，都是想卖点东西给你——也许是把你的智能卖回给你。本地模型需要继续扩散；"绝对单位"级的大模型短期内本地跑不动，所以最优解是保持选择权：拥有你的 harness、数据、连接、运行时——你的 agent。拥抱开源。另外他实测 Gemini 在 v0 上表现"出色"（而且情绪异常高昂），两个高复杂度项目都干得不错。
https://x.com/rauchg/status/2117000819623243925
https://x.com/rauchg/status/2116988333096370443

### Aaron Levie（Box CEO）
岗位说明书正在改写：我们正从"agent 帮我们把活干得更好更快"，走向"我们帮 agent 干活"。每个身处此类岗位的人，都在从"有 AI 加成的个人贡献者"变成"一队 agent 的管理者"。冲击最大的将是信息密集型工作：编程、网络安全、法务、生物科技、工程。随之而来的是：你的杠杆将与"工作时长→产出"的历史比值脱钩——agent 可以并行展开工作，产出不再受你投入的小时数限制。谁先意识到这一点并围绕它重组流程，谁就拿到复利。
https://x.com/levie/status/2117134917847093491

### Garry Tan（YC CEO）
Particle-1：在 agentic retrieval 任务上媲美大得多的模型，价格只有 1/23。另一条："实用机器人时代临近（practical robotics is nigh）"。
https://x.com/garrytan/status/2117137390016073977
https://x.com/garrytan/status/2116941191526895975

### Peter Yang
他的 AI 工具"分项冠军"榜单（190 赞）：浏览器/计算机操作 = ChatGPT + Codex；设计/视频剪辑/"品味" = Claude；24/7 常驻 agent 和定时任务 = Grok Bot；Gemini 的写作能力被低估（待更多实测）。同时预告 Behind the Craft 新一期阵容：OpenAI 产品 VP Ashley Alexander（聊照护患癌父母与 AI 的角色）、Anthropic 设计师 Nate Parrott（Claude Design/Dashboard 背后的人，现场演示如何避开 AI slop 设计）、Matt Pocock（编程 agent 技能集 GitHub 星标 30 万+）、以及 Jacob Sansbury——据 a16z 合伙人所说"世界上最 AI-native 的游戏公司"，10 个人，每年 Claude 账单 3200 万美元。
https://x.com/petergyang/status/2116946320674152810
https://x.com/petergyang/status/2117059131349868790

### Thariq（前 Anthropic Claude Code 团队）
独立游戏开发持续直播中：新增角色"用火焰格斗的跆拳道高手"，美术风格从 3D 模型整体切换为生成式 sprite；配了一段 highlight 介绍视频，"一切都开始成型了"，目标下周出 vertical slice。
https://x.com/trq212/status/2116976789046350040
https://x.com/trq212/status/2116977363728867664

---

## 🎙️ PODCASTS

### Unsupervised Learning：Modal CEO 聊推理市场的未来、GPU 市场的混乱与 Sandbox 赌局的由来 — 对话 Modal 创始人/CEO Erik Bernhardsson

一句话结论：在推理这个"竞相降价"的市场里，真正持久的差异化不在吐 token 本身，而在自研基础设施之上的多产品平台组合——而 GPU 租金未来十二个月大概率还要涨，因为最能买的两家（Anthropic、OpenAI）赚得盆满钵满，完全没有减速的动力。

Erik Bernhardsson 是 Modal 的创始人兼 CEO，曾在 Spotify 工作七年。Modal 三年前 run rate 只有 200 万美元，如今已突破 10 亿美元——三年 100 倍。如今 Sandbox 产品一项就是 3 亿美元 run rate，约占收入三分之一；LLM 推理在 DeepSeek 时刻后爆发，也占到三分之一。

- **GPU 市场远非有效市场。** Modal 目前与 25 家云合作，每周敲定 2-3 笔算力交易。他形容 GTC 现场像"GPU 版的露天毒品市场"：酒店大堂换联系方式、深夜 WhatsApp 群、销售 VP 的表哥在高尔夫球场上牵线。算力不是可互换合约——可靠性、位置、网络、磁盘各不相同，所以"交易所化"短期难以实现。H100 仍是 Modal 上最常见的芯片。

- **Sandbox 是教科书级的不对称赌注。** 2023 年看到 LLM 生成代码的趋势，几天就做出原型；2025 年模型会写代码后一夜爆炸，为扩容重写了五遍系统。启示：低投入高上限的期权式下注，胜过苦等确定性。

- **自研底层是真正的护城河。** Modal 自建文件系统、容器运行时和调度器，不用 Kubernetes 和 Docker；靠 CPU/GPU 快照 + 节点间 RDMA 把冷启动压到几秒内起大模型。"不害怕做难的事"是最大的 alpha 来源。

- **Agent 已经在写 Modal 的代码。** 合并进主干的代码行数约 95% 由 agent 参与完成；采用 agent 最凶的反而是最资深的工程师——"等于一次给了他们十个实习生"。副作用：废弃 API 变难（训练数据里全是旧代码），以及催生了"agent optimization"——像 SEO 一样确保 agent 们推荐 Modal，框架的"在位权力"因此变得前所未有地值钱。

- **Neocloud 与 Neolab 的金融结构风险。** Neocloud 本质是高杠杆的融资载具，但商业模式成立——GPU 残值比预期高、寿命比预期长；"所有 neocloud 都会死"是扯淡，但高资金成本会拖慢它们。真正要盯的是 Neolab：人人刚好融 10 亿美元，GPU 承诺只付 30% 首付——隐含杠杆 + 依赖后续融资，一旦融不到就只能转卖 GPU 或改行做 neocloud。

- **GPU 价格预测：涨。** 他读完 Anthropic S-1 后 48 小时内改了主意——这家公司利润率高到惊人，"他们没有任何理由放慢算力采购"，OpenAI 大概率同理。最大的两个买家不减速，需求只会更紧。

金句："我去年的 GTC，就像一个露天毒品市场——只不过交易的是 GPU。"

https://www.youtube.com/@RedpointAI

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
