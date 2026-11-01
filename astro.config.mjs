import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://il0g.com',
  output: 'static',
  integrations: [sitemap()],
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321,
      allowedHosts: true,
    },
    preview: {
      host: '0.0.0.0',
      port: 4321,
      allowedHosts: true,
    },
  },
});
