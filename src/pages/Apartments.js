import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';


const Apartments = () => {
  return (
    <>
      <Hero bg="apartments">
        <Banner title="Oferta" subtitle="Wybierz swoje mieszkanie">
          <Link to="/" className="btn">
            Powrót do strony głównej
          </Link>
        </Banner>
      </Hero>
    </>
  );
}

export default Apartments
