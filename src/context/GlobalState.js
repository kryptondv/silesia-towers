import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import apartments from '../assets/data/apartments';

const initialState = {
  apartments,
  filteredApartments: apartments,
  rooms: '-',
  floor: '-',
  size: Math.max(...apartments.map(apartment => apartment.size)),
  minSize: Math.min(...apartments.map(apartment => apartment.size)),
  maxSize: Math.max(...apartments.map(apartment => apartment.size)),
  price: Math.max(...apartments.map(apartment => apartment.price)),
  minPrice: Math.min(...apartments.map(apartment => apartment.price)),
  maxPrice: Math.max(...apartments.map(apartment => apartment.price)),
  balcony: false,
};

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const handleChange = ({ target }) => {
    dispatch({
      type: 'CHANGE_FILTER_VALUE',
      payload: target,
    });

    dispatch({
      type:  'FILTER_ROOMS'
    })
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        handleChange
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
