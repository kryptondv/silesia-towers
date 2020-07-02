import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const SingleApartment = ({ match }) => {
  const slug = match.params.slug;
  const { apartments } = useContext(GlobalContext);
  const apartment = apartments.find(apartment => apartment.slug === slug);
  const { name, floor, price, size, balcony, images, description } = apartment;
  const [mainImg, setMainImg] = useState(images[0])

  return (
    <>
      <Hero page="single-apartment" customBg={mainImg}>
        <Banner title={name} size="small">
          <Link to="/mieszkania" className="btn">
            Wszystkie mieszkania
          </Link>
        </Banner>
      </Hero>
      <section className="single-apartment">
        <div className="single-apartment__images">
          {images.map((item, index) => (
            <img
              className="single-apartment__image"
              onClick={() => setMainImg(item)}
              key={index}
              src={item}
              alt={name}
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
            <p className="details__text">Balkon: {balcony ? 'Tak' : 'Nie'}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default SingleApartment;
