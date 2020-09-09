import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/banner/Banner';
import Features from '../components/features/Features';
import FeaturedApartments from '../components/featuredApartments/FeaturedApartments';

const HomePage = () => {
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

export default HomePage;
