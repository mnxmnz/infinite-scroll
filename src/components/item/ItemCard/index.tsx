import Image from 'next/image';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Item } from '@/types/item';

import styles from './ItemCard.module.css';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <li className={styles.item}>
      <div className={styles.imageWrapper}>
        {imageLoading && (
          <div className={styles.skeletonWrapper}>
            <Skeleton height="100%" />
          </div>
        )}
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className={styles.image}
          loading="lazy"
          onLoadingComplete={() => setImageLoading(false)}
        />
      </div>
      <p className={styles.title}>{item.title}</p>
    </li>
  );
}
