import { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showAccess, setShowAccess] = useState(true);
  const [addBookingButton, setAddBookingButton] = useState(false);

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
        setAddBookingButton,
        addBookingButton
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
