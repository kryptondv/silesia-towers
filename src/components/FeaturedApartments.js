import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import getThreeRandomNumbers from '../functions/getThreeRandomNumbers';
import Title from './Title';
import Apartment from './Apartment';

const FeaturedApartments = () => {
  const { apartments } = useContext(GlobalContext);
  const numbers = getThreeRandomNumbers(0, apartments.length - 1);
  let featuredApartments = numbers.map(number => apartments[number]);
  featuredApartments = featuredApartments.map(apartment => (
    <Apartment key={apartment.id} apartment={apartment} />
  ));

  return (
    <section className="featured-apartments">
      <Title title="Przykładowe mieszkania" alter={true} />
      <div className="featured-apartments-container">
        {featuredApartments}
      </div>
        <Link to="/mieszkania" className="btn btn--transparent featured-apartments__btn">
        Zobacz więcej
      </Link>
    </section>
  );
};

export default FeaturedApartments;
