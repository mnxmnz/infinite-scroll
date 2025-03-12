import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/items', ({ request }) => {
    const url = new URL(request.url);
    const offset = Number(url.searchParams.get('offset')) || 0;
    const limit = Number(url.searchParams.get('limit')) || 20;

    const items = Array.from({ length: limit }).map((_, index) => ({
      id: offset + index + 1,
      title: `아이템 ${offset + index + 1}번`,
      imageUrl: `https://picsum.photos/200/300?random=${offset + index + 1}`,
    }));

    return HttpResponse.json(items);
  }),

  http.get('/_next/image', async ({ request }) => {
    const url = new URL(request.url);
    const imageUrl = url.searchParams.get('url');

    if (!imageUrl) {
      return new HttpResponse(null, { status: 400 });
    }

    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();

    return new HttpResponse(imageBuffer, {
      headers: {
        'Content-Type': imageResponse.headers.get('Content-Type') || 'image/jpeg',
      },
    });
  }),
];
