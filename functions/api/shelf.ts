import { buildShelfFeedPayload } from '../../src/data/shelf';

export const onRequestGet = async () => {
  const payload = buildShelfFeedPayload();
  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400',
      'X-Edge-Cache': 'HIT',
    },
  });
};
