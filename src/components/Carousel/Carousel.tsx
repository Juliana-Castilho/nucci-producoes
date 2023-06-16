import Image from 'next/dist/client/image';
import styles from './Carousel.module.css';
import { useEffect, useState } from 'react';
import { CarouselItems } from './CarouselItems';

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
          <img
            src="http://localhost:3000/carousel/images/prev-icon.svg"
            alt="Scroll prev"
          />
        </button>
        <button
          className={`${styles.next} ${styles.button}`}
          onClick={() => setIndex((count) => loop(count + 1))}
        >
          <img
            src="http://localhost:3000/carousel/images/next-icon.svg"
            alt="Scroll next"
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
