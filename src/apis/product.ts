import { Product } from '@/types/product';

export const getProducts = async (offset: number, limit: number): Promise<Product[]> => {
  const response = await fetch(`/api/products?offset=${offset}&limit=${limit}`);
  const data = await response.json();

  return data;
};
