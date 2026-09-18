---
layout: default
title: "AI Builders Digest — 2026-09-18"
date: 2026-09-18
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-09-18

---

## 🐦 X / TWITTER 动态

今日主线只有一条：Anthropic 把 Cowork 并入聊天，Claude Docs、Slides、Design 全面进入对话。从官方账号到核心团队到围观群众，整个 feed 都在讨论这件事。

### Claude（Anthropic 官方账号）
官宣两件事：一是 chat 与 Cowork 正式合并为一个 Claude，老用户的一切（chats、projects、artifacts、connectors、skills）原样保留，打开即继续；二是 Claude Docs 和 Claude Slides 当天上线，Claude Design 也进入对话内，可以在一个地方起草 one-pager、转成 deck、配上视觉，付费计划 beta 开放。
https://x.com/claudeai/status/2100258492590207079
https://x.com/claudeai/status/2100258495543071016
https://x.com/claudeai/status/2100258494221812123

### Boris Cherny（Anthropic，Claude Code 创造者）
阐述合并方向：Claude Code 证明了 AI 能做真活，Cowork 证明了知识工作者同样可以「交简报、收成品」，现在两者汇成一个 Claude，目标是让上下文跨越你正在做的所有事。他连续用了几周新体验，评价是「更简单、更快、更强大」。同一条里补充：Docs、Slides、Design 现在就在每个对话里，要演示文稿就直接给你能编辑、能导出 PowerPoint/PDF 的成品，没有独立工具要跳转。
https://x.com/bcherny/status/2100259951398789487
https://x.com/bcherny/status/2100260544087535639

### Cat Wu（Anthropic，Claude Code 与 Cowork 团队）
解释合并背后的产品逻辑：很多人反馈不想为每个任务挑选用哪个 Claude 产品。随着模型能力提升，Claude 自己做路由就够了，根据 prompt 判断给快速回答还是深度 agent 工作、以及什么输出形式最合适。她强调主动权始终在用户手里：可以随时停下、改道，或者对 Claude 的投入程度和做法做更细的控制。发布节奏是未来几周灰度放量。
https://x.com/_catwu/status/2100260655312089562

### Alex Albert（Anthropic Research）
内部视角的好评：合并后的 UX 比 chat 或 Cowork 各自单干时好得多，新的 slides/docs/design 集成「工作得非常好」。
https://x.com/alexalbert__/status/2100295757953917120

### Dan Shipper（Every CEO）
两条：一是对合并的激情转述，「THEY DID IT，标签页时代终结了」；二是发了一张梗图总结当下：LLM 只是自动补全，Jev 只是 JSON 分类器，两者握手，然后一起挂了红旗，暗讽把简单组件包装成神秘产品的风气。
https://x.com/danshipper/status/2100269017977987341
https://x.com/danshipper/status/2100251499443998766

### Thariq（Anthropic，Claude Code 团队）
一段值得工程师细读的技术观察：如果目标是可靠的 tool calling，「bash 不再是你需要的全部」；更应该直接给 Claude 形状符合需求的工具，而不是用一层间接包装去「骗」它，比如存储场景，你真正想要的是数据库 API 而不是文件系统。他还提到 Claude Managed Agents 的沙箱是可选的、可以独立于 agent loop 拉起，自己把一个基于 bash tool calling 的老项目迁移过去，跑得很顺。
https://x.com/trq212/status/2100315535758217422
https://x.com/trq212/status/2100315537251463523
https://x.com/trq212/status/2100315538472009897

### Guillermo Rauch（Vercel CEO）
透露 typesafeai 的实测结果超出预期：fx 默认模式已设为 auto，由一个安全审查器分析每条命令，目前跑在 GPT Luna 上；而 Jev 现在 p95 快 18 倍且更准，即将登陆 Vercel AI Gateway，很可能成为新的默认审查模型。
https://x.com/rauchg/status/2100307962262872105

### Sam Altman（OpenAI CEO）
给期待者泼了一点点冷水：本周最想发布的东西推迟到下周，「但值得等待」。8600+ 赞，评论区炸出上千条猜测。Codex 负责人 Thibault Sottiaux 隔空回应了一句「有时候物理学没法作弊」。
https://x.com/sama/status/2100351958167220547

### Thibault Sottiaux（OpenAI，Codex 与 ChatGPT 团队）
除了回应 Altman 的推迟，还发了一条简短却高热度的安利：「Astra：快 ✅ 前沿 ✅ 高效 ✅ 面向所有人」，配图暗示与某个新模型/产品发布有关，4400+ 赞。
https://x.com/thsottiaux/status/2100363668051603608
https://x.com/thsottiaux/status/2100297380968997327

### Aaron Levie（Box CEO）
指出还有「整片宇宙」的 AI 创新根本不在大多数人雷达上：以疯狂低价、超高速度处理信息的能力，对大量企业任务是质变级的机会，比如数据分类、工作流里的路由决策、领域问题的快速判断、安全相关的快速裁量。他的判断是：这类模型和方法放进 enterprise agentic workflow 会非常能打。
https://x.com/levie/status/2100448648672993540

### Zara Zhang（Builder）
一条引发大量共鸣的吐槽（1800+ 赞、300+ 回复）：最近用 Claude 变少了，因为它说话的方式让人难以忍受，时刻在展示自己多聪明多老练，而不是真正把观点传达清楚。这条评论区俨然成了各家模型「文风过载」的吐槽大会。
https://x.com/zarazhangrui/status/2100278750776824115

### Garry Tan（Y Combinator CEO）
分享个人 AI 使用的体感：「我可以随便换 harness，它都是同一个人格、带着完整记忆的个人 AGI」，一语点破跨工具持久记忆正在成为现实。500+ 赞。
https://x.com/garrytan/status/2100339347669279149

### Peter Yang（AI 创作者）
公开自己用 8 个 AI skills 制作整档播客的工作流：/podcast-prep 调研嘉宾并生成采访指南；/podcast-edit 审读原始转写、一起挑开场高光和剪点；/podcast-production 再编排 5 个 skills 把整期节目变成 6 种资产。他不同意「新模型让 skills 多余」的说法：要让 AI 精确执行你自己的剪辑品味和浏览器操作指令，skills 依然不可或缺。
https://x.com/petergyang/status/2100328939034128856

### Madhu Guru（Meta 高级总监 AI，前 Google，曾带 Gemini、Veo、Nano Banana）
观点鲜明的行业判断：安全与安保是你 AI 产品和模型的*功能*，而不是需要从外部强加的护栏。把 safety 当功能设计，和把它当补丁堆上去，是两种完全不同的产品。
https://x.com/realmadhuguru/status/2100312717739667963

### Nikunj Kothari（FPV Ventures 合伙人）
折腾了几个月的「Home」NousResearch agent 终于好用到值得公开：这是家里第一个夫妻日常共用的 group bot，踩坑过程本身就是学习。他试过用 Grok Bot 等复刻，都达不到同样的细腻度和控制力，比如只读特定邮件、把内联附件转成结构化数据、保持浏览器登录态。他还让 agent 基于自身能力和日常对话写了一份「自我介绍」，读起来相当有趣。
https://x.com/nikunj/status/2100212813625196917

---

## 🏢 官方博客

### Claude Blog

**Claude Cowork and chat are now one Claude**（2026-09-16）
Anthropic 宣布 Cowork 与聊天正式合并为一个 Claude：无论是随口一问还是交付一份中午截止的报告，都在同一个对话里完成，甚至合上笔记本后 Claude 会继续干活。功能层面，Claude Docs 与 Claude Slides 当天上线，Claude Design 也进入对话内，产物全部是一键可分享的链接，手机上可直接改元素、改文字，或导出 PowerPoint/PDF。背后的产品哲学是「不再让用户做选择题」：过去 Cowork 管大活、Design 管视觉，两边内容互不相通，让人烦恼的恰恰是判断任务该归属哪里；现在 Claude 自己判断任务需要什么，所有能力带着你已有的上下文、skills 和 connectors 出现在任意对话里。企业用户 Andrew Keller 的用法颇具代表性：「我让 Claude 调出法律研究数据库，它把所有案例拉出来读完，找出我可能还需要的案例，下载后存进文件夹等我复核。」可控性上默认先询问再行动，也可以切换成放手模式只在需要时检查。Pro 和 Max 计划未来几周先行，Team 和 Free 随后，Enterprise 管理员会提前至少 30 天收到变更通知。
https://claude.com/blog/cowork-is-now-claude

---

_Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders_
