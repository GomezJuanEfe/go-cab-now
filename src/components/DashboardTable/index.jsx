import React from 'react';
import './DashboardTable.scss';

const DashboardTable = ({ children }) => {
  console.log('');
  return (
    <div className="table-body">
      <div className="table-responsive">
        {children}
      </div>
    </div>
  );
};

export default DashboardTable;
