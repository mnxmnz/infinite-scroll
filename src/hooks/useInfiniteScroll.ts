import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';

import { useInView } from 'react-intersection-observer';

interface InfiniteScrollOptions<T> {
  queryKey: QueryKey;
  queryFn: (pageParam: number, pageSize: number) => Promise<T[]>;
  limit?: number;
  autoLoad?: boolean;
}

const useInfiniteScroll = <T>({ queryKey, queryFn, limit = 20, autoLoad = true }: InfiniteScrollOptions<T>) => {
  const { ref: targetRef, inView: isTargetVisible } = useInView({
    onChange: inView => {
      if (autoLoad && inView && hasNextPage && !isFetchingNextPage && !isError) {
        fetchNextPage();
      }
    },
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 0 }) => queryFn(pageParam, limit),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = lastPage.length < limit;
      const nextPageParam = allPages.length * limit;

      return isLastPage ? null : nextPageParam;
    },
    select: ({ pages }) => pages.flat(),
  });

  const onClickLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return {
    targetRef,
    isTargetVisible,
    data,
    isFetchingNextPage,
    hasNextPage,
    onClickLoadMore,
  };
};

export default useInfiniteScroll;
