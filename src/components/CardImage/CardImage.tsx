import React from 'react';
import Image from 'next/dist/client/image';
import styles from './CardImage.module.css';

export type TCardImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function CardImage({ src, alt, width, height }: TCardImage) {
  return (
    <div
      className={`inline-flex ${styles.cardImage} rounded-full mb-2 border-4 border-black/30 card-img`}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
