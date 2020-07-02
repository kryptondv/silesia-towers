import React from 'react';

const Title = ({ title, alter }) => {
  return (
    <div className="section-title">
      <h2 className="section-title__title">{title}</h2>
      <div className={`section-title__separator ${alter && 'section-title__separator--alternate'}`}/>
    </div>
  );
};

export default Title;
