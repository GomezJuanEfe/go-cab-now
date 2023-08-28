import { Navigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  let isAthorized;
  if (token) {
    const { isExpired } = useJwt(token);
    isAthorized = !isExpired;
  } else {
    isAthorized = false;
  }
  return isAthorized ? children : <Navigate to="/" />;
};

export default PrivateRoute;
