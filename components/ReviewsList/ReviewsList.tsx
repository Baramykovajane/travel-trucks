import { Review  } from '@/types/camper';
import StarRating from '@/components/StarRating/StarRating';
import styles from './ReviewsList.module.css';

interface ReviewsListProps {
  reviews: Review [];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <ul className={styles.list}>
      {reviews.map((review, i) => (
        <li key={i} className={styles.item}>
          <div className={styles.header}>
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className={styles.name}>{review.reviewer_name}</p>
              <StarRating rating={review.reviewer_rating} />
            </div>
          </div>
          <p className={styles.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}