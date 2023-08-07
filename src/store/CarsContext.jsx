import { createContext, useEffect, useState } from 'react';

export const carContext = createContext();

export const CarProvider = (children) => {
  const [carData, setCarData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../../data.json');
      return response.json();
    };

    const data = fetchData();
    setCarData(data);
    console.log(data);
  }, []);

  return (
    <carContext.Provider
      value={{
        carData,
      }}
    >
      {children}
    </carContext.Provider>
  );
};
