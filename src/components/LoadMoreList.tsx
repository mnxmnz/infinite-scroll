'use client';

import Image from 'next/image';

import { getItems } from '@/apis/item';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { Item } from '@/types/item';

const LoadMoreList = () => {
  const { data, isFetchingNextPage, hasNextPage, onClickLoadMore } = useInfiniteScroll<Item>({
    queryKey: ['/items'],
    queryFn: getItems,
    autoLoad: false,
  });

  return (
    <ul>
      {data?.map(item => (
        <li key={item.id}>
          <p>{item.title}</p>
          <Image src={item.imageUrl} alt={item.title} width={100} height={100} />
        </li>
      ))}
      {isFetchingNextPage && <div>Loading...</div>}
      {!isFetchingNextPage && hasNextPage && <button onClick={onClickLoadMore}>더보기</button>}
    </ul>
  );
};

export default LoadMoreList;
