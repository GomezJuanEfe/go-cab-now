import './MyWallet.scss';

const MyWallet = () => (
  <div className="form__payment">

    <div className="card__wallet">

      <form className="wallet-section">

        <h6>SELECT YOUR WALLET</h6>

        <div className="row_wallet">

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Adyen
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Airtel Money
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Airtel Wallet
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Apple Pay
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              Brinks
            </div>
          </div>

          <div className="form-check_col-md-6">
            <input
              className="form-check-input"
              type="radio"
              value="option1"
              checked
              name="radiocls"
            />
            <div className="text__radio">
              CardFree
            </div>
          </div>

        </div>

        <div className="payment-btn">
          <button type="button" className="btn_payment">
            MAKE PAYMENT
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default MyWallet;
