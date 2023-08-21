import React, { useContext } from 'react';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import './AccesLogIn.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import AccessCard from '../AccessCard';
import { DashboardContext } from '../../store/DashboardContext';
import { FormContext } from '../../store/FormContext';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const sendRequest = async (url, data) => {
  const resp = await axios.post(url, data);
  return resp;
};

const AccessLogIn = ({ handleShowAccess }) => {
  const { showAccess } = useContext(DashboardContext);
  const { loginForm, handleLoginForm } = useContext(FormContext);
  const { trigger, isMutating, error } = useSWRMutation(URL, sendRequest);

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const resolve = await trigger(loginForm);
    return resolve;
  };
  if (isMutating) return <div>Adding post...</div>;
  if (error) return <div>Failed to add post</div>;

  return (
    <div className={showAccess ? 'signin-card' : 'signin-card hidden'}>
      <AccessCard>
        <form onSubmit={handleClickSubmit}>
          <h4>Sign in to account</h4>
          <p>Enter your email & password to login</p>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              onChange={handleLoginForm}
              type="email"
              id="email"
              name="emailAddress"
              required
              placeholder="example@gocabnow.com"
              value={loginForm.emailAdress}
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              onChange={handleLoginForm}
              type="password"
              id="password"
              name="password"
              required
              placeholder="***************"
              value={loginForm.password}
            />
          </div>
          <div className="form-group">
            <div className="forgot">
              <p>Forgot password?</p>
            </div>
            <div className="btn">
              <button className="signin-btn" type="submit">Sign In</button>
            </div>
          </div>
          <h6 className="text-muted">Or Sign In With</h6>
          <div className="social">
            <div className="social-showcase">
              <div className="btn-light facebook">
                <div className="facebook">
                  <FaFacebookF />
                </div>
                <span>facebook</span>
              </div>
              <div className="btn-light google">
                <div className="google">
                  <FaGoogle />
                </div>
                <span>google</span>
              </div>
            </div>
          </div>
          <p className="text-center">
            Don't have account?
            <span onClick={handleShowAccess}>Create Account</span>
          </p>
        </form>
      </AccessCard>
    </div>
  );
};

export default AccessLogIn;
