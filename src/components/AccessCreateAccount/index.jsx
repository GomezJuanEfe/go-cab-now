import React, { useContext } from 'react';
import './AccessCreateAccount.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import AccessCard from '../AccessCard';
import { DashboardContext } from '../../store/DashboardContext';

const AccessCreateAccount = ({ handleShowAccess }) => {
  const { showAccess } = useContext(DashboardContext);
  return (
    <div className={!showAccess ? 'signup-card' : 'hidden'}>
      <AccessCard>
        <form>
          <h4>Create your account</h4>
          <p>Enter your personal details to create account</p>

          <div className="form-group name-group">
            <div className="firstname-group">
              <label htmlFor="firstname">Your Name</label>
              <br />
              <input type="text" id="firstname" required placeholder="First Name" />
            </div>
            <div className="lastname-group">
              <input type="text" id="lastname" required placeholder="Last Name" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <br />
            <input type="email" id="email" required placeholder="example@gocabnow.com" />
          </div>
          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" required placeholder="***************" />
          </div>
          <div className="form-group">
            <div className="btn">
              <button className="signup-btn" type="submit">Create Account</button>
            </div>
          </div>
          <h6 className="text-muted">Or Signup With</h6>
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
