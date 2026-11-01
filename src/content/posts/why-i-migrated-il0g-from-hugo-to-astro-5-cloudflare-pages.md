---
title: "Why I Migrated il0g.com from Hugo to Astro 5.x on Cloudflare Pages"
description: "Fixing deprecated Hugo templates, broken Disqus embeds, and moving to strict TypeScript Content Collections with zero JS overhead."
pubDate: 2025-01-03
readingTime: "7m"
wordCount: "1,610 words"
category: "tech"
tags: ["#tech", "#astro"]
featuredOnHome: false
toc:
  - "Outgrowing the legacy Hugo console theme"
  - "Astro 5.x Content Layer & Swiss-Console CSS tokens"
  - "Replacing Disqus with Cloudflare Free Plan verified comments"
codeSnippet:
  filename: "src/content.config.ts"
  lang: "typescript"
  code: |
    const posts = defineCollection({
      loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
      schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        category: z.enum(['tech', 'startup', 'experiments', 'books-music-film']),
      }),
    });
---

## 1. Outgrowing the Legacy Hugo Console Theme

Hugo served `il0g.com` well for my initial static site experiments, but mobile navigation clipped page titles, Disqus injected megabytes of third-party scripts, and maintaining Go template partials became friction-heavy.

## 2. Astro 5.x Content Layer & Swiss-Console CSS Tokens

Moving to Astro 5.x keeps the zero-JS static performance while giving us strict Zod-validated Content Collections, instantLight/Dark theme tokens, and a dedicated collapsible vertical terminal drawer (`$ ls -la /navigation`) on 375px mobile and 768px tablet screens.

## 3. Replacing Disqus with Cloudflare Free Plan Verified Comments

Instead of invasive ad-tech comment widgets, `il0g.com` now pairs static HTML generation with lightweight Cloudflare Pages Functions and Turnstile protection.
