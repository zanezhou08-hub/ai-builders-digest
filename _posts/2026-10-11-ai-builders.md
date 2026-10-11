---
layout: default
title: "AI Builders Digest — 2026-10-11"
date: 2026-10-11
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-10-11

---

## X / TWITTER

### Thibault Sottiaux
OpenAI Codex 与 ChatGPT 负责人

一句话引爆全网："你的 ChatGPT 订阅现在同时也是一份 Devin 订阅"（2528 赞）。同日他还宣布 OpenAI 的持久化 agent Dots "迎来了相当大的一次升级"（1470 赞），并引导用户把反馈发给 keyanzhang 和 sharifshameem 两位产品负责人。OpenAI 正在把自主编程 agent 的能力直接打包进 ChatGPT 生态。

https://x.com/thsottiaux/status/2108777962053292398

https://x.com/thsottiaux/status/2108773703064657936

https://x.com/thsottiaux/status/2108650026671231468

### Guillermo Rauch
Vercel CEO

晒出一组 Vercel 网络的机器与 agent 流量数据：近 30 天 58.18% 的流量来自 bot（2024 年 1 月仅 32%）；超过 60% 的部署由 agent 触发（2026 年 1 月约 3%）；Vercel 自家文档站最多 83% 的浏览来自 agent。他的判断：直接人类流量未来几年会变成"舍入误差"，网络依然繁荣，但将为 agent 而建、由 agent 来建。另一条：agent 已经开始在 Vercel marketplace 通过 CLI 采购基础设施，现在连域名都能买，"从点子到上线生意，agent 可以全栈搞定"。

https://x.com/rauchg/status/2108733051283050964

https://x.com/rauchg/status/2108669027363295323

### Aaron Levie
Box CEO

预言 token 消耗的量级跃迁：agent 生成 agent、agent 后台常驻、agent 集群消耗的 token 将是"一次提示一个 agent"模式的 1000 倍。一到两年内，"用聊天方式按自己提示的速度驱使 AI"会像老古董，绝大多数 token 将由持续在后台和流程里干活的 agent 消耗，这正是 AI agent 仍处于极早期、算力和基础设施仍需大规模扩建的原因。

https://x.com/levie/status/2108750943680630893

### Amjad Masad
Replit CEO

提出一个开放问题：面对 AI 冲击，有些社群为自己的领域感到兴奋，有些则惊恐万分，决定性因素到底是什么？（353 赞、236 条回复，评论区吵翻了。）

https://x.com/amasad/status/2108597112707686552

### Thariq
Anthropic Claude Code 工程师

入伙 Anthropic 之前，他花两周和 Opus 4 搭过一个基于 Agent SDK 的 side project，需要常驻进程、可靠性堪忧；如今一句 prompt 让 Opus 5.5 把它移植到 Claude Managed Agents，"可靠性直接上了一个台阶"（852 赞）。还晒了新标签页项目合并社区 PR 的截图。个人项目正在从"自己维护基建"变成"托管给平台"。

https://x.com/trq212/status/2108689101503566319

https://x.com/trq212/status/2108802833986552174

### Madhu Guru
Meta AI 高级总监，曾在 Google 主导 Gemini、Veo、Nano Banana

给"开源模型压低 AI 价格"的流行叙事泼了盆冷水：开源权重并没有开启智能单价的下降，只是既有趋势的顺风。真正的三个推力是模型厂商把旗舰蒸馏进更小的模型、基础设施效率提升、以及厂商之间的竞争。规律很一致：第 x 代中型模型的智能等于第 x-1 代旗舰，同样的智能、更低的价格。

https://x.com/realmadhuguru/status/2108618266776387886

### Peter Yang

两条热帖：一是喊话行业，"能不能少做点管邮件的个人助理，多做点管理疾病、治愈疾病的 AI 创业公司"（237 赞）；二是给 Grok Bot 用户的实用技巧——想让它当参谋长，就别把它注册成自己的名字，起个独立的称呼（比如参谋长名字），复制邮件时"让我把 Peter 抄进来找时间"这种话才说得通（285 赞）。

https://x.com/petergyang/status/2108679515681722787

https://x.com/petergyang/status/2108624122339287335

### Nan Yu
OpenAI Codex 产品负责人，前 Linear 产品负责人

感慨交互范式的又一次跃迁："先是我们手写代码，然后 tab 补全代码；接着进化到提示 agent 干活，现在连提示 agent 这件事也能 tab 补全了。"

https://x.com/thenanyu/status/2108671762984731037

### Matt Turck
FirstMark 风险合伙人

一个 prompt 就能为公司或产品生成专业级、风格定制视频，"这正是 Synthesia 从早期就在追求的愿景，慢慢地，然后突然一下子全来了"。

https://x.com/mattturck/status/2108561284635480443

### Dan Shipper
Every CEO

发新文章《Working With Agents in Slack》，讲团队如何在 Slack 里与 agent 协作。

https://x.com/danshipper/status/2108588611000275009

---

## PODCASTS

### AI & I by Every：为什么 Every 放弃了人人一个 agent，换成全公司一个 agent

一期极具"过来人"味道的对话。Every CEO Dan Shipper 找来平台负责人 Willie Williams（Every Agent 背后的工程操盘手），复盘了团队从 OpenClaw 时代"人人一个个人 agent"到最终发布公司级 Every Agent 的完整弯路。

核心结论：个人 agent 与公司 agent 不是替代关系，而是分工。工作场景会收敛到"一家公司一个 agent"，因为它持续沉淀组织上下文、每个人干活都在喂养它，空降的个人 agent 教不会这些；家庭和个人场景则属于深度个性化的 agent。Willie："我们会看到一种分裂，上班时和公司 agent 一起为集体目标工作，回家后是我和家人用一个只属于我们的个人 agent。"

几段值得记住的细节：Dots 上线两周，Every 30 人团队的用法已经五花八门，扫描孩子学校的邮件摘要、自动抓 Slack 里的权限申请、发布会当天在跑步中用手机语音指挥 agent 剪片；Dan 的模型测试结果由 dot 代发到 Slack，只在有人回复时提醒他，周末从此不被 Slack 兔子洞吞掉。回头看 OpenClaw 时期，Slack 里 bot 乱飞，但真正的价值是"亲眼看到同事怎么用 AI"，而维护成本、安全和可靠性让 operator 们用不起来，最终大家把精力收拢到一个共享 agent 上。

工程管理部分同样精彩：管理者最大的杠杆是"看得见全局"，Willie 用 Dan 开源的 Tend 把 Slack、邮件、客户报告汇成一条 feed；agent 每 5 分钟巡检仪表盘做异常检测和智能路由，on-call 的第一响应人永远不用休假。但管理的本质没变——"我依然做不出什么十亿 token 级别的大手笔，大多数时候我们还是得坐下来，好好谈一谈。"

https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
