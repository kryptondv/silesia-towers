import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import apartments from '../assets/data/apartments';

const initialState = {
  apartments
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  

  return (
    <GlobalContext.Provider value={{
      apartments: state.apartments,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};