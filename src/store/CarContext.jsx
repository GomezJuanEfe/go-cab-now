import axios from 'axios';
import useSWR from 'swr';
import { createContext } from 'react';

/* UTILS */
const fetcher = (url) => axios.get(url).then((res) => res.data);
const URL = import.meta.env.VITE_API_URL;
/* /UTILS */

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const { data, error, isLoading } = useSWR(`${URL}/api/cars`, fetcher);

  return (
    <CarContext.Provider
      value={{
        data,
        error,
        isLoading,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
