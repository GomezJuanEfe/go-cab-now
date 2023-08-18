import { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showReschedule, setShowReschedule] = useState(false);
  const [showButtonSearch, setShowButtonSearch] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleClickReschedule = () => {
    setShowReschedule(!showReschedule);
    setShowButtonSearch(false);
  };

  console.log(showSidebar);
  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        handleToggleSidebar,
        setShowSidebar,
        handleClickReschedule,
        showReschedule,
        showButtonSearch
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
