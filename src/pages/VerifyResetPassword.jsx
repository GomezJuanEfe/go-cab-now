import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/Header';
import BannerPages from '../components/BannerPages';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SuccessItem from '../components/SuccessItem';
import Failed from '../components/Failed';
import Modal from '../components/Modal';

const URL = import.meta.env.VITE_API_URL;

const VerifyAccount = () => {
  const [loading, setLoading] = useState(true);
  console.log('🚀 ~ file: VerifyResetPassword.jsx:16 ~ VerifyAccount ~ loading:', loading);
  const [responseMsg, setResponseMsg] = useState('');
  const [error, setError] = useState(false);
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState({
    show: false, msg: '', title: '', error: false,
  });
  console.log('🚀 ~ file: VerifyResetPassword.jsx:23 ~ VerifyAccount ~ modal:', modal);

  useEffect(() => {
    setLoading(true);
    axios.get(`${URL}/auth/local/check-token-forgot-password/${token}`)
      .then(() => {
        setLoading(false);
      })
      .catch(({ message }) => {
        setResponseMsg(message);
        setLoading(false);
        setError(true);
      });
  }, []);

  const handleChangePassword = async () => {
    try {
      const { data } = await axios.post(`${URL}/auth/local/reset-password/${token}`, { password });
      setModal({ show: true, msg: data.message, title: 'Great!!' });
    } catch ({ message }) {
      setModal({
        show: true, msg: message, title: 'Ops, something went wrong...', error: true,
      });
    }
  };

  return (
    <>
      <Header />
      <BannerPages pageName="Reset Password" />
      <main>
        <section className="verify-account-section">
          {
            loading
            && <Loading text="Verifing your token..." />
          }
          {
            !loading && !error
            && (
              <SuccessItem
                title="Great!!"
                body="Now, you can change your password!"
              >
                <div className="form-group password-group">
                  <label htmlFor="sign-in-password">Password</label>
                  <br />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="sign-in-password"
                    name="password"
                    required
                    placeholder="***************"
                    value={password}
                  />
                  <br />
                  <button type="button" className="secondary-button" onClick={handleChangePassword}>Submit</button>
                </div>
              </SuccessItem>
            )
          }
          {
            error
            && (
              <Failed
                title="Oops! Something went wrong..."
                body={responseMsg}
              >
                <button type="button" className="secondary-button">
                  <NavLink to="/">
                    Home
                  </NavLink>
                </button>
              </Failed>
            )
          }
        </section>
      </main>
      <Modal showModal={modal.show} handleShowModal={() => setModal({ ...modal, show: false })}>
        {
          loading
            ? <Loading />
            : (
              <>
                <h2>{modal.title}</h2>
                <p>{modal.msg}</p>
                {!modal.error
                  && (
                    <div className="center">
                      <button className="secondary-button" type="button">
                        <NavLink to="/access">
                          Login
                        </NavLink>
                      </button>
                    </div>
                  )}
              </>
            )
        }
      </Modal>
      <Footer />
    </>
  );
};

export default VerifyAccount;
