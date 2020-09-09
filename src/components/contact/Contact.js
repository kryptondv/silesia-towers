import React from 'react';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

const Contact = ({ history }) => {
  return (
    <section className="contact">
      <a className="contact__item" href="tel:5551234567">
        <FaPhoneAlt className="contact__icon" /> +48 123 123 123
      </a>
      <a className="contact__item" href="mailto: kryptondevpl@gmail.com">
        <FaRegEnvelope className="contact__icon" />
        kryptondevpl@gmail.com
      </a>
      <button className="btn contact__btn" onClick={history.goBack}>
        Powrót
      </button>
    </section>
  );
};

export default Contact;
