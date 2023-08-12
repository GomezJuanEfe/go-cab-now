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
<<<<<<< HEAD
    <PaymentProvider>
      <RouterProvider router={router} />
    </PaymentProvider>
=======
      <RouterProvider router={router} />
>>>>>>> 32ddaf943a00e8dd70de1ac4cd4bbee20d992fda
  </FromProvider>,
  // </React.StrictMode>,
);
