import React from 'react';
    import { Card } from 'antd';

    const { Meta } = Card;

    const cards = [
      { title: 'Card 1', description: 'This is card 1' },
      { title: 'Card 2', description: 'This is card 2' },
      { title: 'Card 3', description: 'This is card 3' },
    ];

    const CardGrid: React.FC = () => {
      return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <Card key={index} hoverable cover={<img alt="example" src={`https://picsum.photos/200/200?random=${index}`} />}>
              <Meta title={card.title} description={card.description} />
            </Card>
          ))}
        </div>
      );
    };

    export default CardGrid;
