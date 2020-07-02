import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Features from '../components//Features';

const Home = () => {
  return (
    <>
      <Hero bg="main">
        <Banner
          title="Silesia Towers"
          subtitle="Przystań w sercu miasta"
        >
          <Link to="/mieszkania" className="btn">
            Zobacz mieszkania
          </Link>
        </Banner>
      </Hero>
      <Features />
    </>
  );
};

export default Home;
