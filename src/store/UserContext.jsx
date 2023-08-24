import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const URL = import.meta.env.VITE_API_URL;

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));
  const [userData, setUserData] = useState({
    token: '',
    first_name: '',
    last_name: '',
    email: '',
    role: '',
    address: '',
    phone: '',
    avatar: '',
    is_active: '',
    created_at: '',
    updated_at: '',
  });

  console.log('User data', userData);

  useEffect(() => {
    if (isLogged) {
      axios.get(`${URL}/api/users/single`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
        .then(({ data }) => setUserData({ ...data.data, token: localStorage.getItem('token') }));
    }
  }, [isLogged]);

  const logOut = () => {
    localStorage.removeItem('token');
    setUserData({
      token: '',
      first_name: '',
      last_name: '',
      email: '',
      role: '',
      address: '',
      phone: '',
      avatar: '',
      is_active: '',
      created_at: '',
      updated_at: '',
    });

    setIsLogged(false);
  };

  return (
    <UserContext.Provider
      value={{
        setIsLogged,
        userData,
        setUserData,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
