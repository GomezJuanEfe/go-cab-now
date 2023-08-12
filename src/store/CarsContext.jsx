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

  const [carFilter, setCarFilter] = useState({
    filterBar: '',
    type: '',
    starCategory: '',
    priceRange: [0, 1500],
    capacity: '',
    carOption: '',
  });

  // Update carData when the first request is done
  useEffect(() => {
    setCarPages(carsData?.info.pages);
  }, [carsData]);

  // Set the filte object
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

  // When this event is called the queryString is set
  const handleQueryString = () => {
    const string = buildQueryString(carFilter);
    setQueryString(string);
    setCarPageIndex(1);
  };

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
