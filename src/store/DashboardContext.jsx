import { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showAccess, setShowAccess] = useState(true);
  const [selectedTrip, setSelectedTrip] = useState({
    origin_latitude: '',
    destination_latitude: '',
    date: '',
    id: '',
  });
  const [tripsData, setTripsData] = useState({});
  const [dataCars, setDataCars] = useState(null);
  const [selectedCar, setSelectCar] = useState({
    id: '',
    car_name: '',
    type: '',
    img: '',
    seats: '',
    luggage: '',
    air_conditioner: '',
    transmition: '',
    fare_km: '',
    driver_id: '',
  });

  const handleShowAccess = () => {
    setShowAccess(!showAccess);
  };
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
        setSelectedTrip,
        selectedTrip,
        tripsData,
        setTripsData,
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
