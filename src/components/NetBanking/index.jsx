/* eslint-disable jsx-a11y/label-has-associated-control */
import './NetBanking.scss';
import { useContext } from 'react';
import { FormContext } from '../../store/FormContext';

const NetBanking = () => {
  const { selectForm, handleSelectForm } = useContext(FormContext);

  return (
    <div className="form__banking">

      <div className="card__banking">

        <form className="baking-section">

          <h6>SELECT POPULAR BANKS</h6>

          <div className="row_banking">

            <div className="form-check_col-md-6">
              <input
                id="industrial"
                name="industrial"
                className="form-check-input"
                type="radio"
                value={selectForm.industrial}
                onChange={handleSelectForm}
              />
              <label
                htmlFor="industrial"
                className="text__radio"
              >
                Industrial & Commercial Bank
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="construction"
                name="construction"
                className="form-check-input"
                type="radio"
                value={selectForm.construction}
                onChange={handleSelectForm}
              />
              <label
                htmlFor="construction"
                className="text__radio"
              >
                Construction Bank Corp.
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                className="form-check-input"
                type="radio"
                value="option1"

                name="radiocls"
              />
              <label className="text__radio">
                Agricultural Bank
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                className="form-check-input"
                type="radio"
                value="option1"

                name="radiocls"
              />
              <label className="text__radio">
                HSBC Holdings
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                className="form-check-input"
                type="radio"
                value="option1"

                name="radiocls"
              />
              <label className="text__radio">
                Bank of America
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                className="form-check-input"
                type="radio"
                value="option1"

                name="radiocls"
              />
              <label className="text__radio">
                JPMorgan Chase & Co.
              </label>
            </div>

          </div>
          <div className="title_select_bank">
            <div>
              Select Bank
              <select className="form-control_net">
                <option>Choose Bank...</option>
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
};

export default NetBanking;
