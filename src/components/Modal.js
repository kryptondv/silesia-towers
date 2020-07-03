import React, { useRef } from 'react';

const Modal = ({ images, mainImg, setMainImg, setModalOpen }) => {
  const ref = useRef();

  const onModalClick = e => {
    if (e.target === ref.current) {
      setModalOpen(false);
    }
  };

  return (
    <div ref={ref} className="modal" onClick={onModalClick}>
      <img className="modal__main-image" src={mainImg} alt="" />
      <div className="modal__images">
        {images.map((item, index) => (
          <img
            className={`modal__image ${mainImg === item && 'modal__image--selected'}`}
            onClick={() => setMainImg(item)}
            key={index}
            src={item}
            alt="apartment"
          />
        ))}
      </div>
      <button onClick={() => setModalOpen(false)} className="btn modal__btn">
        Zamknij
      </button>
    </div>
  );
};

export default Modal;
