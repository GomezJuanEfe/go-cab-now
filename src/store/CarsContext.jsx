import { createContext, useEffect, useState } from 'react';
import CarFetch from '../services/CarsFetch';

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [carsData, setCarData] = useState([]);

  useEffect(() => {
    // Pregunta:Cómo pordría hacer un manejo de errores?
    CarFetch.fetchAllCars()
      .then((data) => setCarData(data));
  }, []);

  return (
    <CarsContext.Provider
      value={{
        carsData,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
