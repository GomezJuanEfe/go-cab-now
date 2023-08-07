import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { FromProvider } from './store/FormContext';
import './index.scss';
import { CarsProvider } from './store/CarsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FromProvider>
    <CarsProvider>
      <RouterProvider router={router} />
    </CarsProvider>
  </FromProvider>,
  // </React.StrictMode>,
);
