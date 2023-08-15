import React from 'react';
import './SideBarUser.scss';
import { NavLink } from 'react-router-dom';
import {
  BiUser, BiLogIn, BiBookmark, BiHome,
} from 'react-icons/bi';

const SidebarUser = () => {
  console.log('');
  return (
    <div className="sidebar-wrapper">
      <div className="simplebar-content">
        <div className="home-button sidebar-item">
            <NavLink to="/">
              <div>
                <BiHome />
                <span>Home</span>
              </div>
            </NavLink>
        </div>
        <div className="sidebar-item">
          <BiUser />
          <span>My Profile</span>
        </div>
        <div className="sidebar-item">
          <BiBookmark />
          <span>My Bookings</span>
        </div>
        <div className="sidebar-item">
          <BiLogIn />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarUser;
