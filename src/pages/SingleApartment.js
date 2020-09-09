import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/context';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Modal from '../components/Modal';

const SingleApartment = ({ match }) => {
  const slug = match.params.slug;
  const { apartments } = useContext(GlobalContext);
  const apartment = apartments.find(apartment => apartment.slug === slug);
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
  const [mainImg, setMainImg] = useState(images[0]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onImgClick = image => {
    setMainImg(image);
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen && (
        <Modal
          images={images}
          mainImg={mainImg}
          setMainImg={setMainImg}
          setModalOpen={setModalOpen}
        />
      )}
      <Hero page="single-apartment" customBg={images[0]}>
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
              onClick={() => onImgClick(item)}
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
            <p className="details__text">pokoje: {rooms}</p>
            <p className="details__text">balkon: {balcony ? 'tak' : 'nie'}</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default SingleApartment;
