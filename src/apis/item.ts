import { Item } from '@/types/item';

export const getItems = async (offset: number, limit: number): Promise<Item[]> => {
  const response = await fetch(`/api/items?offset=${offset}&limit=${limit}`);
  const data = await response.json();

  return data;
};
