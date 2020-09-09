import React, { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import { Link } from 'react-router-dom';
import getThreeUniqueRandomNumbers from '../../utils/getThreeUniqueRandomNumbers';
import Title from '../Title';
import Apartment from '../apartment/Apartment';

const FeaturedApartments = () => {
  const { apartments } = useContext(GlobalContext);
  
  // select 3 random apartments for the featured section
  const numbers = getThreeUniqueRandomNumbers(0, apartments.length - 1);
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
