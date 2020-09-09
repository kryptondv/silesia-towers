import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ApartmentFilter from '../components/apartmentFilters/ApartmentFilters';
import ApartmentList from '../components/apartmentList/ApartmentList';


const ApartmentsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero page="apartments">
        <Banner title="oferta">
          <Link to="/" className="btn">
            Powrót do strony głównej
          </Link>
        </Banner>
      </Hero>
      <ApartmentFilter />
      <ApartmentList />
    </>
  );
}

export default ApartmentsPage;
