---
layout: default
title: "AI Builders Digest — 2026-10-07"
date: 2026-10-07
section: ai-builders
---

# 🤖 AI Builders Digest — 2026-10-07

---

## X / TWITTER

### Guillermo Rauch
Vercel CEO

本日最热（2100+ 赞）：Rauch 发布 gdp-ts——TypeScript 版 "Ghosts of Departed Proofs"。这是一个库 + linter + AI skill 的组合，核心契约是：敏感函数必须拿到调用方"已做授权检查"的证明（proof），由类型系统在编译期强制校验，防止团队和 agent 交付灾难级安全漏洞。他的论述很精辟：这类模式在 Haskell 圈早已存在，过去受限于人力 code review 和认知/语法开销而小众；"现在局面反转了——agent 写的代码已经多到我们审不过来，而它们恰恰擅长在 borrow checker 这类硬约束的紧循环里蓬勃发展。"README 示例直接建模 Vercel 真实约束：修改项目密码需要"特定角色 + 特定权益"的证明。

https://x.com/rauchg/status/2107119811444748555

### Thariq
Anthropic Claude Code 工程师

两条硬核分享。其一（890+ 赞）：用结构化 planning 格式而非裸 HTML 做规划，token 效率高得多——模型不必为状态机、图示、代码片段这些常见物重建组件和逻辑。其二（820+ 赞）：他给这个模式起了个爱称 "local hands"——Claude 在云端运行，却能访问你本地的文件，而且这个能力即将登陆 Cowork。

https://x.com/trq212/status/2107294499282293017

https://x.com/trq212/status/2107229483015258493

### Aaron Levie
Box CEO

Levie 判断 agent 落地的真正瓶颈：无法在"真实"工作环境（文件、CRM、邮件等）里测试、调优和评估 agent。如果不知道 agent 在 eval 上的表现、不知道模型一升级会不会退化，就谈不上部署。现在每家企业都得手工作业、逐个验证，慢且痛苦——"未来每家企业都会有专人管理 eval、搭建 eval 基础设施与模拟环境。这是个巨大的市场。"

https://x.com/levie/status/2107283615247999257

### Madhu Guru
Meta AI 高级总监（此前在 Google 主导 Gemini、Veo、Nano Banana）

Guru 纠正最常见的团队误区：把 eval 当作 agent 建成之后"追加的 QA 环节"。"AI 产品从根子上就不一样——你的 eval 就是你的产品规格说明书。"

https://x.com/realmadhuguru/status/2107292113214091355

### Garry Tan
Y Combinator 总裁兼 CEO

Tan 指出一个有趣的利益结构（510+ 赞）：实验室自家的 harness 有烧 token 的天然激励，反而给了创业公司 harness 真正的生存空间——比如 Grep 能通过观察 agent 的使用，把 token 消耗自动替换成确定性的、可复用的已测试代码。另一条：AGI 科学循环（Science Loops）正在到来，也会出现与之配套的 Muse/Instinct，Halmos 正在做这件事。

https://x.com/garrytan/status/2107129959550685660

https://x.com/garrytan/status/2107173670699622830

### Amjad Masad
Replit CEO

Masad 观察："美国在 open-weights 模型上正在追上来。"（280 赞，配图对比）他同日还晒了 Replit 的另一面：大量家族生意正跑在 Replit 上运转。

https://x.com/amasad/status/2107222388429766970

https://x.com/amasad/status/2107222889946898893

### Thibault Sottiaux
OpenAI Codex 与 ChatGPT 负责人

兑现"28 天日更"承诺进行时：Sottiaux 预告 Sergio 正在 ChatGPT 里打造协作空间（collaborative space），"每天都在突飞猛进"。他本人则难掩兴奋："这可能是我在 OpenAI 迄今最好的一天，强度和乐趣都拉满。未来一片光明。"（4500+ 赞）

https://x.com/thsottiaux/status/2107200530477101461

https://x.com/thsottiaux/status/2107311729768353844

### Ryo Lu
设计师（曾主导 Cursor、Notion、Stripe 设计）

在乔布斯逝世纪念日（10 月 5 日），Ryo 写下一段动人的回忆：从小用米色机箱的穷孩子，在加拿大第一次看见 iMac G4——"电脑怎么能这么美？"买不起 Mac，就把 PC 的图标、字体、窗口全部改成 Mac 的样子，"这就是我入行界面设计的方式。"他刻录乔布斯 keynote 的 DVD 反复研读，并表达了对当下的隐忧："我们花这么多力气想打败人类，真希望多花点时间向人的生活学习、把它们变得更好。"文末引用："那些疯狂到以为自己能改变世界的人，才能真正改变世界。"同日他还发布了 ryOS Subtitles Chrome 插件：Netflix 双语字幕 + 中日韩发音指南（790+ 赞）。

https://x.com/ryolu_/status/2107246891977335049

https://x.com/ryolu_/status/2107146629338042853

### Aditya Agarwal
SPC 普通合伙人、Dropbox 前 CTO

Agarwal 提出一个值得玩味的想法：希望能在本地运行 Muse/Dot 的那台"计算机"——"相比越锁越死的 macOS，那会是更好的 agent 环境。"

https://x.com/adityaag/status/2107133989941387282

### Peter Yang
AI 内容创作者

Yang 的新教程：手把手搭建一个通过 Gemini Live 语音通话教日语的 AI 应用——用 spec skill 出设计、接 Gemini Live API 做语音、用 Nano Banana 画立体场景图，目标是"旅行前学会任何语言的 100 个常用短语"。另附 Gemini 3.8 Live 的详解。

https://x.com/petergyang/status/2107108755699900459

https://x.com/petergyang/status/2107108768240796093

### Dan Shipper
Every CEO

Shipper 给 Every 的承诺只有一句话："当前沿前进时，你也一起前进。"

https://x.com/danshipper/status/2107173061313388636

---

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
