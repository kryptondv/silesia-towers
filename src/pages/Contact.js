import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';


const Contact = () => {
  return (
    <>
      <Hero bg="main">
        <Banner subtitle="Kontakt">
          <div className="contact">
            <a className="contact__item" href="tel:5551234567">
              <FaPhoneAlt className="contact__icon" /> +48 123 123 123
            </a>
            <a className="contact__item" href="mailto: kryptondevpl@gmail.com">
              <FaRegEnvelope className="contact__icon" />
              kryptondevpl@gmail.com
            </a>
          </div>
          
        </Banner>
      </Hero>
    </>
  );
}

export default Contact
