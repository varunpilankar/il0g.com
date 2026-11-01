import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const token = url.searchParams.get('token') || 'vfy_demo_token';
  const slug =
    url.searchParams.get('slug') ||
    'architecting-zero-cloud-smb-storage-omv-zfs-nextcloud';

  return new Response(
    JSON.stringify(
      {
        status: 'ok',
        verified: true,
        token,
        slug,
        verifiedAt: new Date().toISOString(),
        badge: '✓ email verified',
        message: '✓ email verified — comment published to thread',
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

export const POST: APIRoute = GET;
