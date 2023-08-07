import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { FromProvider } from './store/FormContext';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FromProvider>
    <RouterProvider router={router} />
  </FromProvider>,
  // </React.StrictMode>,
);
