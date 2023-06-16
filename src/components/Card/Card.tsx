import React from 'react';
import styles from './Card.module.css';

export interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardBox({ children }: ICardProps) {
  return (
    <div
      className={`mx-auto text-center mr-3 ml-3 px-3.5 py-3.5 rounded-md bg-black/50 mt-8 mb-8 lg:mb-0 border-4 border-black/30 ${styles['card-box']}`}
    >
      {children}
    </div>
  );
}
