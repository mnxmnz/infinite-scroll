'use client';

import Image from 'next/image';

import { getItems } from '@/apis/item';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { Item } from '@/types/item';

const InfiniteScrollList = () => {
  const { data, isFetchingNextPage, targetRef } = useInfiniteScroll<Item>({
    queryKey: ['/items'],
    queryFn: getItems,
  });

  return (
    <ul>
      {data?.map(item => (
        <li key={item.id}>
          <p>{item.title}</p>
          <Image src={item.imageUrl} alt={item.title} width={100} height={100} />
        </li>
      ))}
      <li ref={targetRef}>{isFetchingNextPage && <p>Loading...</p>}</li>
    </ul>
  );
};

export default InfiniteScrollList;
