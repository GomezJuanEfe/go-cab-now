import React from 'react';
import './SideBarUser.scss';
import { NavLink } from 'react-router-dom';
import {
  FiUser, FiUsers, FiLogIn, FiBookmark, FiHome,
} from 'react-icons/fi';
import { BiTaxi } from 'react-icons/bi';
import downArrow from '../../assets/icons/down-black.png';

const SidebarUser = ({ showSidebar }) => {
  console.log('SidebarUser');
  return (
    <div className={showSidebar ? 'sidebar-wrapper' : 'sidebar-wrapper sidebar-closed'}>
      <div className="simplebar-content">

        <NavLink to="/">
          <div className="home-button sidebar-item">
            <FiHome />
            <span>Home</span>
          </div>
        </NavLink>

        <NavLink to="/user-profile">
          <div className="sidebar-item">
            <FiUser />
            <span>My Profile</span>
          </div>
        </NavLink>

        <NavLink to="/user-profile/bookings">
          <div className="sidebar-item">
            <FiBookmark />
            <span>Bookings</span>
          </div>
        </NavLink>

        <div className="sidebar-list">
          <div id="users-title" className="sidebar-title">
            <FiUsers />
            <span>Users</span>
            <div className="according-menu">
              <img src={downArrow} alt="down-arrow" />
            </div>
          </div>
          <ul className="sidebar-menu">
            <NavLink to="/user-profile/all-users">
              <li>
                <span>-</span>
                {' '}
                All users
              </li>
            </NavLink>
            <NavLink to="/user-profile/add-user">
              <li>
                <span>-</span>
                {' '}
                Add new user
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebar-list">
          <div className="sidebar-title">
            <BiTaxi />
            <span>Cab</span>
            <div className="according-menu">
              <img src={downArrow} alt="down-arrow" />
            </div>
          </div>
          <ul className="sidebar-menu">
            <NavLink to="/user-profile/all-cars">
              <li>
                <span>-</span>
                {' '}
                All cars
              </li>
            </NavLink>
            <NavLink to="/user-profile/car-details">
              <li>
                <span>-</span>
                {' '}
                Car's details
              </li>
            </NavLink>
            <NavLink to="/user-profile/add-car">
              <li>
                <span>-</span>
                {' '}
                Add new car
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebar-item">
          <FiLogIn />
          <span>Log Out</span>
        </div>

      </div>
    </div>
  );
};

export default SidebarUser;
