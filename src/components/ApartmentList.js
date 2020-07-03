import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Apartment from './Apartment';

const ApartmentList = () => {
  const { filteredApartments } = useContext(GlobalContext);
  if (filteredApartments.length === 0) {
    return (
      <div className="empty-search">
        <h3>Żadne mieszkania nie spełniają podanych kryteriów</h3>
      </div>
    );
  }
  return (
    <section className="apartament-list">
      <div className="apartament-list-container">
        {filteredApartments.map(apartment => (
          <Apartment key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </section>
  );
};

export default ApartmentList;
