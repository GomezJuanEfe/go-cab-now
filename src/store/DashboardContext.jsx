import { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showAccess, setShowAccess] = useState(true);
  const [dataCars, setDataCars] = useState(null);
  const [selectedCar, setSelectCar] = useState({
    id: '',
    img: '',
    car_name: '',
    type: '',
    seats: '',
    luggage: '',
    transmition: '',
    fare_km: '',
    driver_id: '', //como puedo traer el id del driver
  });

  const handleShowAccess = () => {
    setShowAccess(!showAccess);
  };
  console.log(showAccess);
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        handleToggleSidebar,
        setShowSidebar,
        handleShowAccess,
        showAccess,
        dataCars,
        setDataCars,
        selectedCar,
        setSelectCar
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
