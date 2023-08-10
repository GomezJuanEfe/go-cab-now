import { createContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../services/fetcher';
import { buildQueryString } from '../services/utils';

const baseURL = '/cars?page=';

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [carPageIndex, setCarPageIndex] = useState(1);
  const [queryString, setQueryString] = useState('');
  const { data: carsData, error: carsError, isLoading: carsIsLoading } = useSWR(`${baseURL}${carPageIndex}&${queryString}`, fetcher);
  const [carPages, setCarPages] = useState(1);

  useEffect(() => {
    setCarPages(carsData?.info.pages);
  }, [carsData]);

  /* FILTER LOGIC */

  /*
  1. Estado y handle para tomar valores de inputs ✅
  2. Función para crear url ✅
  3. hacer petición al backend ✅
  4. Hacer función de filtrado
  5. Recibir información y setear estado para volver a renderizar
  */

  const [carFilter, setCarFilter] = useState({
    filterBar: '',
    type: '',
    starCategory: '',
    priceRange: [0, 1500],
    capacity: '',
    carOption: '',
  });

  const handleCarFilter = (e) => {
    const {
      name, value, checked, type,
    } = e.target;
    let filterUpdated = [];
    if (type === 'checkbox') {
      if (!checked) {
        filterUpdated = carFilter[name].filter((item) => item !== value);
      } else {
        filterUpdated = [...carFilter[name], value];
      }
    } else {
      filterUpdated = value;
    }
    setCarFilter({ ...carFilter, [name]: filterUpdated });
  };

  const handleQueryString = () => {
    const string = buildQueryString(carFilter);
    setQueryString(string);
  };
  /* /FILTER LOGIC */

  return (
    <CarsContext.Provider
      value={{
        carsData,
        carsError,
        carsIsLoading,
        carPageIndex,
        setCarPageIndex,
        carPages,
        carFilter,
        handleCarFilter,
        handleQueryString,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};
