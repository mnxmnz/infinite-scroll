'use client';

import { ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ReactQueryMockProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    async function enableMocking() {
      const initMocks = await import('../../mocks');

      await initMocks.default();
    }

    enableMocking().catch(console.error);
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
