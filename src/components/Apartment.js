import React from 'react'
import { Link } from 'react-router-dom';
import defaultImg from '../assets/img/ap-1.jpg';

const Apartment = ({ apartment }) => {
  const { name, slug, images, size } = apartment;

  return (
    <article className="apartment">
      <div className="apartment__img-container">
        <img
          className="apartment__img"
          src={images[0] || defaultImg}
          alt={name}
        />
        <div className="apartment__size-container">
          <h6 className="apartment__size">{size} m3</h6>
        </div>
        <Link to={`/mieszkania/${slug}`} className="btn btn--transparent apartment__btn">
          Zobacz
        </Link>
        <p className="apartment__name">{name}</p>
      </div>
    </article>
  );
}

export default Apartment
