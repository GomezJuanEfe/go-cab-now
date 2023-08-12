import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { FromProvider } from './store/FormContext';
import './index.scss';
import { PaymentProvider } from './store/PaymentContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FromProvider>
    <PaymentProvider>
      <RouterProvider router={router} />
    </PaymentProvider>
  </FromProvider>,
  // </React.StrictMode>,
);
