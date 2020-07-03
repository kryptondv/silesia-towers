import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

const Footer = () => {

  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className="main-footer">
      <p className="main-footer__text">&copy; 2020 Silesia Towers</p>
      <button className="main-footer__back-to-top"onClick={backToTop}>
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
