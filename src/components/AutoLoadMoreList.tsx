'use client';

import { getItems } from '@/apis/item';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { Item } from '@/types/item';

import Loading from './Loading';
import ThumbnailCard from './ThumbnailCard';
import styles from './AutoLoadMoreList.module.css';

/**
 * 자동 무한 스크롤 리스트 컴포넌트
 *
 * 스크롤이 하단에 도달하면 자동으로 다음 페이지의 아이템을 로드합니다.
 * Intersection Observer 를 사용하여 스크롤 감지를 구현했습니다.
 */
export default function AutoLoadMoreList() {
  const { data, isFetchingNextPage, targetRef } = useInfiniteScroll<Item>({
    queryKey: ['autoLoadMoreList'],
    queryFn: getItems,
  });

  return (
    <div className={styles.container}>
      <h2>자동 스크롤 목록</h2>
      <ul className={styles.list}>
        {data?.map(item => (
          <ThumbnailCard key={`auto-load-more-${item.id}`} item={item} />
        ))}
      </ul>
      <div ref={targetRef}>{isFetchingNextPage && <Loading />}</div>
    </div>
  );
}
