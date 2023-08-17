import React, { useContext } from 'react';
import './UseProfile.scss';
import BookingsList from '../BookingsList';
import DashboardHeader from '../DashboardHeader';
import SidebarUser from '../SidebarUser';
import { DashboardContext } from '../../store/DashboardContext';
import Profile from '../Profile';
// import Reschedule from '../Reschedule';
import AddNewCar from '../AddNewCar';

const UserProfile = () => {
  const { handleToggleSidebar, showSidebar, setShowSidebar } = useContext(DashboardContext);
  const handleClick = () => {
    if (window.innerWidth < 900) {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <>
      <DashboardHeader handleToggleSidebar={handleToggleSidebar} />
      <div className="user-profile">
        <div
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
          className={showSidebar ? 'col-left' : 'col-left col-mobile-open'}
        >
          <SidebarUser showSidebar={showSidebar} />
        </div>
        <div className={showSidebar ? 'col-right' : 'col-right col-right-screensize'}>
          <BookingsList />
        </div>

        <div>
          <Profile />
          <AddNewCar />
          {/* <Reschedule /> */}
        </div>

      </div>
    </>
  );
};

export default UserProfile;
