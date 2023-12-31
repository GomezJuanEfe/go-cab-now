import { createBrowserRouter } from 'react-router-dom';

import Root from '../layout/Root';
import Home from '../pages/Home';
import CabList from '../pages/CabList';
import NotFound from '../pages/NotFound';
import CabBooking from '../pages/CabBooking';
import Payments from '../pages/Payments';
import Success from '../pages/Success';
import FailedPage from '../pages/FailedPage';
import UserProfilePage from '../pages/UserProfilePage';
import BookingsPage from '../pages/BookingsPage';
import AccessPage from '../pages/AccessPage';
import AllUsersPage from '../pages/AllUsersPage';
import AddUserPage from '../pages/AddUserPage';
import AllCarsPage from '../pages/AllCarsPage';
import AddCarPage from '../pages/AddCarPage';
import CarEditPage from '../pages/EditCarPage';
import PrivateRoute from '../components/PrivateRoute';
import DisableLogged from '../components/DisableLogged';
import VerifyAccount from '../pages/VerifyAccount';
import VerifyResetPassword from '../pages/VerifyResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cab-list',
        element: <CabList />,
      },
      {
        path: '/cab-booking',
        element: <CabBooking />,
      },
      {
        path: '/payments',
        element: <Payments />,
      },
      {
        path: '/success',
        element: <Success />,
      },
      {
        path: '/failedpage',
        element: <FailedPage />,
      },
      {
        path: '/verify-account/:token',
        element: <VerifyAccount />,
      },
      {
        path: '/verify-forgot-password/:token',
        element: <VerifyResetPassword />,
      },
      {
        path: '/user-profile/',
        element: <PrivateRoute><UserProfilePage /></PrivateRoute>,
      },
      {
        path: '/user-profile/bookings',
        element: <PrivateRoute><BookingsPage /></PrivateRoute>,
      },
      {
        path: '/user-profile/all-users',
        element: <PrivateRoute><AllUsersPage /></PrivateRoute>,
      },
      {
        path: '/user-profile/add-user',
        element: <PrivateRoute><AddUserPage /></PrivateRoute>,
      },
      {
        path: '/user-profile/all-cars',
        element: <PrivateRoute><AllCarsPage /></PrivateRoute>,
      },
      {
        path: '/user-profile/add-car',
        element: <PrivateRoute><AddCarPage /></PrivateRoute>,
      },
      {
        path: '/user-profile/edit-car',
        element: <PrivateRoute><CarEditPage /></PrivateRoute>,
      },
      {
        path: '/access',
        element: <DisableLogged><AccessPage /></DisableLogged>,
      },
    ],
  },
]);

export default router;
