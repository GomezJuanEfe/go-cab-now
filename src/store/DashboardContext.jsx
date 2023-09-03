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
        setSelectedTrip,
        selectedTrip,
        tripsData,
        setTripsData
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
