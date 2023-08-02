import React from 'react';

const MyWallet = () => (
  <div className="form__payment">
    <div className="card__wallet">
      <form className="wallet-section">
        <h6>SELECT YOUR WALLET</h6>

        <div className="row">

          <div className="form-check col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              Adyen
              <input
                className="form-check-input radio_animated"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
            </label>
          </div>
          <div className="form-check col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              Airtel Wallet
              <input
                className="form-check-input radio_animated"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
            </label>
          </div>
          <div className="form-check col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              Apple Pay
              <input
                className="form-check-input radio_animated"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
            </label>
          </div>
          <div className="form-check col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              Brinks
              <input
                className="form-check-input radio_animated"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
            </label>
          </div>
          <div className="form-check col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              CardFree
              <input
                className="form-check-input radio_animated"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
            </label>
          </div>
          <div className="form-check col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              JPMorgan Chase & Co.
              <input
                className="form-check-input radio_animated"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
            </label>
          </div>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="net-b">
            Select Bank
            <select className="form-control">
              <option selected>Choose Bank...</option>
            </select>
          </label>
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
