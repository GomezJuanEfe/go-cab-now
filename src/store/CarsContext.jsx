import { createContext, useEffect, useState } from 'react';
import CarFetch from '../services/CarsFetch';

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [carsData, setCarData] = useState([]);

  useEffect(() => {
    CarFetch.getAllCars()
      .then((data) => {
        setCarData(data);
        return data;
      })
      .then((data) => console.log(data));
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
