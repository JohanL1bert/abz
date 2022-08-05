import React from 'react';
import { Card } from 'common/components/Card';

export const CardSection = () => {
  return (
    <section>
      <div className="cards__inner">
        <div className="cards__wrapper">
          <div className="cards__heading__wrapper">
            <h2 className="cards__heading">Working with GET request</h2>
          </div>
          <Card />
          <div className="cards__show">Show more</div>
        </div>
      </div>
    </section>
  );
};
