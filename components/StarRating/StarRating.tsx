import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './StarRating.module.css';

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return <FaStar key={star} className={styles.filled} />;
        } else if (rating >= star - 0.5) {
          return <FaStarHalfAlt key={star} className={styles.filled} />;
        }
        return <FaRegStar key={star} className={styles.empty} />;
      })}
    </div>
  );
}