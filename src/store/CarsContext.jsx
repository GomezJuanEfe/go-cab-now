import { createContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { fetcher } from '../services/fetcher';
import { mockInstance } from '../services/axios';

// const baseURL = import.meta.env.VITE_BASE_URL;

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [carPageIndex, setCarPageIndex] = useState(1);
  const { data: carsData, error: carsError, isLoading: carsIsLoading } = useSWR(`/cars?page=${carPageIndex}`, fetcher);
  // const [carPage, setCarPage] = useState(1);

  // useEffect(() => {
  //   if (carsData.info.pages) setCarPage(carsData.info.pages);
  //   console.log(carPage);
  // }, [carsData]);

  // const handleCarPage = () => {

  // };

  console.log(carsData);

  return (
    <CarsContext.Provider
      value={{
        carsData,
        carsError,
        carsIsLoading,
        carPageIndex,
        setCarPageIndex,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
