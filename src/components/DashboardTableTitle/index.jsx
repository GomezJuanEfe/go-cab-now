import React from 'react';
import './DashboardTitle.scss';

const DashboardTitle = ({ title, children }) => (
  <div className="table__title">
    <h5>{title}</h5>
    <div>{children}</div>
  </div>
);

export default DashboardTitle;
