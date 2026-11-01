import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'il0g.com:~# — Indrasen (Varun) Pilankar',
    description:
      "Indrasen's Log: Systems architecture, Linux/ZFS NAS storage, Android kernel/audio tinkering, Python OOP, books, music, and cinema.",
    site: context.site ?? 'https://il0g.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
  });
}
