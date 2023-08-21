import React, { useContext } from 'react';
import './UseProfile.scss';
import DashboardHeader from '../DashboardHeader';
import SidebarUser from '../SidebarUser';
import { DashboardContext } from '../../store/DashboardContext';

const UserProfile = ({ children }) => {
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
          {children}
        </div>

      </div>
    </>
  );
};

export default UserProfile;
