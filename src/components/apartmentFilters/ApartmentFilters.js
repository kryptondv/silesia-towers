import React, { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import getUniqueOptions from '../../utils/getUniqueOptions';
import Title from '../title/Title';
import Filter from './filter/Filter';
import Checkbox from './filter/Checkbox';

const ApartmentFilter = () => {
  const {
    apartments,
    rooms,
    floor,
    size,
    minSize,
    maxSize,
    price,
    minPrice,
    maxPrice,
  } = useContext(GlobalContext);

  // get unique options JSX for select element
  const roomOptions = getUniqueOptions(apartments, 'rooms');
  const floorOptions = getUniqueOptions(apartments, 'floor');

  return (
    <section className="filter-container">
      <Title title="znajdź mieszkanie" />

      <form className="filter-form">
        {/* rooms */}
        <Filter
          tag="select"
          label="Pokoi"
          name="rooms"
          value={rooms}
          addClass="form-group__form-control--select"
        >
          {roomOptions}
        </Filter>

        {/* floor */}
        <Filter
          tag="select"
          label="Piętro"
          name="floor"
          value={floor}
          addClass="form-group__form-control--select"
        >
          {floorOptions}
        </Filter>

        {/* price */}
        <Filter
          tag="input"
          label={`Cena: ${price.toLocaleString('pl-PL')} PLN`}
          name="price"
          value={price}
          type="range"
          min={minPrice}
          max={maxPrice}
        />

        {/* size */}
        <Filter
          tag="input"
          label={`Pow: ${size} m3`}
          name="size"
          value={size}
          type="range"
          min={minSize}
          max={maxSize}
        />
        {/* balcony */}
        <Checkbox />
       
      </form>
    </section>
  );
};

export default ApartmentFilter;
