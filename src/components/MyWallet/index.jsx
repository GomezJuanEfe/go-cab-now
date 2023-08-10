/* eslint-disable jsx-a11y/label-has-associated-control */
import './MyWallet.scss';
import { useContext } from 'react';
import { PaymentContext } from '../../store/PaymentContext';

const MyWallet = () => {
  const { selectBankForm, handleSelectBankForm } = useContext(PaymentContext);

  return (

    <div className="form__payment">

      <div className="card__wallet">

        <form className="wallet-section">

          <h6>SELECT YOUR WALLET</h6>

          <div className="row_wallet">

            <div className="form-check_col-md-6">
              <input
                id="adyen"
                name="selectedBank"
                className="form-check-input"
                value="adyen"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'adyen'}
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
                name="selectedBank"
                className="form-check-input"
                value="airtel"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'airtel'}
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
                name="selectedBank"
                className="form-check-input"
                value="wallet"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'wallet'}
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
                name="selectedBank"
                className="form-check-input"
                value="apple"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'apple'}
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
                name="selectedBank"
                className="form-check-input"
                value="brinks"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'brinks'}
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
                name="selectedBank"
                className="form-check-input"
                value="free"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'free'}
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
