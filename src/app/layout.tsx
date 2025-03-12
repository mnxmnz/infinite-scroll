import { Metadata } from 'next';
import { ReactNode } from 'react';

import ReactQueryMockProvider from '@/providers/ReactQueryMockProvider';

export const metadata: Metadata = {
  title: 'Infinite Scroll List',
  description: 'Infinite Scroll List using React Query',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryMockProvider>{children}</ReactQueryMockProvider>
      </body>
    </html>
  );
}
