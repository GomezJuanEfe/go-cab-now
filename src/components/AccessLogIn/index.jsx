import React, { useContext } from 'react';
import axios from 'axios';
import './AccesLogIn.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AccessCard from '../AccessCard';
import { DashboardContext } from '../../store/DashboardContext';
import { FormContext } from '../../store/FormContext';
import { UserContext } from '../../store/UserContext';

const URL = import.meta.env.VITE_API_URL;

const AccessLogIn = ({ handleShowAccess }) => {
  const { showAccess } = useContext(DashboardContext);
  const { loginForm, handleLoginForm, resetForm } = useContext(FormContext);
  const { setIsLogged } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClickSubmit = async (e) => {
    e.preventDefault();

    axios.post(`${URL}/auth/local/login`, loginForm)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        setIsLogged(true);
        navigate('/user-profile');
      });

    resetForm({
      email: '',
      password: '',
    });
  };

  return (
    <div className={showAccess ? 'signin-card' : 'signin-card hidden'}>
      <AccessCard>
        <form onSubmit={handleClickSubmit}>
          <h4>Sign in to account</h4>
          <p>Enter your email & password to login</p>
          <div className="form-group">
            <label htmlFor="sign-in-email">Email Address</label>
            <br />
            <input
              onChange={handleLoginForm}
              type="email"
              id="sign-in-email"
              name="email"
              required
              placeholder="example@gocabnow.com"
              value={loginForm.email}
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="sign-in-password">Password</label>
            <br />
            <input
              onChange={handleLoginForm}
              type="password"
              id="sign-in-password"
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
