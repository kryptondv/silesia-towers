import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
  return (
    <>
      <Hero bg="main">
        <Banner title="404" subtitle="Nie znaleziono strony">
          <Link to="/" className="btn">
            Powrót do strony głównej
          </Link>
        </Banner>
      </Hero>
    </>
  );
}

export default Error
