import React, { useContext, useState } from 'react';
import axios from 'axios';
import './AccessCreateAccount.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import AccessCard from '../AccessCard';
import { DashboardContext } from '../../store/DashboardContext';
import { FormContext } from '../../store/FormContext';
import LoadingModal from '../LoadingModal';
import Modal from '../Modal';

const URL = import.meta.env.VITE_API_URL;

const AccessCreateAccount = ({ handleShowAccess }) => {
  const { showAccess } = useContext(DashboardContext);
  const { signInForm, handleSignInForm, resetSignInForm } = useContext(FormContext);
  const [modal, setModal] = useState({ show: false, msg: '', title: '' });
  const [loadingModal, setLoadingModal] = useState(false);

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    setLoadingModal(true);

    axios.post(`${URL}/api/users`, signInForm)
      .then(({ data }) => {
        setModal({ show: true, title: 'Great!', msg: data.message });

        resetSignInForm({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
        });
      })
      .catch((err) => {
        setModal({ show: true, title: 'Error!', msg: err.message });
      })
      .finally(() => {
        setLoadingModal(false);
      });
  };

  const handleOkButton = () => {
    setModal({ ...modal, show: false });
    handleShowAccess();
  };

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
                name="first_name"
                required
                placeholder="First Name"
                onChange={handleSignInForm}
                value={signInForm.first_name}
              />
            </div>
            <div className="lastname-group">
              <input
                type="text"
                id="lastname"
                name="last_name"
                required
                placeholder="Last Name"
                onChange={handleSignInForm}
                value={signInForm.last_name}
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
              name="email"
              required
              placeholder="example@gocabnow.com"
              value={signInForm.email}
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
      <Modal showModal={modal.show} handleShowModal={() => setModal({ ...modal, show: false })}>
        <h2>{modal.title}</h2>
        <p>{modal.msg}</p>
        <div className="center">
          <button className="secondary-button" onClick={handleOkButton} type="button">Ok</button>
        </div>
      </Modal>
      <LoadingModal show={loadingModal} />
    </div>
  );
};

export default AccessCreateAccount;
