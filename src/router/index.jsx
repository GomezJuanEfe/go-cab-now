import { createBrowserRouter } from 'react-router-dom';

import Root from '../layout/Root';
import UserProfile from '../components/UserProfile';
import Home from '../pages/Home';
import CabList from '../pages/CabList';
import NotFound from '../pages/NotFound';
import CabBooking from '../pages/CabBooking';
import Payments from '../pages/Payments';
import Success from '../pages/Success';
import FailedPage from '../pages/FailedPage';
//import UserProfilePage from '../pages/UserProfilePage';
import BookingsPage from '../pages/BookingsPage';
import AccessPage from '../pages/AccessPage';
import AllUsersPage from '../pages/AllUsersPage';
import AddUserPage from '../pages/AddUserPage';
import AllCarsPage from '../pages/AllCarsPage';
import AddCarPage from '../pages/AddCarPage';
import CarDetailsPage from '../pages/CarDetailsPage';

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
        path: '/user-profile/',
        element: <UserProfile />,
      },
      {
        path: '/user-profile/bookings',
        element: <BookingsPage />,
      },
      {
        path: '/user-profile/all-users',
        element: <AllUsersPage />,
      },
      {
        path: '/user-profile/add-user',
        element: <AddUserPage />,
      },
      {
        path: '/user-profile/all-cars',
        element: <AllCarsPage />,
      },
      {
        path: '/user-profile/add-car',
        element: <AddCarPage />,
      },
      {
        path: '/user-profile/car-details',
        element: <CarDetailsPage />,
      },
      {
        path: '/access',
        element: <AccessPage />,
      },
    ],
  },
]);

export default router;
