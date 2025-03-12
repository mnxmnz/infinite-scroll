import { QueryKey } from '@tanstack/react-query';

import ItemCard from '@/components/items/card';
import ItemCardSkeleton from '@/components/items/card/Skeleton';
import { Item } from '@/types/item';

interface ListContentProps {
  isLoading: boolean;
  data: Item[] | undefined;
  queryKey: QueryKey;
}

export default function ListContent({ isLoading, data, queryKey }: ListContentProps) {
  if (isLoading) {
    return <ItemCardSkeleton />;
  }

  return data?.map(item => <ItemCard key={`${queryKey}-${item.id}`} item={item} />);
}
