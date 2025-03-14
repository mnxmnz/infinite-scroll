import SkeletonComponent from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from '@/components/product/ProductItem/styles.module.css';

export default function Skeleton() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <li className={styles.item} key={index}>
          <div className={styles.imageWrapper}>
            <div className={styles.skeletonWrapper}>
              <SkeletonComponent height="100%" />
            </div>
          </div>
          <SkeletonComponent width="80%" />
        </li>
      ))}
    </>
  );
}
