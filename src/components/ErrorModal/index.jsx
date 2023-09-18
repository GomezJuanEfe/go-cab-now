import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const ErrorModal = ({ errorMessage }) => (
  <>
    <div className="center alert-icon">
      <FiAlertTriangle />
    </div>
    <h2>There was an error</h2>
    <p>{errorMessage}</p>
  </>
);

export default ErrorModal;
