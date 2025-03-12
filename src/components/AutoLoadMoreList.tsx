'use client';

import { getItems } from '@/apis/item';

import InfiniteScrollList from './InfiniteScrollList';

export default function AutoLoadMoreList() {
  return <InfiniteScrollList title="자동 스크롤 목록" queryKey={['autoLoadMoreList']} queryFn={getItems} />;
}
