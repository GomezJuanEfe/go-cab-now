// import React, { useContext } from 'react';
// import useSWRMutation from 'swr/mutation';
// import axios from 'axios';
import './AccesLogIn.scss';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import AccessCard from '../AccessCard';

// import { FormContext } from '../../store/FormContext';

/* const URL = 'https://jsonplaceholder.typicode.com/posts';

const sendRequest = async (url, data) => {
  const resp = await axios.post(url, data);
  return resp;
}; */

const AccessLogIn = () => {
  /* const { loginForm, handleLoginForm } = useContext(FormContext);
  const { trigger, isMutating, error } = useSWRMutation(URL, sendRequest);

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const resolve = await trigger(loginForm);
    return resolve;
  };
  if (isMutating) return <div>Adding post...</div>;
  if (error) return <div>Failed to add post</div>; */

  /* if (!showLogIn) {
    return null;
  } */
  console.log('Login');

  return (
    <AccessCard>
      <form>
        <h4>Sign in to account</h4>
        <p>Enter your email & password to login</p>
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
          <span>Create Account</span>
        </p>
      </form>
    </AccessCard>
  );
};

export default AccessLogIn;
