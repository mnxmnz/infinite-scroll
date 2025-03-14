import Image from 'next/image';
import { useState } from 'react';
import SkeletonComponent from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Product } from '@/types/product';

import styles from '@/components/product/ProductItem/styles.module.css';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <li className={styles.item}>
      <div className={styles.imageWrapper}>
        {imageLoading && (
          <div className={styles.skeletonWrapper}>
            <SkeletonComponent height="100%" />
          </div>
        )}
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className={styles.image}
          loading="lazy"
          onLoadingComplete={() => setImageLoading(false)}
        />
      </div>
      <p className={styles.title}>{product.title}</p>
    </li>
  );
}
