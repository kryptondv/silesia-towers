import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Features from '../components/Features';
import FeaturedApartments from '../components/FeaturedApartments';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero page="main">
        <Banner
          title="Silesia Towers"
          subtitle="Przystań w sercu miasta"
        >
          <Link to="/mieszkania" className="btn btn--white">
            Zobacz mieszkania
          </Link>
        </Banner>
      </Hero>
      <Features />
      <FeaturedApartments />
    </>
  );
};

export default Home;
