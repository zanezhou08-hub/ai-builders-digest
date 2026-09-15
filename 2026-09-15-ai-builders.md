AI Builders Digest — 2026-09-15

## X / TWITTER

### Sam Altman
OpenAI CEO

Sam Altman 连发两帖谈 AI 安全，可以看作 OpenAI 对近期 "pacing" 争论的正式表态。他认为 AI 发展有两种必须避免的失败方式：一是人类失去对 AI 的控制，二是权力过度集中（无论是单个国家、单个公司还是单个实验室）。他欢迎联邦层面的 frontier AI 监管框架，也对独立审计等想法持开放态度，但明确强调 "pacing 不等于 stopping"，进展会继续，只是应当比毫无约束的情形慢一点。他还透露 OpenAI 现在会在预期大幅提升能力的前沿 RL 训练开始前，预先制定显式的 safety cases。

https://x.com/sama/status/2099348812305473766

https://x.com/sama/status/2099352016988614852

### Aaron Levie
Box CEO

Aaron Levie 认为 Dario 提案中的具体改进目标是 AI 发展的必要条件，不该把 "pacing" 一词妖魔化。他的逻辑是：AI 将支撑金融交易系统、医疗设备、生物科技突破、国防系统等 mission critical 领域，要求这些系统安全、对齐完全合理。真正的难题在于如何做到这一点，同时不明显拖慢创新或削弱竞争。

https://x.com/levie/status/2099167992835924301

### Amjad Masad
Replit CEO

Amjad Masad 宣布重新开放免费构建："之前看到那么多用户因为价格被挡在 AI 编程门外，真的很痛心。现在又可以免费 build 了！"

https://x.com/amasad/status/2099197117013340450

### Boris Cherny
Anthropic Claude Code 团队

Boris Cherny 分享了一个很酷的 Claude 用法：Fable 破解了一个有 370 年历史的古老密码（Cyphral Distich）。

https://x.com/bcherny/status/2099322487603634395

### Peter Yang
AI 实战教程作者

Peter Yang 引用 Brex CEO Pedro 分享的一张图，说明 AI 采用的真实渗透率：每个点代表 320 万人，全球 84% 的人从未用过 AI，16% 在用免费 chatbot，每月付 $20 的约 0.3%，而真正高效使用 agent 的只有约 0.04%。结论就一句话：我们仍在极早期。

https://x.com/petergyang/status/2099200231820963891

### Peter Steinberger
OpenClaw 与 OpenAI 生态开发者

Peter Steinberger 预告下个版本的 worktrees 创建速度提升约 80%，原理是利用 APFS/btrfs/xfs/ReFS 的 folder clone，还顺便省下大量磁盘空间。他也不忘玩梗："全是用 Rust 写的。因为你逃不开 Rust。" 另外他表示会先花几周测试一项新改动，如果确认对多数用户有帮助，会争取把它带进 Codex。

https://x.com/steipete/status/2099197266636783989

https://x.com/steipete/status/2099201162922938418

https://x.com/steipete/status/2099262092633411832

### Zara Zhang
独立开发者

Zara Zhang 吐槽了 Astra 的一个通病，引发大量共鸣（94 条回复）：它承认错误却不改正。"Astra：我做完了 X。我：这是错的，你应该做 Y。Astra：你说得对，我应该做 Y。我：……那你倒是去做啊？为什么其他模型都会直接去做？"

https://x.com/zarazhangrui/status/2099348631291883945

### Dan Shipper
Every CEO

Dan Shipper 用一句话调侃了 pacing 之争："开始用 Astra medium 跑简单任务了，我管这叫给前沿踩个刹车。"

https://x.com/danshipper/status/2099231248027730195

### Nikunj Kothari
FPV Ventures 合伙人

Nikunj Kothari 给求职者的忠告在当下尤其适用：入职估值更高、总包更高，往往是 bug 而不是 feature。融资估值高不代表公司更稳，要客观看市场、traction 和真实位置；如果公司估值是 100 倍 ARR，那它得先涨进去。他现身说法：曾任职的一家公司融了 $60M，投资人是全球最好的之一，三年后照样倒闭，股权全部归零。"现在所有数字都不 rooted in reality，一定要自己算账。"

https://x.com/nikunj/status/2099198567923765357

### Aditya Agarwal
SPC 合伙人，前 Dropbox CTO

Aditya Agarwal 感慨："想象这样一个世界：我们不必依赖任何单一组织保持善良和正直。"

https://x.com/adityaag/status/2099259374544003527

### Guillermo Rauch
Vercel CEO

Guillermo Rauch 这条帖子拿下 2500+ 赞："你们不懂，我写软件是为了放松。" AI 编程时代的心声了。

https://x.com/rauchg/status/2099248037507797164

## PODCASTS

### No Priors: Redefining Chip Architecture with Arm CEO Rene Haas

一句话核心：Arm CEO Rene Haas 认为 AI 已经成为芯片设计的水电煤（Arm 内部 80-90% 的工程师每天在用），而行业真正的瓶颈不是需求不足，而是数据中心建设、晶圆和内存供给，这种紧张局面至少还要持续 3-5 年。

Haas 同时执掌 Arm 和 SoftBank Group International，出身 Nvidia，是芯片行业几十年的老兵。他解释了 Arm 为什么从纯 IP 授权走向 compute subsystems，再到推出自研芯片：当初 Meta 想要一颗通用的 agentic CPU，市面上没人能提供，于是找上 Arm 合作，这成了 Arm 自有产品的起点。有意思的是，Nvidia、Amazon、Microsoft、Google 这些自研 Arm 服务器芯片的大客户不仅没有反弹，反而集体背书，理由是市面上 Arm 软件越多，整个生态越受益。

关于 AI 对芯片行业的影响，他给出了内部视角：一颗芯片的设计周期 24-36 个月，最大头不是架构设计，而是 verification、validation 和 debug，而这恰恰是 AI 最擅长的环节。他的比喻相当生动："如果现在把 AI 工具关掉，就像 90 年代你用上了互联网，却被告知每天只在 2 到 4 点开放，其余时间请去走廊尽头的图书馆查资料。那会天下大乱的。精灵已经放出来了，谁也收不回去。" 他还预测 5 年以上，较简单的芯片有望实现从想法直接生成 GDSII 文件（送厂生产的设计文件）。

谈到 AI 泡沫论，他的判断很明确：撇开股市估值不谈，供给相对需求"还差得远"。下一个瓶颈会是数据中心建设本身，叠加美国部分地区的政策阻力。至于机器人，他认为人形和专用形态会并存，分布中心、工厂自动化和物流配送会最先被自动化，而且"今天你看到的人形机器人的大脑，基本都跑在 Arm 上"。

https://www.youtube.com/@NoPriorsPodcast

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders
