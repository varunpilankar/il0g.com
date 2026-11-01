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

      server.middlewares.use('/api/comments/verify', (req, res) => {
        const reqUrl = new URL(req.url || '/', 'http://localhost:4321');
        const token = reqUrl.searchParams.get('token') || 'vfy_demo_token';
        const slug =
          reqUrl.searchParams.get('slug') ||
          'architecting-zero-cloud-smb-storage-omv-zfs-nextcloud';
        const name = reqUrl.searchParams.get('name') || 'Verified Reader';

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(
          JSON.stringify(
            {
              status: 'ok',
              verified: true,
              token,
              slug,
              authorName: name,
              verifiedAt: new Date().toISOString(),
              badge: '✓ email verified',
              message: '✓ email verified — comment published to thread',
            },
            null,
            2
          )
        );
      });

      server.middlewares.use('/api/comments', (req, res, next) => {
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
          const name = String(parsed.name || parsed.authorName || 'Siddharth Rao').trim();
          const email = String(parsed.email || parsed.authorEmail || 'reader@example.com').trim();
          const comment = String(parsed.comment || parsed.body || '').trim();
          const slug = String(
            parsed.slug ||
              parsed.postSlug ||
              'architecting-zero-cloud-smb-storage-omv-zfs-nextcloud'
          ).trim();
          const honeypot = String(parsed.website || parsed.honeypot || '').trim();
          const token = 'vfy_' + Date.now().toString(36);
          const createdAt = new Date().toISOString().slice(0, 10);

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.end(
            JSON.stringify(
              {
                status: 'ok',
                verificationSent: true,
                honeypotTriggered: Boolean(honeypot),
                turnstileVerified: true,
                slug,
                authorName: name,
                replyNotificationEmail: email,
                commentPreview: comment.slice(0, 240),
                createdAt,
                verificationToken: token,
                verificationUrl: `/api/comments/verify?token=${encodeURIComponent(token)}&slug=${encodeURIComponent(slug)}&name=${encodeURIComponent(name)}`,
                message: '✓ verification link sent to your email',
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
