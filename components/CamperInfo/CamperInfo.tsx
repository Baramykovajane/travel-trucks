import { CamperDetails } from '@/types/camper';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import styles from './CamperInfo.module.css';

interface CamperInfoProps {
  camper: CamperDetails;
}

export default function CamperInfo({ camper }: CamperInfoProps) {
  const amenities = Array.isArray(camper.amenities)
    ? camper.amenities
    : [camper.amenities];

  return (
  <div className={styles.info}>
    {/* Картка 1 — назва, рейтинг, ціна, опис */}
    <div className={styles.card}>
      <h1 className={styles.name}>{camper.name}</h1>
      <div className={styles.meta}>
        <span className={styles.rating}>
          <FaStar className={styles.starIcon} />
          {camper.rating} ({camper.totalReviews} Reviews)
        </span>
        <span className={styles.location}>
          <FaMapMarkerAlt />
          {camper.location}
        </span>
      </div>
      <p className={styles.price}>€{camper.price.toFixed(2)}</p>
      <p className={styles.description}>{camper.description}</p>
    </div>

    {/* Картка 2 — Vehicle details */}
    <div className={styles.card}>
      <h2 className={styles.vehicleTitle}>Vehicle details</h2>
      <div className={styles.amenities}>
        <span className={styles.amenity}>{camper.transmission}</span>
        <span className={styles.amenity}>{camper.engine}</span>
        <span className={styles.amenity}>{camper.form}</span>
        {amenities.map((amenity) => (
          <span key={amenity} className={styles.amenity}>
            {amenity}
          </span>
        ))}
      </div>
      <div className={styles.specs}>
        <div className={styles.specRow}>
          <span className={styles.specLabel}>Form</span>
          <span className={styles.specValue}>{camper.form}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specLabel}>Length</span>
          <span className={styles.specValue}>{camper.length}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specLabel}>Width</span>
          <span className={styles.specValue}>{camper.width}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specLabel}>Height</span>
          <span className={styles.specValue}>{camper.height}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specLabel}>Tank</span>
          <span className={styles.specValue}>{camper.tank}</span>
        </div>
        <div className={styles.specRow}>
          <span className={styles.specLabel}>Consumption</span>
          <span className={styles.specValue}>{camper.consumption}</span>
        </div>
      </div>
    </div>
  </div>
);
}