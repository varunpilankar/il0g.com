import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    readingTime: z.string().default('5m'),
    wordCount: z.string().optional(),
    category: z.enum(['tech', 'startup', 'experiments', 'books-music-film']).default('tech'),
    tags: z.array(z.string()).default([]),
    featuredOnHome: z.boolean().default(false),
    toc: z.array(z.string()).optional(),
    codeSnippet: z
      .object({
        filename: z.string(),
        lang: z.string(),
        code: z.string(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
