import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';

const ErrorPage = () => {
  return (
    <>
      <Hero page="main">
        <Banner title="404" subtitle="Nie znaleziono strony">
          <Link to="/" className="btn">
            Powrót do strony głównej
          </Link>
        </Banner>
      </Hero>
    </>
  );
}

export default ErrorPage;
