---
title: "Sharing With Hugo: Building an Open Personal Log"
description: "Why I started il0g.com to sharpen my writing habit, document unvarnished notes on tech, films, books, and music, and learn in public."
pubDate: 2024-04-03
readingTime: "5m"
wordCount: "1,120 words"
category: "startup"
tags: ["#startup", "#books-music-film"]
featuredOnHome: false
toc:
  - "Learning and unlearning in public"
  - "Connecting a personal knowledge vault to the web"
codeSnippet:
  filename: "deploy-log.sh"
  lang: "shell"
  code: |
    # Publish new markdown note from local Second Brain vault
    git add src/content/posts/
    git commit -m "publish new technical log"
    git push origin astro-main
---

## 1. Learning and Unlearning in Public

Whether you call this a post, blog, or static log, the main purpose of writing openly on `il0g.com` is to unlearn, learn new things, and sharpen my writing habit. Every tech review, systems architecture note, book reflection, or film log here is written from first-person experience without editorial fluff.

## 2. Connecting a Personal Knowledge Vault to the Web

Instead of heavyweight CMS platforms, keeping posts in plain Markdown files versioned in Git ensures `il0g.com` stays fast, portable, and durable for decades.
