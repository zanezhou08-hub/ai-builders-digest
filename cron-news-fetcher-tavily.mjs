#!/usr/bin/env node

/**
 * Daily News Fetcher using Tavily API directly
 * Fetches international, domestic China, and tech news
 * Updates the date-based markdown file and commits to git
 */

import fs from 'fs';
import { execSync } from 'child_process';

// Configuration
const WORK_DIR = "/Users/zx/.openclaw/workspace/follow-builders-digest";
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
const NEWS_FILE = `${CURRENT_DATE}-news.md`;

console.log(`📰 Starting daily news fetch for ${CURRENT_DATE}`);

// Change to work directory
process.chdir(WORK_DIR);

// Check if Tavily API key is set
const apiKey = process.env.TAVILY_API_KEY?.trim();
if (!apiKey) {
    console.error("❌ Error: TAVILY_API_KEY environment variable is not set");
    console.log("💡 Solution:");
    console.log("  1. Set the environment variable:");
    console.log("     export TAVILY_API_KEY='your-api-key-here'");
    console.log("  2. For cron jobs, add this to your crontab:");
    console.log("     TAVILY_API_KEY='your-api-key-here' /path/to/script");
    console.log("  3. Or create a .env file and use dotenv library");
    process.exit(1);
}

console.log("✅ TAVILY_API_KEY is set");

// Function to fetch news using Tavily API directly
async function fetchTavilyNews(query, category) {
    console.log(`🔍 Fetching ${category} news...`);
    
    try {
        const url = 'https://api.tavily.com/search';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                query: query,
                max_results: 10,
                search_depth: 'advanced',
                include_domains: ['reuters.com', 'bbc.com', 'cnn.com', 'wsj.com', 'bloomberg.com', 'theguardian.com', 'ft.com', 'cbsnews.com', 'apnews.com', 'npr.org', 'nytimes.com', 'washingtonpost.com', 'economist.com', 'thetimes.co.uk', 'telegraph.co.uk', 'nbcnews.com', 'abcnews.go.com', 'cnn.com', 'cnbc.com', 'forbes.com', 'bloomberg.com', 'reuters.com', 'associatedpress.org', 'news.google.com', 'scmp.com', 'chinadaily.com.cn', 'xinhuanet.com', 'peopledaily.com.cn', 'cgtn.com', 'china.org.cn']
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Format results as markdown
        let markdown = '';
        data.results?.forEach((result, index) => {
            const title = result.title || `News ${index + 1}`;
            const url = result.url || '#';
            const relevance = Math.round((result.score || 0.5) * 100);
            
            markdown += `- **${title}** - ${result.source || 'Unknown'} (relevance: ${relevance}%)\n`;
            markdown += `  <${url}>\n\n`;
        });

        // Save to temp file
        const tempFile = `temp-${category}.md`;
        fs.writeFileSync(tempFile, markdown);
        console.log(`✅ Successfully fetched ${category} news: ${data.results?.length || 0} articles`);
        
        return true;
    } catch (error) {
        console.error(`❌ Warning: Failed to fetch ${category} news:`, error.message);
        
        // Create empty file
        const tempFile = `temp-${category}.md`;
        fs.writeFileSync(tempFile, `  No ${category} news available\n\n`);
        return false;
    }
}

// Function to generate the final news markdown
function generateNewsMarkdown() {
    const tempFile = "temp-news-content.md";
    
    // Create the markdown file with front matter
    let markdown = `---
layout: default
title: "新闻速递 — ${CURRENT_DATE}"
date: ${CURRENT_DATE}
---

# 📰 新闻速递 — ${CURRENT_DATE}

---

`;
    
    // International News
    markdown += "## 🌍 国际新闻\n\n";
    
    if (fs.existsSync("temp-international.md")) {
        const internationalContent = fs.readFileSync("temp-international.md", "utf8");
        if (internationalContent.trim() && !internationalContent.includes("No international news available")) {
            markdown += internationalContent + "\n";
        } else {
            markdown += "  No international news available\n\n";
        }
    } else {
        markdown += "  No international news available\n\n";
    }
    
    // China Domestic News  
    markdown += "## 🇨🇳 国内新闻\n\n";
    
    if (fs.existsSync("temp-china.md")) {
        const chinaContent = fs.readFileSync("temp-china.md", "utf8");
        if (chinaContent.trim() && !chinaContent.includes("No domestic news available")) {
            markdown += chinaContent + "\n";
        } else {
            markdown += "  No domestic news available\n\n";
        }
    } else {
        markdown += "  No domestic news available\n\n";
    }
    
    // Tech/Finance News
    markdown += "## 💼 财经科技\n\n";
    
    if (fs.existsSync("temp-tech.md")) {
        const techContent = fs.readFileSync("temp-tech.md", "utf8");
        if (techContent.trim() && !techContent.includes("No tech news available")) {
            markdown += techContent + "\n";
        } else {
            markdown += "  No tech news available\n\n";
        }
    } else {
        markdown += "  No tech news available\n\n";
    }
    
    // Add summary section
    markdown += "## 📊 今日数据\n\n";
    
    // Count news items
    let internationalCount = 0;
    let chinaCount = 0;
    let techCount = 0;
    
    if (fs.existsSync("temp-international.md")) {
        const internationalContent = fs.readFileSync("temp-international.md", "utf8");
        internationalCount = (internationalContent.match(/\*\*/g) || []).length;
    }
    
    if (fs.existsSync("temp-china.md")) {
        const chinaContent = fs.readFileSync("temp-china.md", "utf8");
        chinaCount = (chinaContent.match(/\*\*/g) || []).length;
    }
    
    if (fs.existsSync("temp-tech.md")) {
        const techContent = fs.readFileSync("temp-tech.md", "utf8");
        techCount = (techContent.match(/\*\*/g) || []).length;
    }
    
    const totalCount = internationalCount + chinaCount + techCount;
    
    markdown += `**精选文章：${totalCount} 篇**\n\n`;
    markdown += `- 🌍 国际: ${internationalCount} 篇\n`;
    markdown += `- 🇨🇳 国内: ${chinaCount} 篇\n`;
    markdown += `- 💼 科技: ${techCount} 篇\n\n`;
    
    markdown += "\n";
    markdown += "---\n\n";
    markdown += `*Generated by OpenClaw News Aggregator - ${new Date().toLocaleString('zh-CN')}\n\n`;
    markdown += "## ⚠️ 数据来源\n\n";
    markdown += "所有新闻数据均来自 Tavily API 实时搜索结果。\n\n";
    
    // Write the generated markdown
    fs.writeFileSync(tempFile, markdown);
    console.log("✅ News markdown generated");
}

// Main function
async function main() {
    try {
        // Fetch all categories of news
        const internationalSuccess = await fetchTavilyNews(
            "world news international breaking news today global politics economics technology",
            "international"
        );
        
        const chinaSuccess = await fetchTavilyNews(
            "China news domestic news today 中国新闻 亚洲 politics economy technology",
            "china"
        );
        
        const techSuccess = await fetchTavilyNews(
            "AI technology news tech artificial intelligence 科技新闻 人工智能 机器学习 startups venture capital",
            "tech"
        );
        
        // Generate the final markdown file
        generateNewsMarkdown();
        
        // Move the generated file to the final location
        const tempFile = "temp-news-content.md";
        if (fs.existsSync(tempFile)) {
            fs.renameSync(tempFile, NEWS_FILE);
            console.log(`✅ News file generated: ${NEWS_FILE}`);
        } else {
            console.error("❌ Error: Failed to generate news file");
            process.exit(1);
        }
        
        // Git operations
        console.log("📝 Committing changes to git...");
        
        try {
            // Add file to git
            execSync(`git add "${NEWS_FILE}"`);
            console.log("✅ File added to git");
            
            // Commit
            const commitMessage = `📰 Update daily news for ${CURRENT_DATE}`;
            execSync(`git commit -m "${commitMessage}"`);
            console.log("✅ Changes committed");
            
            // Push
            execSync("git push origin master");
            console.log("✅ Changes pushed to GitHub");
            
        } catch (gitError) {
            console.error("⚠️ Git operation failed:", gitError.message);
            console.log("💡 Manual git push may be required");
        }
        
        // Cleanup temp files
        const tempFiles = ["temp-international.md", "temp-china.md", "temp-tech.md"];
        tempFiles.forEach(file => {
            if (fs.existsSync(file)) {
                fs.unlinkSync(file);
            }
        });
        
        console.log(`✅ Daily news fetch completed for ${CURRENT_DATE}`);
        
    } catch (error) {
        console.error("❌ Fatal error:", error.message);
        process.exit(1);
    }
}

// Run the main function
main();