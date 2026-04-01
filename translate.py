#!/usr/bin/env python3
"""翻译新闻标题"""
import sys
import json
import urllib.request

text = sys.argv[1] if len(sys.argv) > 1 else ""
if not text:
    print("")
    sys.exit(0)

# 使用 GLM-5 翻译
api_key = "zhipuai.a_BkDGWf5C5p4XaAFeP2mGF4O8xVBdlTCG2w9KjnPmXeFLRjBOE5t7X.g8YjaF"
url = "https://open.bigmodel.cn/api/paas/v4/chat/completions"

data = {
    "model": "glm-5",
    "messages": [{"role": "user", "content": f"翻译成简洁中文，只输出翻译结果：{text}"}],
    "max_tokens": 200
}

try:
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode(),
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"}
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        result = json.loads(resp.read().decode())
        if "choices" in result:
            print(result["choices"][0]["message"]["content"].strip())
        else:
            print(text)
except:
    print(text)
