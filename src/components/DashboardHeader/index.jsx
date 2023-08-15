import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/dashboard-logo.png';

const DashboardHeader = () => {
  console.log('');
  return (
    <div className="dashboard-header">
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <div className="logo-wrapper">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
