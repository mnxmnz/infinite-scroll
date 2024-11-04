import { QueryKey, useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteScrollOptions<T> {
  queryKey: QueryKey;
  queryFn: (pageParam: number, pageSize: number) => Promise<T[]>;
  pageSize?: number;
}

const useInfiniteScroll = <T>({ queryKey, queryFn, pageSize = 20 }: InfiniteScrollOptions<T>) => {
  const { ref: targetRef, inView: isTargetVisible } = useInView();

  const defaultPageParam = 0;
  const currentPageSize = pageSize;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = defaultPageParam }) => queryFn(pageParam, currentPageSize),
    initialPageParam: defaultPageParam,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = lastPage.length < currentPageSize;
      const nextPageParam = allPages.length * currentPageSize;

      return isLastPage ? null : nextPageParam;
    },
    select: ({ pages }) => pages.flat(),
  });

  useEffect(() => {
    if (isTargetVisible && hasNextPage && !isError) {
      fetchNextPage();
    }
  }, [isTargetVisible, hasNextPage, fetchNextPage, isError]);

  return {
    targetRef,
    data,
    isFetchingNextPage,
  };
};

export default useInfiniteScroll;
