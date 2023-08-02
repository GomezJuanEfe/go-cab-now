import React from 'react';
import './LogIn.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
          <input className="username" type="text" id="username" placeholder="Type your username" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input className="password" type="text" id="password" placeholder="Type your password" />

          <div className="forgot">
            <p>Forgot password?</p>
          </div>
          <div className="login-button">
            <button type="submit">LOGIN</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LogIn;
