import React from 'react';

import Carousel from '../components/Carousel/Carousel';
import Card from '../components/Card/Card';

import CardList from '../../public/card/CardList';
import { Button } from '../components/Button/Button';

export default function Sobre() {
  return (
    <>
      <Carousel />
      <div className="bg-identity">
        <div className="container mx-auto py-8 ph-8 max-w-4xl">
          <h2 className="py-3.5 text-secondary text-center text-xl">
            {`Portfólio`.toUpperCase()}
          </h2>
          <div className="grid lg:grid-cols-3">
            {CardList.map((card) => {
              return (
                <Card>
                  <h3 className="py-3.5 text-primary card-title">
                    {card.title.toUpperCase()}
                  </h3>
                  <p className="text-secondary card-description">{card.text}</p>
                  <a className="inline-flex card-btn" href={'/portfolio'}>
                    <Button>OUVIR</Button>
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
