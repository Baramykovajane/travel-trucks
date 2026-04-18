import Image from 'next/image';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { GiGearStickPattern } from 'react-icons/gi';
import { BsFuelPump } from 'react-icons/bs';
import { MdOutlineDirectionsBus } from 'react-icons/md';
import { Camper } from '@/types/camper';
import styles from './CamperCard.module.css';

interface Props {
  camper: Camper;
}

export default function CamperCard({ camper }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={camper.coverImage || '/placeholder.jpg'}
          alt={camper.name}
          fill
          sizes="(min-width: 1440px) 290px, 50vw"
          className={styles.image}
          priority
        />
      </div>

      <div className={styles.info}>
        <div className={styles.top}>
          <h2 className={styles.name}>{camper.name}</h2>
          <span className={styles.price}>€{camper.price.toFixed(2)}</span>
        </div>

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

        <div className={styles.features}>
          <span className={styles.feature}>
            <GiGearStickPattern /> {camper.transmission}
          </span>
          <span className={styles.feature}>
            <BsFuelPump /> {camper.engine}
          </span>
          <span className={styles.feature}>
            <MdOutlineDirectionsBus /> {camper.form}
          </span>
          {camper.amenities.map((amenity) => (
            <span key={amenity} className={styles.feature}>
              {amenity}
            </span>
          ))}
        </div>

        <a
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Show more
        </a>
      </div>
    </div>
  );
}