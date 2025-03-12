'use client';

import { getItems } from '@/apis/item';
import ItemList from '@/components/items/list';

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <ItemList title="자동 스크롤 목록" queryKey={['autoLoadMoreList']} queryFn={getItems} />
      </div>
      <div style={{ width: '50%' }}>
        <ItemList title="수동 더보기 목록" queryKey={['manualLoadMoreList']} queryFn={getItems} autoLoad={false} />
      </div>
    </main>
  );
}
