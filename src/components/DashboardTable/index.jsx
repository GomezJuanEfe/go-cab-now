import React from 'react';
import './DashboardTable.scss';

const DashboardTable = ({ children, title }) => {
  console.log('');
  return (
    <div className="table-container">
      <div className="table__header">
        <h5>{title}</h5>
      </div>
      <div className="table-body">
        <div className="table-responsive">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
