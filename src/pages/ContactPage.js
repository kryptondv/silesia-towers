import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner/Banner';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';


const ContactPage = ({history}) => {
  return (
    <>
      <Hero page="contact">
        <Banner subtitle="Kontakt">
          <div className="contact">
            <a className="contact__item" href="tel:5551234567">
              <FaPhoneAlt className="contact__icon" /> +48 123 123 123
            </a>
            <a className="contact__item" href="mailto: kryptondevpl@gmail.com">
              <FaRegEnvelope className="contact__icon" />
              kryptondevpl@gmail.com
            </a>
          <button className="btn contact__btn" onClick={history.goBack}>Powrót</button>
          </div>
        </Banner>
      </Hero>
    </>
  );
}

export default ContactPage;
