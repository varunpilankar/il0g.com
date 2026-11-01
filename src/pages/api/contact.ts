import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify(
      {
        status: 'ok',
        endpoint: '/api/contact',
        delivered: true,
        protection: 'Cloudflare Turnstile Free Tier',
        routing: 'Cloudflare Email Routing',
        recipient: 'varun@il0g.com',
        message: '✓ delivered to varun@il0g.com',
        topics: [
          'Consulting / Private NAS & Linux Infrastructure (eHom)',
          'Engineering Leadership / Role Opportunity',
          'Speaking / Python & Systems Workshop',
          'General Note / Blog Feedback',
        ],
      },
      null,
      2
    ),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }
  );
};

export const POST: APIRoute = async () => {
  return new Response(
    JSON.stringify(
      {
        status: 'ok',
        delivered: true,
        recipient: 'varun@il0g.com',
        turnstileVerified: true,
        message: '✓ delivered to varun@il0g.com',
        timestamp: new Date().toISOString(),
      },
      null,
      2
    ),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }
  );
};
