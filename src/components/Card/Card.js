import CardList from '../../../public/card/CardList';
import React from 'react';
import { Button } from '../Button/Button';

import styles from './Card.module.css';
import Link from 'next/dist/client/link';

export default function Card() {
  return (
    <div className="bg-identity">
      <div className="container mx-auto py-16 ph-8 max-w-4xl">
        <div className="grid lg:grid-cols-3">
          {CardList.map((card) => {
            return (
              <div className="mx-auto text-center mr-3 ml-3 px-3.5 py-3.5 rounded-md bg-black/50 mt-12 mb-16 lg:mb-0 border-4 border-black/30">
                <div className={`inline-flex ${styles.portfolioImage}`}>
                  <img
                    className="rounded-full mb-5 border-4 border-black/30"
                    src={card.img}
                    alt="Portifólio"
                    height={90}
                    width={90}
                  />
                </div>
                <div>
                  <h3 className="py-3.5 text-primary">
                    {card.title.toUpperCase()}
                  </h3>
                  <p className="text-secondary">{card.text}</p>
                </div>
                <div className="inline-flex">
                  <a href={card.link}>
                    <Button>OUVIR</Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
