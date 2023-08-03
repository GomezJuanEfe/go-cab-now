import './NetBanking.scss';

const NetBanking = () => (
  <div className="form__banking">
    <div className="card__banking">
      <form className="baking-section">
        <h6>SELECT POPULAR BANKS</h6>
        <div className="row_banking">
          <div className="form-check_col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              <div className="input_radio_payment_2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option1"
                  checked
                  name="radiocls"
                />
              </div>
              Industrial & Commercial Bank
            </label>
          </div>
          <div className="form-check_col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              <div className="input_radio_payment_2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option1"
                  checked
                  name="radiocls"
                />
              </div>
              Construction Bank Corp.
            </label>
          </div>
          <div className="form-check_col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              <div className="input_radio_payment_2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option1"
                  checked
                  name="radiocls"
                />
              </div>
              Agricultural Bank
            </label>
          </div>
          <div className="form-check_col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              <div className="input_radio_payment_2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option1"
                  checked
                  name="radiocls"
                />
              </div>
              HSBC Holdings
            </label>
          </div>
          <div className="form-check_col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              <div className="input_radio_payment_2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option1"
                  checked
                  name="radiocls"
                />
              </div>
              Bank of America
            </label>
          </div>
          <div className="form-check_col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              <div className="input_radio_payment_2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="option1"
                  checked
                  name="radiocls"
                />
              </div>
              JPMorgan Chase & Co.
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

export default NetBanking;
