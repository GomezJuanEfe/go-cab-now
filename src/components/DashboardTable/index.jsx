import React from 'react';
import './DashboardTable.scss';

const DashboardTable = ({ children }) => (
  <div className="table-body">
    <div className="table-responsive">
      {children}
    </div>
  </div>
);

export default DashboardTable;
