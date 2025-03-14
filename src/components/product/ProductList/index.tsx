import { QueryKey } from '@tanstack/react-query';

import ProductItem from '@/components/product/ProductItem';
import Skeleton from '@/components/product/ProductList/components/Skeleton';
import LoadMoreSection from '@/components/product/ProductList/components/LoadMoreSection';
import styles from '@/components/product/ProductList/styles.module.css';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { Product } from '@/types/product';

interface ProductListProps {
  title: string;
  queryKey: QueryKey;
  queryFn: (pageParam: number, pageSize: number) => Promise<Product[]>;
  autoLoad?: boolean;
}

export default function ProductList({ title, queryKey, queryFn, autoLoad = true }: ProductListProps) {
  const { data, isFetchingNextPage, hasNextPage, triggerNextPage, targetRef, isLoading } = useInfiniteScroll<Product>({
    queryKey,
    queryFn,
    autoLoad,
  });

  const canLoadMore = !isLoading && !isFetchingNextPage && hasNextPage;

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {isLoading ? (
          <Skeleton />
        ) : (
          data?.map(product => <ProductItem key={`${queryKey}-${product.id}`} product={product} />)
        )}
      </ul>
      <LoadMoreSection
        autoLoad={autoLoad}
        targetRef={targetRef}
        isFetchingNextPage={isFetchingNextPage}
        canLoadMore={canLoadMore}
        triggerNextPage={triggerNextPage}
      />
    </div>
  );
}
