import { QueryKey } from '@tanstack/react-query';

import { Item } from '@/types/item';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

import Loading from './Loading';
import ThumbnailCard from './ThumbnailCard';
import ThumbnailCardSkeleton from './ThumbnailCardSkeleton';
import styles from './InfiniteScrollList.module.css';

interface InfiniteScrollListProps {
  title: string;
  queryKey: QueryKey;
  queryFn: (pageParam: number, pageSize: number) => Promise<Item[]>;
  autoLoad?: boolean;
}

interface ListContentProps {
  isLoading: boolean;
  data: Item[] | undefined;
  queryKey: QueryKey;
}

function ListContent({ isLoading, data, queryKey }: ListContentProps) {
  if (isLoading) {
    return <ThumbnailCardSkeleton />;
  }

  return data?.map(item => <ThumbnailCard key={`${queryKey}-${item.id}`} item={item} />);
}

interface LoadMoreSectionProps {
  autoLoad: boolean;
  targetRef: (node?: Element | null) => void;
  isFetchingNextPage: boolean;
  canLoadMore: boolean;
  triggerNextPage: () => void;
}

function LoadMoreSection({
  autoLoad,
  targetRef,
  isFetchingNextPage,
  canLoadMore,
  triggerNextPage,
}: LoadMoreSectionProps) {
  if (autoLoad) {
    return <div ref={targetRef}>{isFetchingNextPage && <Loading />}</div>;
  }

  return (
    <>
      {isFetchingNextPage && <Loading />}
      {canLoadMore && (
        <button className={styles.loadMoreButton} onClick={triggerNextPage}>
          더보기
        </button>
      )}
    </>
  );
}

export default function InfiniteScrollList({ title, queryKey, queryFn, autoLoad = true }: InfiniteScrollListProps) {
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
