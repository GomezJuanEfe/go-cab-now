import React, { useContext } from 'react';
import { FormContext } from '../../store/FormContext';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import './LogIn.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  FaUser, FaLock, FaFacebookF, FaGoogle,
} from 'react-icons/fa';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const sendRequest = async (url, data) => {
  const resp = await axios.post(url, data);
  return resp;
};

const LogIn = ({ handleClickLogin, showLogIn }) => {
  const { loginForm, handleLoginForm } = useContext(FormContext);
  const { trigger, isMutating, error } = useSWRMutation(URL, sendRequest);

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const resolve = await trigger(loginForm);
    return resolve;
  };
  if (isMutating) return <div>Adding post...</div>;
  if (error) return <div>Failed to add post</div>;

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
        <form onSubmit={handleClickSubmit}>

          <label htmlFor="username">Username</label>
          <br />
          <div className="user-icon">
            <FaUser />
          </div>
          <input
            className="username"
            name="username"
            type="text"
            id="username"
            placeholder="Type your username"
            onChange={handleLoginForm}
            value={loginForm.username}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <div className="lock-icon">
            <FaLock />
          </div>
          <input
            className="password"
            name="password"
            type="password"
            id="password"
            placeholder="Type your password"
            onChange={handleLoginForm}
            value={loginForm.password}
          />

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
