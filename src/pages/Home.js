import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

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
    </>
  );
};

export default Home;
