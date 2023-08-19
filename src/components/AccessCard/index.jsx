import React from 'react';
import logo from '../../assets/icons/GCN-logo-yellow.png';
import './AccessCard.scss';

const AccessCard = ({ children }) => (
  <div className="container">
    <div className="acess-card">
      <div className="card-content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="access-main">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default AccessCard;
