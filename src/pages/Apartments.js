import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';


const Apartments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero page="apartments">
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
