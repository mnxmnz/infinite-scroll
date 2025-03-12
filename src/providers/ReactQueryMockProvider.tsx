'use client';

import { ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function ReactQueryMockProvider({ children }: { children: ReactNode }) {
  const [isMockInitialized, setIsMockInitialized] = useState(false);

  useEffect(() => {
    async function enableMocking() {
      try {
        if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
          const initMocks = await import('../../mocks');

          await initMocks.default();
          setIsMockInitialized(true);
        }
      } catch (error) {
        console.error('Failed to initialize mocks: ', error);
        setIsMockInitialized(true);
      }
    }

    enableMocking();
  }, []);

  if (!isMockInitialized) {
    return null;
  }

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
