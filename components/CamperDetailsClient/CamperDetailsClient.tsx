'use client';

import { useCamper } from '@/lib/hooks/useCamper';
import { useReviews } from '@/lib/hooks/useReviews';
import CamperGallery from '@/components/CamperGallery/CamperGallery';
import CamperInfo from '@/components/CamperInfo/CamperInfo';
import ReviewsList from '@/components/ReviewsList/ReviewsList';
import BookingForm from '@/components/BookingForm/BookingForm';
import styles from './CamperDetailsClient.module.css';

interface Props {
  id: string;
}

export default function CamperDetailsClient({ id }: Props) {
  const { data: camper, isLoading, isError } = useCamper(id);
  const { data: reviews = [] } = useReviews(id);

  if (isLoading) return <p className={styles.message}>Loading...</p>;
  if (isError || !camper) return <p className={styles.message}>Camper not found.</p>;

  const images = camper.gallery
    .sort((a, b) => a.order - b.order)
    .map((item) => item.original);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <CamperGallery images={images} name={camper.name} />
        <CamperInfo camper={camper} />
      </div>

      <div className={styles.bottom}>
  <div className={styles.reviews}>
    <h2 className={styles.reviewsTitle}>Reviews</h2>
    <div className={styles.reviewsBox}>
      <ReviewsList reviews={reviews} />
    </div>
  </div>
  <BookingForm camperId={id} />
</div>
    </div>
  );
}