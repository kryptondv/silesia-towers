import React, { useState } from 'react'
import logo from '../assets/img/logo.png';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar__header">
          <Link to="/">
            <img
              className="navbar__logo"
              src={logo}
              alt="logo"
              onClick={() => setIsOpen(false)}
            />
          </Link>
          <button className="navbar__nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul
          className={`navbar__nav-list ${isOpen && 'navbar__nav-list--show-nav'}`}
        >
          <li onClick={() => setIsOpen(false)}>
            <Link className="navbar__nav-link" to="/">
              Home
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link className="navbar__nav-link" to="/mieszkania">
              Mieszkania
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
