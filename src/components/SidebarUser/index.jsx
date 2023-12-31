import React, { useState, useContext } from 'react';
import './SideBarUser.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FiUser, FiUsers, FiLogIn, FiBookmark,
} from 'react-icons/fi';
import { BiTaxi } from 'react-icons/bi';
import downArrow from '../../assets/icons/down-black.png';
import { UserContext } from '../../store/UserContext';

const SidebarUser = ({ showSidebar, setShowSidebar }) => {
  const { logOut, userData } = useContext(UserContext);
  const [showUser, setShowUser] = useState(true);
  const [showCab, setShowCab] = useState(true);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <div className={showSidebar ? 'sidebar-wrapper' : 'sidebar-wrapper sidebar-closed'}>
      <div className="simplebar-content">

        <NavLink to="/user-profile">
          <div
            className="sidebar-item"
            onClick={() => setShowSidebar(true)}
            onKeyDown={() => setShowSidebar(true)}
            role="button"
            tabIndex={0}
          >
            <FiUser />
            <span>My Profile</span>
          </div>
        </NavLink>

        <NavLink to="/user-profile/bookings">
          <div
            className="sidebar-item"
            onClick={() => setShowSidebar(true)}
            onKeyDown={() => setShowSidebar(true)}
            role="button"
            tabIndex={0}
          >
            <FiBookmark />
            <span>Bookings</span>
          </div>
        </NavLink>

        {userData?.role === 'ADMIN'
          && (
          <div className="sidebar-list">
            <div
              id="users-title"
              className="sidebar-title"
              onClick={() => setShowUser(!showUser)}
              onKeyUp={() => setShowUser(!showUser)}
              tabIndex={0}
              role="button"
            >
              <FiUsers />
              <span>Users</span>
              <div className="according-menu">
                <img src={downArrow} alt="down-arrow" />
              </div>
            </div>
            <ul className={`sidebar-menu ${showUser && 'hide'}`}>
              <NavLink to="/user-profile/all-users">
                <li
                  onClick={() => setShowSidebar(true)}
                  onKeyDown={() => setShowSidebar(true)}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span>-</span>
                  {' '}
                  All users
                </li>
              </NavLink>
              {/* <NavLink to="/user-profile/add-user">
                <li
                  onClick={() => setShowSidebar(true)}
                  onKeyDown={() => setShowSidebar(true)}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span>-</span>
                  {' '}
                  Add new user
                </li>
              </NavLink> */}
            </ul>
          </div>
          )}

        {(userData.role === 'ADMIN' || userData.role === 'DRIVER')
          && (
          <div className="sidebar-list">
            <div
              className="sidebar-title"
              onClick={() => setShowCab(!showCab)}
              onKeyUp={() => setShowCab(!showCab)}
              tabIndex={0}
              role="button"
            >
              <BiTaxi />
              <span>Cab</span>
              <div className="according-menu">
                <img src={downArrow} alt="down-arrow" />
              </div>
            </div>
            <ul className={`sidebar-menu ${showCab && 'hide'}`}>
              <NavLink to="/user-profile/all-cars">
                {
                (userData?.role === 'ADMIN' || userData?.role === 'DRIVER')
                && (
                <li
                  onClick={() => setShowSidebar(true)}
                  onKeyDown={() => setShowSidebar(true)}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span>-</span>
                  {' '}
                  Cars
                </li>
                )
              }
              </NavLink>
              <NavLink to="/user-profile/add-car">
                <li
                  onClick={() => setShowSidebar(true)}
                  onKeyDown={() => setShowSidebar(true)}
                  role="menuitem"
                  tabIndex={0}
                >
                  <span>-</span>
                  {' '}
                  Add new car
                </li>
              </NavLink>
            </ul>

          </div>
          )}

        <div
          className="sidebar-item"
          onClick={handleLogOut}
          onKeyDown={handleLogOut}
          role="button"
          tabIndex={0}
        >
          <FiLogIn />
          <span>Log Out</span>
        </div>

      </div>
    </div>
  );
};

export default SidebarUser;
