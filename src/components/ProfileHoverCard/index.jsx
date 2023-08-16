import React from 'react';
import './ProfileHoverCard.scss';
import {
  BiUser, BiLogIn, BiBookmark, BiHome,
} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const ProfileHoverCard = () => (

  <div className="profile-dropdown">
    <div className="home-button hovercard-item">
      <NavLink to="/">
        <div>
          <BiHome />
          <span>Home</span>
        </div>
      </NavLink>
    </div>
    <div className="hovercard-item">
      <BiUser />
      <span>My Profile</span>
    </div>
    <div className="hovercard-item">
      <BiBookmark />
      <span>My Bookings</span>
    </div>
    <div className="hovercard-item">
      <BiLogIn />
      <span>Log Out</span>
    </div>
  </div>

);

export default ProfileHoverCard;
