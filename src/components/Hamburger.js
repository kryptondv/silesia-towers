import React from 'react';

const Hamburger = ({ handleToggle, isOpen }) => {
  return (
    <button
      className={`hamburger ${isOpen && 'hamburger--clicked'}`}
      onClick={handleToggle}
    >
      <div className="hamburger__bars">
        <div className="hamburger__bar hamburger__bar--top"></div>
        <div className="hamburger__bar hamburger__bar--mid"></div>
        <div className="hamburger__bar hamburger__bar--bottom"></div>
      </div>
    </button>
  );
};

export default Hamburger;
