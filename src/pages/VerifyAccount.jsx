import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { UserContext } from '../store/UserContext';
import Header from '../components/Header';
import BannerPages from '../components/BannerPages';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SuccessItem from '../components/SuccessItem';
import Failed from '../components/Failed';

const URL = import.meta.env.VITE_API_URL;

const VerifyAccount = () => {
  const { setIsLogged } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [responseMsg, setResponseMsg] = useState('');
  const [error, setError] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`${URL}/auth/local/activate-account/${token}`)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        setIsLogged(true);
        setLoading(false);
      })
      .catch(({ message }) => {
        setResponseMsg(message);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <>
      <Header />
      <BannerPages pageName="Verify account" />
      <main>
        <section className="verify-account-section">
          {
            loading
            && <Loading text="Verifing your account..." />
          }
          {
            !loading && !error
            && (
              <SuccessItem
                title="Great!!"
                body="Your account have been verified successfully!"
              >
                <button type="button" className="secondary-button">
                  <NavLink to="/user-profile">
                    Go to your dashboard
                  </NavLink>
                </button>
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
      <Footer />
    </>
  );
};

export default VerifyAccount;
