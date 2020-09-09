import React from 'react';
import Title from '../title/Title';
import features from '../../assets/data/features';

const Features = () => {

  return (
    <section className="features">
      <Title title="Zamieszkaj w centrum Katowic" />
      <div className="features-container">
        {features.map(feature => (
          <article key={feature.id} className="feature">
            <span className="feature__icon">{feature.icon}</span>
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__info">{feature.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
