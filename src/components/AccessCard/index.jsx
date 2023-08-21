import React from 'react';
import logo from '../../assets/icons/GCN-logo-yellow.png';
import './AccessCard.scss';
import { NavLink } from 'react-router-dom';

const AccessCard = ({ children }) => (
  <div className="container">
    <div className="acess-card">
      <div className="card-content">
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
        <div className="access-main">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default AccessCard;
