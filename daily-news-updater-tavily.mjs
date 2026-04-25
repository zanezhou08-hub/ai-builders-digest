#!/usr/bin/env node

/**
 * Daily News Updater using Tavily API
 * Fetches international, domestic China, and tech news
 * Updates the date-based markdown file and commits to git
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const TAVILY_SCRIPT_DIR = "/Users/zx/.openclaw/workspace/skills/tavily-search/scripts";
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
    process.exit(1);
}

console.log("✅ TAVILY_API_KEY is set");

// Function to fetch news using Tavily skill
async function fetchNews(query, category) {
    const tempFile = `temp-${category}.md`;
    
    console.log(`🔍 Fetching ${category} news...`);
    
    try {
        // Build command
        const command = `node "${TAVILY_SCRIPT_DIR}/search.mjs" "${query}" --topic news --days 1`;
        console.log(`📝 Executing: ${command}`);
        
        // Execute the command
        const result = execSync(command, { encoding: 'utf8' });
        
        // Save result to temp file
        fs.writeFileSync(tempFile, result);
        console.log(`✅ Successfully fetched ${category} news`);
        
        return true;
    } catch (error) {
        console.error(`❌ Warning: Failed to fetch ${category} news:`, error.message);
        // Create empty file
        fs.writeFileSync(tempFile, '');
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
        if (internationalContent.trim()) {
            // Clean up and format international news content
            const cleanContent = internationalContent
                .replace(/^## Answer\s*\n---\s*\n/, "") // Remove AI answer section if present
                .replace(/\n*$/, ""); // Remove trailing newlines
            markdown += cleanContent + "\n\n";
        } else {
            markdown += "  No international news available\n\n";
        }
    } else {
        markdown += "  No international news available\n\n";
    }
    
    markdown += "\n"; // Add spacing
    
    // China Domestic News
    markdown += "## 🇨🇳 国内新闻\n\n";
    
    if (fs.existsSync("temp-china.md")) {
        const chinaContent = fs.readFileSync("temp-china.md", "utf8");
        if (chinaContent.trim()) {
            // Clean up and format china news content
            const cleanContent = chinaContent
                .replace(/^## Answer\s*\n---\s*\n/, "")
                .replace(/\n*$/, "");
            markdown += cleanContent + "\n\n";
        } else {
            markdown += "  No domestic news available\n\n";
        }
    } else {
        markdown += "  No domestic news available\n\n";
    }
    
    markdown += "\n"; // Add spacing
    
    // Tech/Finance News
    markdown += "## 💼 财经科技\n\n";
    
    if (fs.existsSync("temp-tech.md")) {
        const techContent = fs.readFileSync("temp-tech.md", "utf8");
        if (techContent.trim()) {
            // Clean up and format tech news content
            const cleanContent = techContent
                .replace(/^## Answer\s*\n---\s*\n/, "")
                .replace(/\n*$/, "");
            markdown += cleanContent + "\n\n";
        } else {
            markdown += "  No tech news available\n\n";
        }
    } else {
        markdown += "  No tech news available\n\n";
    }
    
    // Add summary section
    markdown += "\n";
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
    markdown += "\n";
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
        const internationalSuccess = await fetchNews(
            "world news international breaking news today global",
            "international"
        );
        
        const chinaSuccess = await fetchNews(
            "China news domestic news today 中国新闻 亚洲",
            "china"
        );
        
        const techSuccess = await fetchNews(
            "AI technology news tech artificial intelligence 科技新闻 人工智能 机器学习",
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