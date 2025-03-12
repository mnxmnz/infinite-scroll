'use client';

import { getItems } from '@/apis/item';

import InfiniteScrollList from './InfiniteScrollList';

export default function ManualLoadMoreList() {
  return (
    <InfiniteScrollList
      title="수동 더보기 목록"
      queryKey={['manualLoadMoreList']}
      queryFn={getItems}
      autoLoad={false}
    />
  );
}
