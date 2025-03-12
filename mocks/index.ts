export default async function initMocks() {
  if (process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled') {
    return;
  }

  try {
    if (typeof window === 'undefined') {
      const { server } = await import('./server');

      server.listen({ onUnhandledRequest: 'bypass' });
    } else {
      const { worker } = await import('./browser');

      await worker.start({
        onUnhandledRequest: 'bypass',
      });
    }
  } catch (error) {
    console.error('MSW initialization failed: ', error);
  }
}
