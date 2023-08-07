import { createContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { fetcher } from '../services/fetcher';
import { mockInstance } from '../services/axios';

// const baseURL = import.meta.env.VITE_BASE_URL;

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const { data: carsData, error: carsError, isLoading: carsIsLoading } = useSWR('/cars', fetcher);

  return (
    <CarsContext.Provider
      value={{
        carsData,
        carsError,
        carsIsLoading,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
