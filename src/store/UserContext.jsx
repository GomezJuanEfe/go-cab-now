import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const URL = import.meta.env.VITE_API_URL;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
  const [loadingUser, setLoadingUser] = useState(true);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    address: '',
    phone: '',
    avatar: '',
  });

  useEffect(() => {
    if (isLogged) {
      setLoadingUser(true);
      axios.get(`${URL}/api/users/single`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then(({ data }) => {
          setUserData({ ...data.data });
          setLoadingUser(false);
        })
        .catch((error) => {
          setIsLogged(false);
          console.error(error);
        });
    }
  }, [isLogged]);

  const logOut = () => {
    localStorage.removeItem('token');
    setUserData({
      first_name: '',
      last_name: '',
      email: '',
      role: '',
      address: '',
      phone: '',
      avatar: '',
    });

    setIsLogged(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,
        loadingUser,
        userData,
        setUserData,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
