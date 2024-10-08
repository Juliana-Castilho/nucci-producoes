import { useEffect, useState } from 'react';
import Image from 'next/image';

import { CarouselItems } from './CarouselItems';

import styles from './Carousel.module.css';

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const carouselItem = [...CarouselItems];

  function loop(count: number) {
    if (count == carouselItem.length) {
      return (count = 0);
    }
    if (count < 0) {
      return (count = carouselItem.length - 1);
    }
    return count;
  }

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((count) => loop(count + 1)),
      3000
    );
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <button
          className={`${styles.prev} ${styles.button}`}
          onClick={() => setIndex((count) => loop(count - 1))}
        >
          <Image
            src="/carousel/images/prev-icon.svg"
            alt="Scroll prev"
            height={25}
            width={25}
          />
        </button>
        <button
          className={`${styles.next} ${styles.button}`}
          onClick={() => setIndex((count) => loop(count + 1))}
        >
          <Image
            src="/carousel/images/next-icon.svg"
            alt="Scroll next"
            height={25}
            width={25}
          />
        </button>

        <div className={styles.info}>
          <span className={styles.title}>{carouselItem[index].title}</span>
          <span className={styles.subtitle}>
            {carouselItem[index].subtitle}
          </span>
        </div>
        <Image
          src={carouselItem[index].image}
          layout="fill"
          objectFit="cover"
          alt="banner"
        />
      </div>
    </div>
  );
}
