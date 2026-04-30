#!/usr/bin/env node

/**
 * Setup script for Tavily API key configuration for cron jobs
 */

import fs from 'fs';
import path from 'path';

const CONFIG_FILE = "tavily-cron-config.json";

console.log("🔧 Tavily Cron Job Setup");

// Check if API key is already set in environment
const apiKey = process.env.TAVILY_API_KEY?.trim();
if (apiKey) {
    console.log("✅ TAVILY_API_KEY is already set in environment");
    console.log("API Key:", apiKey.substring(0, 8) + "...");
    process.exit(0);
}

// Check if config file exists
if (fs.existsSync(CONFIG_FILE)) {
    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
    console.log("📁 Found existing config file");
    console.log("Config API Key:", config.tavily_api_key ? config.tavily_api_key.substring(0, 8) + "..." : "Not set");
}

console.log("\n📋 Setup Options:");
console.log("1. Manually set environment variable:");
console.log("   export TAVILY_API_KEY='your-tavily-api-key-here'");
console.log("2. Create a config file for cron jobs:");
console.log("   echo '{\"tavily_api_key\": \"your-api-key\"}' > tavily-cron-config.json");
console.log("3. Modify the cron job to include the environment variable:");
console.log("   TAVILY_API_KEY='your-api-key' /Users/zx/.openclaw/workspace/follow-builders-digest/cron-news-fetcher-tavily.mjs");
console.log("4. Use a .env file and modify the script to use dotenv");

console.log("\n📝 Example cron entry:");
console.log("0 8 * * * TAVILY_API_KEY='your-api-key' /usr/bin/node /Users/zx/.openclaw/workspace/follow-builders-digest/cron-news-fetcher-tavily.mjs");

console.log("\n⚠️ Security Note:");
console.log("- Never commit API keys to version control");
console.log("- Use environment variables for production deployments");
console.log("- Consider using secret management services for production");

console.log("\n✅ Setup guide completed. Please configure your API key before running the cron job.");