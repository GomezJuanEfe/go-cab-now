import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../store/UserContext';

const DisableLogged = ({ children }) => {
  const { isLogged } = useContext(UserContext);
  return isLogged ? <Navigate to="/user-profile" /> : children;
};

export default DisableLogged;
