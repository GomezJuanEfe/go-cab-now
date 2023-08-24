import { useContext } from 'react';
import './DashboardHeader.scss';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import logo from '../../assets/icons/GCN-logo.png';
import portrait from '../../assets/images/profile4.jpg';
import ProfileHoverCard from '../ProfileHoverCard';
import { UserContext } from '../../store/UserContext';

const DashboardHeader = ({ handleToggleSidebar }) => {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div className="dashboard-header">
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <div className="logo-wrapper">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div
            onClick={handleToggleSidebar}
            onKeyDown={handleToggleSidebar}
            className="sidebar-toggle"
            role="button"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-center status_toggle middle sidebar-toggle">
              <line x1="18" y1="10" x2="6" y2="10" />
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="14" x2="3" y2="14" />
              <line x1="18" y1="18" x2="6" y2="18" />
            </svg>
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li className="profile-nav">
              <div className="profile-media">
                <img src={portrait} alt="portrait" />
                <div className="username">
                  <span>{`${userData.first_name} ${userData.last_name}`}</span>
                  <div className="profile-type">
                    <p>{userData.role}</p>
                    <i><FaAngleDown /></i>
                  </div>
                </div>
              </div>
              <div className="profile-hovercard">
                <ProfileHoverCard />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
