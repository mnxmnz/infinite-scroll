'use client';

import { getItems } from '@/apis/item';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { Item } from '@/types/item';

import Loading from './Loading';
import ThumbnailCard from './ThumbnailCard';
import styles from './ManualLoadMoreList.module.css';

/**
 * 수동 더보기 리스트 컴포넌트
 *
 * 사용자가 '더보기' 버튼을 클릭하면 다음 페이지의 아이템들을 로드합니다.
 * 자동 로드 기능을 비활성화하고 수동으로 페이지 로드를 제어합니다.
 */
export default function ManualLoadMoreList() {
  const { data, isFetchingNextPage, hasNextPage, triggerNextPage } = useInfiniteScroll<Item>({
    queryKey: ['manualLoadMoreList'],
    queryFn: getItems,
    autoLoad: false,
  });

  return (
    <div className={styles.container}>
      <h2>수동 더보기 목록</h2>
      <ul className={styles.list}>
        {data?.map(item => (
          <ThumbnailCard key={`manual-load-more-${item.id}`} item={item} />
        ))}
      </ul>
      {isFetchingNextPage && <Loading />}
      {!isFetchingNextPage && hasNextPage && (
        <button className={styles.loadMoreButton} onClick={triggerNextPage}>
          더보기
        </button>
      )}
    </div>
  );
}
