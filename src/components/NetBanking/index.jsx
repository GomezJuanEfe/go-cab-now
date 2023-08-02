import './NetBanking.scss';

const NetBanking = () => (
  <div className="form__payment">
    <div className="card__banking">
      <form className="baking-section">
        <h6>SELECT POPULAR BANKS</h6>
        <div className="row">
          <div className="form-check col-md-6">
            <label className="form-check-label" htmlFor="Radios1">
              Industrial & Commercial Bank
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
              Construction Bank Corp.
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
              Agricultural Bank
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
              HSBC Holdings
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
              Bank of America
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

export default NetBanking;
