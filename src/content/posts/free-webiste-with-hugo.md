---
title: "Free Website With Hugo, Git and Cloudflare"
description: "A practical starter guide to building a Second Brain static website on macOS using Hugo SSG, Git CLI, GitHub, and Cloudflare Pages."
pubDate: 2024-04-05
readingTime: "6m"
wordCount: "1,450 words"
category: "tech"
tags: ["#tech", "#startup"]
featuredOnHome: false
toc:
  - "Dumping knowledge for yourself (Second Brain)"
  - "Realising sharing is caring"
  - "Getting started with SSG on macOS, Git & Cloudflare"
codeSnippet:
  filename: "terminal · macos-ssg-setup.sh"
  lang: "shell"
  code: |
    xcode-select --install
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    brew install git golang hugo
    hugo new site demo-website
---

## 1. Dumping Knowledge for Yourself

Over the course of my entrepreneurial and teaching journey, I learned a key lesson: we spend nearly 70% of our energy searching for information we already knew or encountered before. Adopting a **Second Brain** (Personal Knowledge Management) workflow turns scattered notes into a searchable personal library.

## 2. Realising Sharing Is Caring

By sharing knowledge openly online, you don't deplete it—you amplify it. `il0g` ("Indrasen's Log") started as a way to connect my local note vault to a fast, minimal static site where readers can revisit technical notes on systems, books, music, and experiments.

## 3. Getting Started with SSG on macOS, Git & Cloudflare

Setting up a static site generator from scratch requires Command Line Tools, Homebrew, Git, Go, and a static site builder connected to GitHub and Cloudflare Pages for instant edge deployment.
