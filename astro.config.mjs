import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

function cloudflareContactDevPlugin() {
  return {
    name: 'cloudflare-contact-dev-plugin',
    configureServer(server) {
      if (!server.httpServer) return;
      server.middlewares.use('/api/contact', (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }
        let rawBody = '';
        req.on('data', (chunk) => {
          rawBody += chunk.toString();
        });
        req.on('end', () => {
          let parsed = {};
          try {
            if (rawBody.trim().startsWith('{')) {
              parsed = JSON.parse(rawBody);
            } else {
              const params = new URLSearchParams(rawBody);
              parsed = Object.fromEntries(params.entries());
            }
          } catch {
            parsed = {};
          }
          const name = String(parsed.name || 'Visitor').trim();
          const email = String(parsed.email || 'visitor@example.com').trim();
          const topic = String(
            parsed.topic || 'Consulting / Private NAS & Linux Infrastructure (eHom)'
          ).trim();
          const message = String(parsed.message || '').trim();

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(
            JSON.stringify(
              {
                status: 'ok',
                delivered: true,
                recipient: 'varun@il0g.com',
                replyTo: email,
                senderName: name,
                topic,
                messagePreview: message.slice(0, 160),
                turnstileVerified: true,
                message: '✓ delivered to varun@il0g.com',
                timestamp: new Date().toISOString(),
              },
              null,
              2
            )
          );
        });
      });
    },
  };
}

export default defineConfig({
  site: 'https://il0g.com',
  output: 'static',
  integrations: [sitemap()],
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  vite: {
    plugins: [cloudflareContactDevPlugin()],
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
