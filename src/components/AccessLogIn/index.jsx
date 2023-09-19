import React, { useContext, useState } from 'react';
import axios from 'axios';
import './AccesLogIn.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AccessCard from '../AccessCard';
import { DashboardContext } from '../../store/DashboardContext';
import { FormContext } from '../../store/FormContext';
import { UserContext } from '../../store/UserContext';
import Modal from '../Modal';
import Loading from '../Loading';
import LoadingModal from '../LoadingModal';

const URL = import.meta.env.VITE_API_URL;

const AccessLogIn = ({ handleShowAccess }) => {
  const { showAccess } = useContext(DashboardContext);
  const { loginForm, handleLoginForm, resetLoginForm } = useContext(FormContext);
  const { setIsLogged } = useContext(UserContext);
  const [modal, setModal] = useState({ show: false, msg: '', title: '' });
  const [loading, setLoading] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  const navigate = useNavigate();

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    setLoadingModal(true);

    axios.post(`${URL}/auth/local/login`, loginForm)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        setIsLogged(true);
        navigate('/user-profile');
      })
      .catch((err) => {
        setModal({ title: 'Ops... There was an error', msg: err.message, show: true });
      })
      .finally(() => {
        setLoadingModal(false);
      });

    resetLoginForm({
      email: '',
      password: '',
    });
  };

  const handleForgotPassword = async () => {
    if (loginForm.email) {
      try {
        setLoading(true);
        setModal({ ...modal, show: true });
        const { data } = await axios.get(`${URL}/auth/local/generate-token-forgot-password/${loginForm.email}`);
        setLoading(false);
        setModal({ ...modal, msg: data.message, show: true });
      } catch ({ message }) {
        setLoading(false);
        setModal({
          show: true, msg: message, title: 'Error',
        });
      }
    } else {
      setModal({ ...modal, show: true, msg: 'Enter an email, please' });
    }
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
              <p onClick={handleForgotPassword}>
                Forgot password?
              </p>
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
      <Modal
        showModal={modal.show}
        handleShowModal={() => setModal({ ...modal, show: false })}
      >
        <div className="center alert-icon">
          <FiAlertTriangle />
        </div>
        { loading
          ? (<Loading />)
          : (
            <>
              <h2>{modal.title || 'Email verification'}</h2>
              <p>{modal.msg}</p>
              <div className="center">
                <button className="secondary-button" onClick={() => setModal({ ...modal, show: false })} type="button">Ok</button>
              </div>
            </>
          )}
      </Modal>
      <LoadingModal show={loadingModal} />
    </div>
  );
};

export default AccessLogIn;
