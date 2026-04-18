'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import styles from './CamperGallery.module.css';

interface CamperGalleryProps {
  images: string[];
  name: string;
}

export default function CamperGallery({ images, name }: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className={styles.gallery}>
      <Swiper
        loop
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mainSwiper}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className={styles.mainSlide}>
              <Image src={src} alt={`${name} ${i + 1}`} fill className={styles.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop
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
              <Image src={src} alt={`thumb ${i + 1}`} fill className={styles.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}