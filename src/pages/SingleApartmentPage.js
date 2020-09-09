import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/context';
import Hero from '../components/Hero';
import Banner from '../components/banner/Banner';
import Modal from '../components/Modal';
import SingleApartment from '../components/singleApartment/SingleApartment';

const SingleApartmentPage = ({ match }) => {
  const slug = match.params.slug;
  const { apartments } = useContext(GlobalContext);
  const apartment = apartments.find(apartment => apartment.slug === slug);
  const { name, images } = apartment;
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
      <SingleApartment apartment={apartment} onImgClick={onImgClick} />
    </>
  );
};

export default SingleApartmentPage;
