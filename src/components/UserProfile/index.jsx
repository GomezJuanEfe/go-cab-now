import React, { useContext } from 'react';
import './UseProfile.scss';
import DashboardHeader from '../DashboardHeader';
import SidebarUser from '../SidebarUser';
import { DashboardContext } from '../../store/DashboardContext';
import Profile from '../Profile';
import FormUpdate from '../FormUpdate';
import AddNewCar from '../AddNewCar';
import BookingList from '../BookingsList';

const UserProfile = () => {
  const { handleClickReschedule } = useContext(DashboardContext);
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
          <BookingList
            handleClickReschedule={handleClickReschedule}
          />
          <Profile />
          <FormUpdate />
          <AddNewCar />
        </div>

      </div>
    </>
  );
};

export default UserProfile;
