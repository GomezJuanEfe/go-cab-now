/* eslint-disable jsx-a11y/label-has-associated-control */
import './MyWallet.scss';
import { useState } from 'react';

const MyWallet = () => {
  const [selectWallet, setSelectWallet] = useState(undefined);
  console.log(selectWallet);
  const handleRadioChange = (e) => {
    setSelectWallet(e.target.value);
  };

  return (

    <div className="form__payment">

      <div className="card__wallet">

        <form className="wallet-section">

          <h6>SELECT YOUR WALLET</h6>

          <div className="row_wallet">

            <div className="form-check_col-md-6">
              <input
                id="adyen"
                name="adyen"
                className="form-check-input"
                value="adyen"
                type="radio"
                onChange={handleRadioChange}
                checked={selectWallet === 'adyen'}
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
                name="airtel"
                className="form-check-input"
                value="airtel"
                type="radio"
                onChange={handleRadioChange}
                checked={selectWallet === 'airtel'}
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
                name="wallet"
                className="form-check-input"
                value="wallet"
                type="radio"
                onChange={handleRadioChange}
                checked={selectWallet === 'wallet'}
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
                name="apple"
                className="form-check-input"
                value="apple"
                type="radio"
                onChange={handleRadioChange}
                checked={selectWallet === 'apple'}
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
                name="brinks"
                className="form-check-input"
                value="brinks"
                type="radio"
                onChange={handleRadioChange}
                checked={selectWallet === 'brinks'}
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
                name="free"
                className="form-check-input"
                value="free"
                type="radio"
                onChange={handleRadioChange}
                checked={selectWallet === 'free'}
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
            <button
              type="submit"
              className="btn_payment"
            >
              MAKE PAYMENT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyWallet;
