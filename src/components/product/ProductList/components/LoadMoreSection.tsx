import Loading from '@/components/common/Loading';
import styles from '@/components/product/ProductList/styles.module.css';

interface LoadMoreSectionProps {
  autoLoad: boolean;
  targetRef: (node?: Element | null) => void;
  isFetchingNextPage: boolean;
  canLoadMore: boolean;
  triggerNextPage: () => void;
}

export default function LoadMoreSection({
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
