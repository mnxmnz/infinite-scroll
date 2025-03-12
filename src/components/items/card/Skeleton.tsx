import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '@/components/items/card/styles.module.css';

export default function ItemCardSkeleton() {
  return (
    <li className={styles.item}>
      <div className={styles.imageWrapper}>
        <div className={styles.skeletonWrapper}>
          <Skeleton height="100%" />
        </div>
      </div>
      <Skeleton width="80%" />
    </li>
  );
}
