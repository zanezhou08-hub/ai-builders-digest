# Daily News Update Setup Guide

## 概述

此 cron 任务用于自动抓取国际、国内和科技新闻，更新 follow-builders-digest 仓库，并推送到 GitHub。

## 配置要求

### 1. Tavily API Key

必须设置 `TAVILY_API_KEY` 环境变量：

```bash
# 在 ~/.zshrc 或 ~/.bash_profile 中添加
export TAVILY_API_KEY="your-tavily-api-key-here"

# 或者在当前会话中设置
export TAVILY_API_KEY="your-tavily-api-key-here"
```

获取 API Key：
1. 访问 https://tavily.com
2. 注册账户并获取 API Key
3. 免费版通常有每日搜索限制

### 2. 环境变量验证

运行以下命令验证设置：

```bash
cd /Users/zx/.openclaw/workspace/follow-builders-digest
./cron-news-updater.sh
```

## 文件说明

### 核心文件

- `enhanced-news-fetcher.js` - 使用 Tavily API 抓取新闻的主要脚本
- `cron-news-updater.sh` - Cron 任务的包装脚本
- `SETUP.md` - 本设置指南

### 新闻文件格式

- 文件名：`YYYY-MM-DD-news.md`
- 内容包含：
  - 🌍 国际新闻
  - 🇨🇳 国内新闻  
  - 💼 财经科技
  - 📊 今日数据统计
  - 🕐 生成时间戳

## Cron 任务配置

当前 cron 任务已配置为：

- **执行时间**：每天 08:00 (UTC+8)
- **间隔**：每 24 小时
- **任务ID**：`4a612e89-6aa4-4a8e-b7de-3cd99d0a09b8`

### 验证 Cron 任务

```bash
# 查看所有 cron 任务
openclaw cron list

# 查看特定任务
openclaw cron runs 4a612e89-6aa4-4a8e-b7de-3cd99d0a09b8
```

### 手动执行测试

```bash
# 手动运行新闻抓取
./cron-news-updater.sh

# 仅测试新闻抓取（不提交到 git）
TAVILY_API_KEY="your-key" node enhanced-news-fetcher.js
```

## GitHub 集成

仓库已配置推送到：
- **远程仓库**：https://github.com/zhouxhu/ai-builders-digest.git
- **分支**：master

## 故障排除

### 常见问题

1. **TAVILY_API_KEY 未设置**
   ```
   ❌ Error: TAVILY_API_KEY environment variable not set
   ```
   解决：确保环境变量已正确设置并导出

2. **Node.js 不可用**
   ```
   ❌ Error: Node.js not available
   ```
   解决：安装 Node.js 或使用 `/usr/local/bin/node`

3. **API 认证失败**
   ```
   ❌ Error: Tavily API error: 401
   ```
   解决：检查 API Key 是否正确

4. **Git 推送失败**
   ```
   ❌ Failed to push to GitHub
   ```
   解决：检查 SSH 密钥或 GitHub 认证

### 调试模式

添加调试输出：

```bash
# 详细模式
bash -x ./cron-news-updater.sh

# 仅测试 API 连接
curl -X POST https://api.tavily.com/search \
  -H "Content-Type: application/json" \
  -d '{"api_key":"'$TAVILY_API_KEY'","query":"test"}'
```

## 新闻源配置

### 搜索查询优化

当前查询词：
- **国际新闻**：`world news international breaking news global events`
- **国内新闻**：`China news Chinese politics economy technology domestic news`
- **科技新闻**：`AI artificial intelligence technology innovation startups venture capital`

### 自定义搜索参数

在 `enhanced-news-fetcher.js` 中可调整：
- `maxResults`：每个类别最大文章数（默认：8）
- `days`：新闻时间范围（默认：1天）
- `topic`：搜索主题（默认："news"）

## 性能监控

### 日志查看

```bash
# 查看 Git 历史
git log --oneline --grep="daily news" -n 10

# 查看最近的新闻文件
ls -la *.md | head -5
```

### 成功指标

- ✅ 成功创建新闻文件
- ✅ Git 提交完成
- ✅ 推送到 GitHub 成功
- 📊 平均文章数：每个类别 6-10 篇

## 更新和维护

### 更新抓取脚本

```bash
# 备份当前脚本
cp enhanced-news-fetcher.js enhanced-news-fetcher.js.backup

# 编辑查询词或格式
nano enhanced-news-fetcher.js
```

### Cron 任务管理

```bash
# 禁用任务
openclaw cron update 4a612e89-6aa4-4a8e-b7de-3cd99d0a09b8 --enabled false

# 修改执行时间
openclaw cron update 4a612e89-6aa4-4a8e-b7de-3cd99d0a09b8 --schedule '{"kind":"every","everyMs":86400000,"anchorMs":36000000}'
```

---

## 联系支持

如果遇到问题，请检查：
1. 环境变量设置
2. 网络连接
3. API Key 有效性
4. 磁盘空间
5. 权限设置