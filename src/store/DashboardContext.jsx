import { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showAccess, setShowAccess] = useState(true);
  const [dataCars, setDataCars] = useState(null);

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
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
