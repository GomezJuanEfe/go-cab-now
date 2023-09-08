import axios from 'axios';
import useSWR from 'swr';
import { createContext, useState } from 'react';
import useForm from '../hooks/useForm';
import { buildQueryString } from '../services/utils';

/* UTILS */
const fetcher = (url) => axios.get(url).then((res) => res.data);
const URL = import.meta.env.VITE_API_URL;
/* /UTILS */

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cablistIndexPage, setcablistIndexPage] = useState(1);
  const [queryString, setQueryString] = useState('');
  const { data, error, isLoading } = useSWR(`${URL}/api/cars/paginated/?page=${cablistIndexPage}&${queryString}`, fetcher);
  const [selectedCar, setSelectedCar] = useState({});
  const [selectedCarPrice, setSelectedCarPrice] = useState(0);
  const { form: carFilter, handleForm: handleCarFilter } = useForm({
    searchInput: '',
    // type: '',
    // starCategory: '',
    // priceRange: [0, 1500],
    // capacity: '',
    // carOption: '',
  });

  /* Set the rest of the filters */
  /*
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
  */

  // When this event is called the queryString is set
  const handleQueryString = () => {
    const string = buildQueryString(carFilter);
    setQueryString(string);
    setcablistIndexPage(1);
  };

  return (
    <CarContext.Provider
      value={{
        data,
        error,
        isLoading,
        cablistIndexPage,
        setcablistIndexPage,
        carFilter,
        handleCarFilter,
        handleQueryString,
        selectedCar,
        setSelectedCar,
        selectedCarPrice,
        setSelectedCarPrice,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
