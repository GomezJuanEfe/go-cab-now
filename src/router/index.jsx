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
import AccessPage from '../pages/AccessPage';

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
        path: '/user-profile',
        element: <UserProfilePage />,
      },
      {
        path: '/access',
        element: <AccessPage />,
      },
    ],
  },
]);

export default router;
