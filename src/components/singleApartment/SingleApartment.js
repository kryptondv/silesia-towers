import React from 'react'

const SingleApartment = ({ apartment, onImgClick }) => {
  const {
    name,
    floor,
    rooms,
    price,
    size,
    balcony,
    images,
    description,
  } = apartment;

  return (
    <section className="single-apartment">
      <div className="single-apartment__images">
        {images.map((item, index) => (
          <img
            className="single-apartment__image"
            onClick={() => onImgClick(item)}
            key={index}
            src={item}
            alt={`${name} - wnętrze ${index + 1}`}
          />
        ))}
      </div>
      <div className="single-apartment__info">
        <article className="description">
          <h3 className="description__title">Opis</h3>
          <p className="description__text">{description}</p>
        </article>
        <article className="details">
          <h3 className="details__title">Szczegóły</h3>
          <p className="details__text">
            cena:
            <span className="details__price">
              {price.toLocaleString('pl-PL')}
            </span>
            PLN
          </p>
          <p className="details__text">pow. {size}m3</p>
          <p className="details__text">piętro: {floor}</p>
          <p className="details__text">pokoje: {rooms}</p>
          <p className="details__text">balkon: {balcony ? 'tak' : 'nie'}</p>
        </article>
      </div>
    </section>
  );
}

export default SingleApartment;
