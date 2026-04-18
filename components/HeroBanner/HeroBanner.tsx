import Link from 'next/link';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.wrap}>
        <picture className={styles.bgPicture}>
          <source type="image/webp" srcSet="/images/hero/hero.webp" />
          <img
            className={styles.bgImage}
            src="/images/hero/hero.jpg"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
          />
        </picture>

        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.inner}>
          <h1 id="hero-heading" className={styles.title}>
            Campers of your dreams
          </h1>
          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>
          <Link href="/catalog" className={styles.button}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;