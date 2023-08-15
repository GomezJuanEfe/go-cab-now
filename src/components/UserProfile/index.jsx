import React from 'react';
import './UseProfile.scss';
import BookingsList from '../BookingsList';
import DashboardHeader from '../DashboardHeader';
import SidebarUser from '../SidebarUser';

const UserProfile = () => (
  <>
    <DashboardHeader />
    <div className="user-profile">
      <div className="col-left">
        <SidebarUser />
      </div>
      <div className="col-right">
        <BookingsList />
      </div>
    </div>
  </>
);

export default UserProfile;
