import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { FromProvider } from './store/FormContext';
import './index.scss';
import { CarProvider } from './store/CarsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FromProvider>
    {/* <CarProvider> */}
    <RouterProvider router={router} />
    {/* </CarProvider> */}
  </FromProvider>,
  // </React.StrictMode>,
);
