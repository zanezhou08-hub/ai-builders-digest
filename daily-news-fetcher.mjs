#!/usr/bin/env node

/**
 * Daily News Fetcher using Tavily API with config file support
 * Fetches international, domestic China, and tech news
 * Updates the date-based markdown file and commits to git
 */

import fs from 'fs';
import { execSync } from 'child_process';

// Configuration
const WORK_DIR = "/Users/zx/.openclaw/workspace/follow-builders-digest";
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
const NEWS_FILE = `${CURRENT_DATE}-news.md`;
const CONFIG_FILE = "tavily-config.json";

console.log(`📰 Starting daily news fetch for ${CURRENT_DATE}`);

// Change to work directory
process.chdir(WORK_DIR);

// Function to load API key from config file or environment
function getApiKey() {
    // Try environment variable first
    const envKey = process.env.TAVILY_API_KEY?.trim();
    if (envKey) {
        console.log("✅ Using API key from environment variable");
        return envKey;
    }
    
    // Try config file
    if (fs.existsSync(CONFIG_FILE)) {
        try {
            const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
            if (config.tavily_api_key) {
                console.log("✅ Using API key from config file");
                return config.tavily_api_key;
            }
        } catch (error) {
            console.error("⚠️ Error reading config file:", error.message);
        }
    }
    
    console.error("❌ Error: TAVILY_API_KEY not found in environment or config file");
    console.error("Please set TAVILY_API_KEY environment variable or create tavily-config.json");
    process.exit(1);
}

const apiKey = getApiKey();

// Function to fetch news using curl directly with Tavily API
async function fetchNews(query, category) {
    const tempFile = `temp-${category}.md`;
    
    console.log(`🔍 Fetching ${category} news...`);
    
    try {
        // Build the API request URL
        const encodedQuery = encodeURIComponent(query);
        const apiUrl = `https://api.tavily.com/search`;
        
        const requestBody = JSON.stringify({
            api_key: apiKey,
            query: query,
            search_depth: "basic",
            topic: "news",
            max_results: 10,
            include_answer: true,
            include_raw_content: false,
            days: 1
        });
        
        console.log(`📝 Making API request to Tavily...`);
        
        // Use curl to make the API request
        const curlCommand = `curl -s -X POST "${apiUrl}" \
            -H "Content-Type: application/json" \
            -d '${requestBody}' \
            > ${tempFile}`;
        
        execSync(curlCommand, { encoding: 'utf8' });
        
        // Read and parse the response
        const response = fs.readFileSync(tempFile, 'utf8');
        const data = JSON.parse(response);
        
        // Generate markdown content
        let markdown = '';
        
        // Print AI-generated answer if available
        if (data.answer) {
            markdown += `**AI Summary:** ${data.answer}\n\n---\n\n`;
        }
        
        // Print results
        const results = data.results || [];
        
        if (results.length === 0) {
            markdown += `No ${category} news found.\n\n`;
        } else {
            for (const r of results) {
                const title = String(r?.title ?? "").trim();
                const url = String(r?.url ?? "").trim();
                const content = String(r?.content ?? "").trim();
                const score = r?.score ? ` (relevance: ${(r.score * 100).toFixed(0)}%)` : "";
                
                if (!title || !url) continue;
                
                markdown += `- **${title}**${score}\n`;
                markdown += `  <${url}>\n`;
                if (content) {
                    const preview = content.slice(0, 200);
                    markdown += `  ${preview}${content.length > 200 ? "..." : ""}\n`;
                }
                markdown += `\n`;
            }
        }
        
        // Write the formatted content to temp file
        fs.writeFileSync(tempFile, markdown);
        console.log(`✅ Successfully fetched ${category} news (${results.length} articles)`);
        
        return true;
        
    } catch (error) {
        console.error(`❌ Warning: Failed to fetch ${category} news:`, error.message);
        // Create empty file
        fs.writeFileSync(tempFile, `No ${category} news available.\n\n`);
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
            markdown += internationalContent + "\n\n";
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
            markdown += chinaContent + "\n\n";
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
            markdown += techContent + "\n\n";
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