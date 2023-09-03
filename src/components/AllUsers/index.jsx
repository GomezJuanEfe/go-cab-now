import React from 'react';
import DashboardTitle from '../DashboardTableTitle';
import DashboardTable from '../DashboardTable';

const AllUsers = () => (
  <div className="table-container">
    <DashboardTitle title="All Users" />
    <DashboardTable>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Email</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </DashboardTable>
  </div>
);

export default AllUsers;
