import Image from 'next/image';

import { Item } from '@/types/item';

import styles from './ThumbnailCard.module.css';

interface ThumbnailCardProps {
  item: Item;
}

export default function ThumbnailCard({ item }: ThumbnailCardProps) {
  return (
    <li className={styles.item}>
      <Image src={item.imageUrl} alt={item.title} width={100} height={100} className={styles.image} />
      <p className={styles.title}>{item.title}</p>
    </li>
  );
}
