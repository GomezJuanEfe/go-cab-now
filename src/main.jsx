import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { FromProvider } from './store/FormContext';
import './index.scss';
import { PaymentProvider } from './store/PaymentContext';
import { CarProvider } from './store/CarContext';
import { DashboardProvider } from './store/DashboardContext';
import { UserProvider } from './store/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FromProvider>
    <PaymentProvider>
      <CarProvider>
        <DashboardProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </DashboardProvider>
      </CarProvider>
    </PaymentProvider>
  </FromProvider>,
  // </React.StrictMode>,
);
