'use client';

import Image from 'next/image';

import useInfiniteScroll from '@/hooks/useInfiniteScroll';

interface Item {
  id: number;
  title: string;
  imageUrl: string;
}

const InfiniteScrollExample = () => {
  const getItems = async (offset: number, limit: number): Promise<Item[]> => {
    const response = await fetch(`/api/items?offset=${offset}&limit=${limit}`);
    const data = await response.json();

    return data;
  };

  const { data, isFetchingNextPage, targetRef } = useInfiniteScroll<Item>({
    queryKey: ['/items'],
    queryFn: getItems,
  });

  return (
    <ul>
      {data?.map(item => (
        <li key={item.id}>
          <div>{item.title}</div>
          <Image src={item.imageUrl} alt={item.title} width={100} height={100} />
        </li>
      ))}
      <li ref={targetRef}>{isFetchingNextPage && <div>Loading...</div>}</li>
    </ul>
  );
};

export default InfiniteScrollExample;
