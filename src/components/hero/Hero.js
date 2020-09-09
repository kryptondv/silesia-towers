import React from 'react';

const Hero = ({ page, children, customBg }) => {
  return (
    <header 
      className={`hero hero--${page}`} 
      style={customBg && {background: `url('${customBg}') center/cover no-repeat`}}>
      {children}
    </header>
  );
};

export default Hero;
