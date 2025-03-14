'use client';

import { getProducts } from '@/apis/product';
import ProductList from '@/components/product/ProductList';

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <ProductList title="자동 스크롤 목록" queryKey={['autoLoadMoreList']} queryFn={getProducts} />
      </div>
      <div style={{ width: '50%' }}>
        <ProductList
          title="수동 더보기 목록"
          queryKey={['manualLoadMoreList']}
          queryFn={getProducts}
          autoLoad={false}
        />
      </div>
    </main>
  );
}
