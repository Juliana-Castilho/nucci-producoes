import CardList from '../../public/card/CardList';
import { Button } from '../components/Button/Button';
import Card from '../components/Card/Card';
import styles from '../components/Card/Card.module.css';
import CardImage from '../components/CardImage/CardImage';
import Carousel from '../components/Carousel/Carousel';

export default function Home() {
  return (
    <>
      <div className="">
        <Carousel />
      </div>
      <div>
        <div className="bg-identity">
          <div className="container mx-auto py-16 ph-8 max-w-4xl">
            <a href={'/portfolio'}>
              <div className="grid lg:grid-cols-3">
                {CardList.map((card) => {
                  return (
                    <Card className={`${styles['card-scale-bg']}`}>
                      <CardImage
                        src={card.img}
                        alt="Portfólio"
                        height={90}
                        width={90}
                      />
                      <h3 className="py-3.5 text-primary card-title">
                        {card.title.toUpperCase()}
                      </h3>
                      <p className="text-secondary card-description">
                        {card.text}
                      </p>
                      <a className="inline-flex card-btn" href={'/portfolio'}>
                        <Button>OUVIR</Button>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
