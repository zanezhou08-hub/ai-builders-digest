---
layout: default
title: "AI Builders Digest — 2026-10-15"
date: 2026-10-15
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-10-15

---

## X / TWITTER

### Aaron Levie
Box CEO

Gemini 4 Argon 的企业级实测来了。Box 用内部 Complex Work 评测跑了整整一周：比 Gemini 3.1 Pro 整体高出 14 个百分点，"牢牢站回前沿"。分行业更夸张：医疗 +25（只有 Argon 会回头把致敏药物从最终方案里撤掉，让处方和自己的诊断对得上）、科技 +37（正确锁定北美区域做基础设施优化，3.1 Pro 甚至算出超过 100% 的留存率）、消费品 +33（用现有库存填平产能缺口，选了更小的扩产、更早的上市和更快的回本）。另一条长文预判网络安全将是 AI agent 最大的战场之一：攻击面因 agent 扩大百倍，但 agent 集群逐行审查代码、穷举漏洞组合、实时复盘事故的能力，会让防御方第一次有机会跟上节奏。

https://x.com/levie/status/2110046686198550539

https://x.com/levie/status/2110227571090788526

### Guillermo Rauch
Vercel CEO

"永远不要赌 Google 输。"Gemini 4 Argon 发布后，Rauch 提醒所有人：带来 Transformers 的公司手里握着压倒性的数据、工程人才和算力。他同时断言整个行业"理所当然地都转回了 coding"，coding agent 是 AI 的 killer app，开发者正处在极乐世界。顺手带的广告：Muse Wonder 和 Gemini Argon 背靠背发布，恰恰说明个人和公司都该保持 model agnostic，"gateway 拉满、fx 拉满"（1841 赞）。

https://x.com/rauchg/status/2110044152482365747

### Thibault Sottiaux
OpenAI Codex 与 ChatGPT 负责人

桌面端的务实优化：ChatGPT 和 Codex 桌面应用的磁盘状态存储重构完成，占用直降 60%。"船不大，但 power user 磁盘爆盘的反馈我们听得够多了。"（10414 赞、2254 回复，评论区俨然大型磁盘空间汇报现场）

https://x.com/thsottiaux/status/2110151780478927344

### Dan Shipper
Every CEO

与 Levie 的赞美形成鲜明对照：Every 的 senior engineer 基准测试里，Gemini 4 Argon 只拿到 21%，"远低于 Sol 6，甚至低于 Muse"。同一天他给出 Vibe Check 的结论："GEMINI 4：GOOGLE IS BACK"。两家评测打架，正是当下基准碎片化的注脚。

https://x.com/danshipper/status/2110056016872427944

https://x.com/danshipper/status/2110039417650024592

### Swyx
Latent Space 主播

"如何杀死你的 SaaS"：拿一个团队真实在用、年费 43000 美元的 SaaS 开一场全球 hackathon，任何模型任何 harness 都行，AI 加真人双重评测，看一个周末能不能克隆出来。72 份提交、约 1000 亿 token 烧完之后，结果数据和一万美元大奖得主访谈都整理成了 Latent Space 特别版：中等复杂度的 SaaS 离"被杀"还有多远，用数据说话。

https://x.com/swyx/status/2110065576764686421

### Josh Woodward
Google Labs 副总裁，负责 Gemini

Gemini 4 Argon 连续 demo：一句 24 个词的 prompt 做出一台定制合成器，把马蹄声、水波纹和你自己的手变成音乐；另一条里 96 毫米宽的定制家具腿，最难的部分是决定叠几颗球（529 赞）。

https://x.com/joshwoodward/status/2110179883045560674

https://x.com/joshwoodward/status/2110089824573272547

### Amjad Masad
Replit CEO

"今天暂停所有前沿研究，AI 也还需要十年才能渗透进整个经济。"Replit 正在和解决方案伙伴合作加速这个扩散过程。一句话戳破"前沿即一切"的叙事：真正的瓶颈不在模型，在落地。

https://x.com/amasad/status/2110128937049452575

### Garry Tan
Y Combinator CEO

"给你的 harness 一个带真实登录凭据的真实浏览器，是一次真正的解锁。"推荐了 AsideAI（327 赞）。agent 从沙盒走进真实 Web 会话，是当下最实用的能力跃迁之一。

https://x.com/garrytan/status/2110053836945756234

---

## OFFICIAL BLOGS

### Anthropic Engineering：重写 Anthropic 的源代码管理

当 Claude 把写代码变成无限供给，先撑不住的是为人类尺度设计的基础设施。Anthropic 的日合并量从 5 月的约 2500 次涨到 9 月的 30000 次以上，主分支历史逼近 100GB，每天 2500 万次代码检出，如果按原生 git 拉取相当于每天 600PB 流量。他们的答案是在 5 个月内自研版本控制系统 Scion 并完成 monorepo 全量迁移：服务端提交、无 packfile、无全局锁，数据内容寻址存入 Spanner，多层缓存命中率超 99%，基础设施占用比原来数百个 git 镜像小 200 倍，CI 检出快两个数量级，仅 CI 就省下 25% 的 CPU。配套的代码评审工具 Antique 一并上线，而这一切由 7 个人完成。文章同时坦诚了新分工：工程师的价值不再是逐行写码，而是"对 Claude 说不"，在它过度工程化或暴力破解时踩刹车。金句："瓶颈不再是写代码，而是所有为人类尺度构建的开发者基础设施。"

https://www.anthropic.com/engineering/redesigning-source-control

---

## PODCASTS

### Training Data：A Superlearner for the Age of Experience（Ineffable Intelligence 创始人 David Silver 与 Lasse Espeholt）

The Takeaway：通往超级智能的路未必经过人类数据。AlphaGo 缔造者 David Silver 与规模化 RL 先驱 Lasse Espeholt 离开 DeepMind 创办 Ineffable Intelligence，押注一个不靠互联网语料、纯靠经验学习的"超级学习者"，并放话三年内实现超级智能。

Silver 的判断来自 AlphaGo 的亲身教训：团队花两年、大量人类数据和 human-in-the-loop 做出 AlphaGo，而彻底放弃人类先验的 AlphaZero"只用了几个小时，就超越了那两年的全部工作"。因此他相信今天的 LLM 路线本质上是"成千上万人围着一个学习算法转"，而真正的超级学习者必须完全自主地发现知识。Ineffable 双管齐下：一边造"超级学习者"，在深度上能发现远超人类已知的东西，在广度上能丢进任何经验流；一边造"坩埚"（crucible），即充满涌现复杂度的模拟世界。关键论证是图灵完备性：只要模拟环境图灵完备，计算、经济、语言、数学都可以在其中被重新发明，而且"如果超级智能可以在模拟中诞生，它会快 10 到 100 倍，也更安全"。算力上，他们拿下了 GCP 上最大 Vera Rubin 集群的首批客户位置，团队刻意保持在 20 人，以保证人均算力。对齐问题上他同样反主流：基于语言的监控正在失效，正解是在模拟中加速建立"超级智能科学"，现实世界则主动放缓节奏。这位曾精准预测围棋、星际争霸和 IMO 沦陷时间的超级预测者给出新时间表：一年内看到路径成立的强证据，三年内见到真正的超级智能，"因为 coding agent，一切都会更快"。

金句："放弃人类数据必须是一个主动的选择。不做这个选择，我不相信我们能走到真正的超级学习者。"

https://www.youtube.com/playlist?list=PLOhHNjZItNnMm5tdW61JpnyxeYH5NDDx8

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
