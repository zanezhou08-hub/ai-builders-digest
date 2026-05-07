# 📰 Daily News Fetcher - API Configuration Guide

## 🚀 快速开始

### 1. 获取 Tavily API 密钥

1. 访问 [Tavily AI](https://tavily.com/)
2. 注册免费账户（免费 tier 每月1000次搜索）
3. 进入控制面板获取 API Key

### 2. 配置环境变量

**方法一：临时设置（当前会话）**
```bash
export TAVILY_API_KEY="your-tavily-api-key-here"
```

**方法二：永久配置（推荐）**
```bash
echo 'export TAVILY_API_KEY="your-tavily-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

**方法三：仅限此项目**
```bash
echo '{"tavily_api_key": "your-tavily-api-key-here"}' > tavily-config.json
```

### 3. 测试配置

```bash
# 检查API密钥是否设置
echo "TAVILY_API_KEY length: ${#TAVILY_API_KEY}"

# 运行新闻获取脚本
node daily-news-updater-tavily.mjs
```

## 📋 脚本说明

### 主要脚本

- `daily-news-updater-tavily.mjs` - 主要新闻更新脚本
- `cron-news-fetcher-tavily.mjs` - 定时任务版本
- `setup-tavily-cron.mjs` - 定时任务设置向导

### 支持的新闻类型

1. **国际新闻** - 世界新闻、国际时事
2. **国内新闻** - 中国新闻、亚洲新闻  
3. **科技新闻** - AI、科技、创新动态

## ⏰ 定时任务设置

### 使用 cron

```bash
# 编辑定时任务
crontab -e

# 添加以下内容（每天8:00运行）
0 8 * * * TAVILY_API_KEY="your-api-key" /usr/bin/node /Users/zx/.openclaw/workspace/follow-builders-digest/daily-news-updater-tavily.mjs
```

### 使用 OpenClaw cron

```bash
# 创建 OpenClaw 定时任务
openclaw cron add \
  --name "Daily News Update" \
  --schedule '0 8 * * *' \
  --payload '{
    "kind": "agentTurn",
    "message": "Run daily news update for follow-builders-digest",
    "model": "zai/glm-5-turbo"
  }' \
  --sessionTarget "isolated"
```

## 🔧 故障排除

### 常见错误

1. **TAVILY_API_KEY not set**
   - 检查环境变量是否正确设置
   - 确认API密钥没有拼写错误

2. **Network error**
   - 检查网络连接
   - 确认Tavily服务状态

3. **Git push failed**
   - 检查GitHub认证状态
   - 确认仓库权限

### 调试命令

```bash
# 测试Tavily API连接
curl -X POST "https://api.tavily.com/search" \
  -H "Content-Type: application/json" \
  -d '{
    "api_key": "your-api-key",
    "query": "test",
    "max_results": 1
  }'

# 检查脚本执行日志
node daily-news-updater-tavily.mjs 2>&1 | tee news-update.log
```

## 📈 使用限制

### Tavily 免费套餐
- 每月1000次搜索
- 基础功能
- 商业使用需付费

### 升级建议
```bash
# 升级到付费套餐
# 1. 登录 Tavily 控制面板
# 2. 选择合适的付费计划
# 3. 更新环境变量中的API密钥
```

## 🤖 高级配置

### 自定义搜索参数

编辑 `daily-news-updater-tavily.mjs` 中的查询参数：

```javascript
// 国际新闻查询
"world news international breaking news today global"

// 国内新闻查询  
"China news domestic news today 中国新闻 亚洲"

// 科技新闻查询
"AI technology news tech artificial intelligence 科技新闻 人工智能 机器学习"
```

### 添加新新闻类别

1. 在脚本中添加新的fetch函数
2. 扩展generateNewsMarkdown函数
3. 更新git提交信息

## 📞 支持

如遇到问题，请检查：
1. API密钥是否有效
2. 网络连接是否正常
3. 脚本执行权限
4. GitHub仓库状态

---

**创建时间：** 2026-05-07  
**版本：** 1.0  
**维护者：** OpenClaw News Team