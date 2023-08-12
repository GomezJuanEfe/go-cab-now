/* eslint-disable jsx-a11y/label-has-associated-control */
import './MyWallet.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { PaymentContext } from '../../store/PaymentContext';

const MyWallet = () => {
  const {
    selectWalletForm,
    handleSelectWalletForm,
  } = useContext(PaymentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post('https://api.paystack.co/charge', {.....selectwalletForm})
  };
  return (

    <div className="form__payment">

      <div className="card__wallet">

        <form className="wallet-section" onSubmit={handleSubmit}>

          <h6>SELECT YOUR WALLET</h6>

          <div className="row_wallet">

            <div className="form-check_col-md-6">
              <input
                id="adyen"
                name="selectedWallet"
                className="form-check-input"
                value="adyen"
                type="radio"
                onChange={handleSelectWalletForm}
                checked={selectWalletForm.selectedWallet === 'adyen'}
              />
              <label
                htmlFor="adyen"
                className="text__radio"
              >
                Adyen
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="airtel"
                name="selectedWallet"
                className="form-check-input"
                value="airtel"
                type="radio"
                onChange={handleSelectWalletForm}
                checked={selectWalletForm.selectedWallet === 'airtel'}
              />
              <label
                htmlFor="airtel"
                className="text__radio"
              >
                Airtel Money
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="wallet"
                name="selectedWallet"
                className="form-check-input"
                value="wallet"
                type="radio"
                onChange={handleSelectWalletForm}
                checked={selectWalletForm.selectedWallet === 'wallet'}
              />
              <label
                htmlFor="wallet"
                className="text__radio"
              >
                Airtel Wallet
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="apple"
                name="selectedWallet"
                className="form-check-input"
                value="apple"
                type="radio"
                onChange={handleSelectWalletForm}
                checked={selectWalletForm.selectedWallet === 'apple'}
              />
              <label
                htmlFor="apple"
                className="text__radio"
              >
                Apple Pay
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="brinks"
                name="selectedWallet"
                className="form-check-input"
                value="brinks"
                type="radio"
                onChange={handleSelectWalletForm}
                checked={selectWalletForm.selectedWallet === 'brinks'}
              />
              <label
                htmlFor="brinks"
                className="text__radio"
              >
                Brinks
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="free"
                name="selectedWallet"
                className="form-check-input"
                value="free"
                type="radio"
                onChange={handleSelectWalletForm}
                checked={selectWalletForm.selectedWallet === 'free'}
              />
              <label
                htmlFor="free"
                className="text__radio"
              >
                CardFree
              </label>
            </div>

          </div>

          <div className="payment-btn">
            <NavLink
              to="/success"
            >
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="btn_payment"
              >
                MAKE PAYMENT
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyWallet;
