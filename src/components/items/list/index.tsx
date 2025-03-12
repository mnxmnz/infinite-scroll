import { QueryKey } from '@tanstack/react-query';

import ListContent from '@/components/items/list/components/ListContent';
import LoadMoreSection from '@/components/items/list/components/LoadMoreSection';
import styles from '@/components/items/list/styles.module.css';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { Item } from '@/types/item';

interface ItemListProps {
  title: string;
  queryKey: QueryKey;
  queryFn: (pageParam: number, pageSize: number) => Promise<Item[]>;
  autoLoad?: boolean;
}

export default function ItemList({ title, queryKey, queryFn, autoLoad = true }: ItemListProps) {
  const { data, isFetchingNextPage, hasNextPage, triggerNextPage, targetRef, isLoading } = useInfiniteScroll<Item>({
    queryKey,
    queryFn,
    autoLoad,
  });

  const canLoadMore = !isLoading && !isFetchingNextPage && hasNextPage;

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <ul className={styles.list}>
        <ListContent isLoading={isLoading} data={data} queryKey={queryKey} />
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
