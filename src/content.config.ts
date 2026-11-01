import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

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

const projects = defineCollection({
  loader: file('./src/content/projects/items.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    meta: z.string(),
    title: z.string(),
    href: z.string(),
    desc: z.string(),
    section: z.enum(['home-selected', 'commercial', 'open-source', 'book']).default('home-selected'),
    tags: z.array(z.string()).default([]),
    featuredOnHome: z.boolean().default(false),
  }),
});

const photos = defineCollection({
  loader: file('./src/content/photos/items.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    src: z.string(),
    alt: z.string(),
    filename: z.string(),
    tag: z.string(),
    featuredOnHome: z.boolean().default(false),
    featuredOnShelf: z.boolean().default(true),
  }),
});

export const collections = { posts, projects, photos };
