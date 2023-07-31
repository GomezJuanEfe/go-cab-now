//BANKING

import React from 'react';

const NetBanking = () => {
  return (
    <div>

      <div class="card-body">

        <form className="wallet-section">
          <h6>SELECT POPULAR BANKS</h6>
          <div className="row">
            <div class="form-check col-md-6">
              <input className="form-check-input radio_animated"
                value="option1" checked>
                <label class="form-check-label" for="Radios1">
                type="radio" name="radiocls" id="Radios1"
                  Industrial & Commercial Bank
                </label>
            </div>
            <div class="form-check col-md-6">
              <input className="form-check-input radio_animated"
                type="radio" name="radiocls" id="Radios2"
                value="option2">
                <label class="form-check-label" for="Radios2">
                  Construction Bank Corp.
                </label>
            </div>
            <div class="form-check col-md-6">
              <input class="form-check-input radio_animated"
                type="radio" name="radiocls" id="Radios3"
                value="option2">
                <label class="form-check-label" for="Radios3">
                  Agricultural Bank
                </label>
            </div>
            <div class="form-check col-md-6">
              <input class="form-check-input radio_animated"
                type="radio" name="radiocls" id="Radios4"
                value="option2">
                <label class="form-check-label" for="Radios4">
                  HSBC Holdings
                </label>
            </div>
            <div class="form-check col-md-6">
              <input class="form-check-input radio_animated"
                type="radio" name="radiocls" id="Radios5"
                value="option2">
                <label class="form-check-label" for="Radios5">
                  Bank of America
                </label>
            </div>
            <div class="form-check col-md-6">
              <input class="form-check-input  radio_animated"
                type="radio" name="radiocls" id="Radios6"
                value="option2">
                <label class="form-check-label" for="Radios6">
                  JPMorgan Chase & Co.
                </label>
            </div>
          </div>
          <div class="form-group mt-3">
            <label for="net-b">select bank</label>
            <select id="net-b" class="form-control">
              <option selected>Choose Bank...</option>
              <option>...</option>
            </select>
          </div>
          <div className="payment-btn">
            <button type="button" className="btn_payment">
              MAKE PAYMENT
            </button>
          </div>
        </form>
      </div>

    </div>
  )
};

export default NetBanking;
