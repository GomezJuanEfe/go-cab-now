import './NetBanking.scss';

const NetBanking = () => (
  <div className="form__banking">

    <div className="card__banking">

      <form className="baking-section">

        <h6>SELECT POPULAR BANKS</h6>

        <div className="row_banking">

          <div className="form-check_col-md-6">
            <div className="form__check">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
              <div className="text__radio">
                Industrial & Commercial Bank
              </div>
            </div>
          </div>
          <div className="form-check_col-md-6">
            <div className="form__check">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
              <div className="text__radio">
                Construction Bank Corp.
              </div>
            </div>
          </div>
          <div className="form-check_col-md-6">
            <div className="form__check">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
              <div className="text__radio">
                Agricultural Bank
              </div>
            </div>
          </div>
          <div className="form-check_col-md-6">
            <div className="form__check">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
              <div className="text__radio">
                HSBC Holdings
              </div>
            </div>
          </div>
          <div className="form-check_col-md-6">
            <div className="form__check">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
              <div className="text__radio">
                Bank of America
              </div>
            </div>
          </div>
          <div className="form-check_col-md-6">
            <div className="form__check">
              <input
                className="form-check-input"
                type="radio"
                value="option1"
                checked
                name="radiocls"
              />
              <div className="text__radio">
                JPMorgan Chase & Co.
              </div>
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <div htmlFor="net-b">
            Select Bank
            <select className="form-control">
              <option selected>Choose Bank...</option>
            </select>
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

export default NetBanking;
