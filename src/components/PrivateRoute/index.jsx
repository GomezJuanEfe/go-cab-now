import { Navigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { useContext } from 'react';
import { UserContext } from '../../store/UserContext';

const PrivateRoute = ({ children }) => {
  const { userData } = useContext(UserContext);
  const token = userData.token || localStorage.getItem('token');
  const { isExpired } = useJwt(token);
  const isAthorized = !isExpired;
  return isAthorized ? children : <Navigate to="/" />;
};

export default PrivateRoute;
