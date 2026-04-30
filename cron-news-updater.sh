#!/bin/bash

# Daily News Update Cron Script
# This script fetches news using Tavily API and pushes to GitHub
# Designed to be run from cron jobs

set -e  # Exit on any error

WORK_DIR="/Users/zx/.openclaw/workspace/follow-builders-digest"
DATE=$(date +%Y-%m-%d)
TIMESTAMP=$(date +"%Y/%m/%d %H:%M:%S")

echo "🚀 Starting daily news update - $TIMESTAMP"

# Check if we're in the correct directory
cd "$WORK_DIR"
echo "📁 Working directory: $WORK_DIR"

# Check if TAVILY_API_KEY is set (optional - enhanced-news-fetcher.js has fallback)
if [ -z "$TAVILY_API_KEY" ]; then
    echo "⚠️  Warning: TAVILY_API_KEY environment variable not set"
    echo "💡 Using fallback API key from enhanced-news-fetcher.js"
fi

# Check if the news fetcher script exists
if [ ! -f "enhanced-news-fetcher.js" ]; then
    echo "❌ Error: enhanced-news-fetcher.js not found"
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js not available"
    exit 1
fi

echo "🔍 Fetching news categories: International, China, Tech..."

# Run the enhanced news fetcher
if node enhanced-news-fetcher.js; then
    echo "✅ News fetch completed successfully"
else
    echo "❌ News fetch failed"
    exit 1
fi

NEWS_FILE="${DATE}-news.md"

# Check if news file was created
if [ ! -f "$NEWS_FILE" ]; then
    echo "❌ Error: News file $NEWS_FILE was not created"
    exit 1
fi

echo "📝 News file created: $NEWS_FILE"

# Git operations
echo "📦 Starting Git operations..."

# Add the news file to git
if git add "$NEWS_FILE"; then
    echo "✅ Added $NEWS_FILE to git"
else
    echo "❌ Failed to add $NEWS_FILE to git"
    exit 1
fi

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "ℹ️ No changes to commit (possibly duplicate run for today)"
    exit 0
fi

# Commit the changes
COMMIT_MSG="Update daily news - $DATE"
if git commit -m "$COMMIT_MSG"; then
    echo "✅ Changes committed successfully"
else
    echo "❌ Failed to commit changes"
    exit 1
fi

# Push to GitHub
if git push origin master; then
    echo "✅ Changes pushed to GitHub successfully"
else
    echo "❌ Failed to push to GitHub"
    exit 1
fi

echo "🎉 Daily news update completed successfully!"
echo "📊 News file: $NEWS_FILE"
echo "🕐 Completed at: $(date +"%Y/%m/%d %H:%M:%S")"