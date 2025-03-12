import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './ThumbnailCard.module.css';

export default function ThumbnailCardSkeleton() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <li className={styles.item} key={`skeleton-${index}`}>
          <div className={styles.imageWrapper}>
            <Skeleton height="100%" />
          </div>
          <div className={styles.title}>
            <Skeleton />
          </div>
        </li>
      ))}
    </>
  );
}
