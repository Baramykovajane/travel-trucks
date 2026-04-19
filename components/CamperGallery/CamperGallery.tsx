'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import styles from './CamperGallery.module.css';

type CamperGalleryProps = {
  images: string[];
  name: string;
};

export default function CamperGallery({ images, name }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={styles.gallery}>
      <Swiper
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mainSwiper}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className={styles.mainSlide}>
              <Image
                src={src}
                alt={`${name} ${i + 1}`}
                fill
                sizes="(min-width: 1440px) 600px, 50vw"
                className={styles.image}
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.thumbSwiper}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className={styles.thumb}>
              <Image
  src={src}
  alt={`${name} ${i + 1}`}
  fill
  sizes="(min-width: 1440px) 600px, 50vw"
  className={styles.image}
  priority={i === 0}
/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}