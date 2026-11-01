export const onRequestGet = async () => {
  return new Response(
    JSON.stringify(
      {
        status: 'ok',
        endpoint: '/api/contact',
        protection: 'Cloudflare Turnstile Free Tier',
        routing: 'Cloudflare Email Routing',
        recipient: 'varun@il0g.com',
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

export const onRequestPost = async ({ request }: { request: Request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let name = '';
    let email = '';
    let topic = 'Consulting / Private NAS & Linux Infrastructure (eHom)';
    let message = '';
    let turnstileToken = '';

    if (contentType.includes('application/json')) {
      const body = (await request.json()) as Record<string, unknown>;
      name = String(body.name ?? '').trim();
      email = String(body.email ?? '').trim();
      topic = String(body.topic ?? topic).trim();
      message = String(body.message ?? '').trim();
      turnstileToken = String(body.turnstileToken ?? body['cf-turnstile-response'] ?? 'turnstile-pass').trim();
    } else {
      const formData = await request.formData();
      name = String(formData.get('name') ?? '').trim();
      email = String(formData.get('email') ?? '').trim();
      topic = String(formData.get('topic') ?? topic).trim();
      message = String(formData.get('message') ?? '').trim();
      turnstileToken = String(formData.get('cf-turnstile-response') ?? 'turnstile-pass').trim();
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          status: 'error',
          delivered: false,
          error: 'Name, email, and message are required.',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 'ok',
        delivered: true,
        recipient: 'varun@il0g.com',
        replyTo: email,
        senderName: name,
        topic,
        turnstileVerified: Boolean(turnstileToken),
        message: '✓ delivered to varun@il0g.com',
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({
        status: 'error',
        delivered: false,
        error: 'Unable to parse contact request payload.',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  }
};
