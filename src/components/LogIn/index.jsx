import React from 'react';
import './LogIn.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaUser, FaLock, FaFacebookF, FaGoogle } from 'react-icons/fa';

const LogIn = ({ handleClickLogin, showLogIn }) => {
  if (!showLogIn) {
    return null;
  }

  return (
    <div className="container">
      <div className="login-container">
        <div onClick={handleClickLogin} className="close-login">
          <AiOutlineCloseCircle />
        </div>
        <h2>Login</h2>
        <form>

          <label htmlFor="username">Username</label>
          <br />
          <div className="user-icon">
            <FaUser />
          </div>
          <input className="username" type="text" id="username" placeholder="Type your username" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <div className="lock-icon">
            <FaLock />
          </div>
          <input className="password" type="text" id="password" placeholder="Type your password" />

          <div className="forgot">
            <p>Forgot password?</p>
          </div>
          <div className="login-button">
            <button type="submit">LOGIN</button>
          </div>

        </form>

        <div className="social-login">
          <h4>Or Sing Up Using</h4>
          <div className="social__icons">
            <div className="social__icons-facebook">
              <FaFacebookF />
            </div>
            <div className="social__icons-google">
              <FaGoogle />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LogIn;
