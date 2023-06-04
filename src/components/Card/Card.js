import CardList from '../../../public/card/CardList';
import React from 'react';
import { Button } from '../Button/Button';

export default function Card() {
  return (
    <div className="bg-identity">
      <div className="container mx-auto py-16 ph-8 max-w-4xl">
        <div className="grid lg:grid-cols-3">
          {CardList.map((card) => {
            return (
              <div className="mx-auto mr-3 ml-3 px-3.5 py-3.5 rounded-md bg-black/50 mb-5 border-4 border-black/30">
                <img
                  className="rounded-full mb-5 border-4 border-black/30"
                  src={card.img}
                  alt="Portifólio"
                  height={90}
                  width={90}
                />
                <h3 className="py-3.5 text-primary">
                  {card.title.toUpperCase()}
                </h3>
                <p className="text-secondary">{card.text}</p>
                <Button>SAIBA MAIS</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
