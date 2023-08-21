import React, { useContext } from 'react';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import './AccessCreateAccount.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import AccessCard from '../AccessCard';
import { DashboardContext } from '../../store/DashboardContext';
import { FormContext } from '../../store/FormContext';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const sendRequest = async (url, data) => {
  const resp = await axios.post(url, data);
  return resp;
};

const AccessCreateAccount = ({ handleShowAccess }) => {
  const { showAccess } = useContext(DashboardContext);
  const { signInForm, handleSignInForm } = useContext(FormContext);
  const { trigger, isMutating, error } = useSWRMutation(URL, sendRequest);

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const resolve = await trigger(signInForm);
    return resolve;
  };
  if (isMutating) return <div>Adding post...</div>;
  if (error) return <div>Failed to add post</div>;
  console.log(signInForm);

  return (
    <div className={!showAccess ? 'signup-card' : 'signup-card hidden'}>
      <AccessCard>
        <form onSubmit={handleClickSubmit}>
          <h4>Create your account</h4>
          <p>Enter your personal details to create account</p>

          <div className="form-group name-group">
            <div className="firstname-group">
              <label htmlFor="firstname">Your Name</label>
              <br />
              <input
                type="text"
                id="firstname"
                name="firstName"
                required
                placeholder="First Name"
                onChange={handleSignInForm}
                value={signInForm.firstName}
              />
            </div>
            <div className="lastname-group">
              <input
                type="text"
                id="lastname"
                name="lastName"
                required
                placeholder="Last Name"
                onChange={handleSignInForm}
                value={signInForm.lastName}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              onChange={handleSignInForm}
              type="email"
              id="email"
              name="emailAddress"
              required
              placeholder="example@gocabnow.com"
              value={signInForm.emailAddress}
            />
          </div>
          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              onChange={handleSignInForm}
              type="password"
              id="password"
              name="password"
              required
              placeholder="***************"
              value={signInForm.password}
            />
          </div>
          <div className="form-group">
            <div className="btn">
              <button className="signup-btn" type="submit">Create Account</button>
            </div>
          </div>
          <h6 className="text-muted">Or Sign Up With</h6>
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
            Already have an account?
            <span onClick={handleShowAccess}>Sign In</span>
          </p>
        </form>
      </AccessCard>
    </div>
  );
};

export default AccessCreateAccount;
