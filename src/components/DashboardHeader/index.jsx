import React from 'react';
import './DashboardHeader.scss'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/GCN-logo.png';

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
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-center status_toggle middle sidebar-toggle"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
