import React, { useContext } from 'react';
import { GlobalContext } from '../../context/context';
import Apartment from '../apartment/Apartment';

const ApartmentList = () => {
  const { filteredApartments } = useContext(GlobalContext);
  if (filteredApartments.length === 0) {
    return (
      <div className="empty-search">
        <h3 className="empty-search__title">
          Żadne mieszkania nie spełniają podanych kryteriów
        </h3>
      </div>
    );
  }
  return (
    <section className="apartment-list">
      <div className="apartment-list-container">
        {filteredApartments.map(apartment => (
          <Apartment key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </section>
  );
};

export default ApartmentList;
