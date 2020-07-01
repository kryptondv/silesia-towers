import React from 'react';

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <div className="banner__separator"></div>
      <p className="banner__subtitle">{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
