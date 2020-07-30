import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import getUniqueOptions from '../functions/getUniqueOptions';
import Title from './Title';

const ApartmentFilter = () => {
  const {
    apartments,
    handleChange,
    rooms,
    floor,
    size,
    minSize,
    maxSize,
    price,
    minPrice,
    maxPrice,
    balcony,
  } = useContext(GlobalContext);

  // get unique options JSX for select element
  const roomOptions = getUniqueOptions(apartments, 'rooms');
  const floorOptions = getUniqueOptions(apartments, 'floor');

  return (
    <section className="filter-container">
      <Title title="znajdź mieszkanie" />

      <form className="filter-form">
        {/* rooms */}
        <div className="form-group">
          <label className="form-group__label" htmlFor="rooms">
            Pokoi
          </label>
          <select
            className="form-group__form-control form-group__form-control--select"
            onChange={handleChange}
            value={rooms}
            name="rooms"
            id="rooms"
          >
            {roomOptions}
          </select>
        </div>

        {/* floor */}
        <div className="form-group">
          <label className="form-group__label" htmlFor="floor">
            Piętro
          </label>
          <select
            className="form-group__form-control form-group__form-control--select"
            onChange={handleChange}
            value={floor}
            name="floor"
            id="floor"
          >
            {floorOptions}
          </select>
        </div>

        {/* price */}
        <div className="form-group">
          <label className="form-group__label" htmlFor="price">
            Cena: {price.toLocaleString('pl-PL')} PLN
          </label>
          <input
            className="form-group__form-control"
            type="range"
            value={price}
            onChange={handleChange}
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
          />
        </div>

        {/* size */}
        <div className="form-group">
          <label className="form-group__label" htmlFor="size">
            Pow. {size} m3
          </label>
          <input
            className="form-group__form-control"
            type="range"
            value={size}
            onChange={handleChange}
            name="size"
            id="size"
            min={minSize}
            max={maxSize}
          />
        </div>

        {/* balcony */}
        <div className="form-group form-group--checkbox">
          <input
            type="checkbox"
            checked={balcony}
            onChange={handleChange}
            name="balcony"
            id="balcony"
          />
          <label
            className="form-group__label form-group__label--checkbox"
            htmlFor="balcony"
          >
            Balkon
          </label>
        </div>
      </form>
    </section>
  );
};

export default ApartmentFilter;
