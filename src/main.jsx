import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { FromProvider } from './store/FormContext';
import './index.scss';
import { PaymentProvider } from './store/PaymentContext';
import { CarsProvider } from './store/CarsContext';
import { DashboardProvider } from './store/DashboardContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FromProvider>
    <PaymentProvider>
      <CarsProvider>
        <DashboardProvider>
          <RouterProvider router={router} />
        </DashboardProvider>
      </CarsProvider>
    </PaymentProvider>
  </FromProvider>,
  // </React.StrictMode>,
);
