#!/bin/bash
# 中文新闻抓取脚本（带翻译）

WORK_DIR="/Users/zx/.openclaw/workspace/follow-builders-digest"
SCRIPT_DIR="/Users/zx/.openclaw/workspace/skills/tavily-search"
DATE=$(date +%Y-%m-%d)
NEWS_FILE="$WORK_DIR/$DATE-news.md"

cd "$WORK_DIR"

echo "📰 抓取今日新闻: $DATE"

if [ -z "$TAVILY_API_KEY" ]; then
    echo "❌ 需要设置 TAVILY_API_KEY"
    exit 1
fi

# 创建文件头
cat > "$NEWS_FILE" << EOF
---
layout: default
title: "新闻速递 — $DATE"
date: $DATE
---

# 📰 新闻速递 — $DATE

EOF

# 抓取并翻译新闻
fetch_and_translate() {
    local query="$1"
    local title="$2"
    local emoji="$3"
    
    echo "$emoji 抓取 $title..."
    node "$SCRIPT_DIR/scripts/search.mjs" "$query" -n 5 --topic news > /tmp/news_raw.txt 2>&1
    
    echo "" >> "$NEWS_FILE"
    echo "## $emoji $title" >> "$NEWS_FILE"
    echo "" >> "$NEWS_FILE"
    
    if [ -s /tmp/news_raw.txt ]; then
        local count=0
        while IFS= read -r line; do
            if [[ "$line" == "- **"* ]] && [ $count -lt 5 ]; then
                # 提取英文标题
                en_title=$(echo "$line" | sed 's/^- \*\*//' | sed 's/\*\*.*$//')
                # 翻译
                cn_title=$(python3 "$WORK_DIR/translate.py" "$en_title" 2>/dev/null || echo "$en_title")
                echo "- **$cn_title**" >> "$NEWS_FILE"
                ((count++))
            elif [[ "$line" == "  http"* ]]; then
                echo "  $line" >> "$NEWS_FILE"
                echo "" >> "$NEWS_FILE"
            fi
        done < /tmp/news_raw.txt
    fi
}

# 国际新闻
fetch_and_translate "world news today breaking" "国际新闻" "🌍"
echo "---" >> "$NEWS_FILE"

# 国内新闻  
fetch_and_translate "China news today" "国内新闻" "🇨🇳"
echo "---" >> "$NEWS_FILE"

# 科技新闻
fetch_and_translate "AI technology news today" "财经科技" "💼"

# 页脚
echo "" >> "$NEWS_FILE"
echo "---" >> "$NEWS_FILE"
echo "" >> "$NEWS_FILE"
echo "*更新时间: $(date '+%Y-%m-%d %H:%M')*" >> "$NEWS_FILE"

# 清理
rm -f /tmp/news_raw.txt

# Git 提交
echo "📝 提交到 Git..."
git add "$NEWS_FILE"
git commit -m "📰 更新中文新闻 $DATE"
git push origin master

echo "✅ 完成！"
