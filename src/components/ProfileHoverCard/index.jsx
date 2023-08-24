import { useContext } from 'react';
import './ProfileHoverCard.scss';
import {
  BiUser, BiLogIn, BiBookmark, BiHome,
} from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../store/UserContext';

const ProfileHoverCard = () => {
  const { logOut } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  return (
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
      <div className="hovercard-item" onClick={handleLogOut}>
        <BiLogIn />
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default ProfileHoverCard;
