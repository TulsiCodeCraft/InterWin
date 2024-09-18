import React from 'react';
import Card from '../../components/card';
import cardsData from '../../lib/dummyData'

const CardList = () => {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-20">
        <div className="flex flex-wrap -m-4">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              category={card.category}
              name={card.name}
              desc={card.desc}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList;
