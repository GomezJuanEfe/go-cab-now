/* eslint-disable jsx-a11y/label-has-associated-control */
import './NetBanking.scss';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { PaymentContext } from '../../store/PaymentContext';
import { checkForm } from '../../services/utils';

const NetBanking = () => {
  const { selectBankForm, handleSelectBankForm } = useContext(PaymentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post('https://api.paystack.co/charge', {.....selectwalletForm})
  };

  return (
    <div className="form__banking">

      <div className="card__banking">

        <form className="baking-section" onSubmit={handleSubmit}>

          <h6>SELECT POPULAR BANKS</h6>

          <div className="row_banking">

            <div className="form-check_col-md-6">
              <input
                id="industrial"
                name="selectedBank"
                className="form-check-input"
                value="industrial"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'industrial'}
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
                name="selectedBank"
                className="form-check-input"
                value="construction"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'construction'}
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
                id="agricultural"
                name="selectedBank"
                className="form-check-input"
                value="agricultural"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'agricultural'}
              />
              <label
                htmlFor="agricultural"
                className="text__radio"
              >
                Agricultural Bank
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="holdings"
                name="selectedBank"
                className="form-check-input"
                value="holdings"
                type="radio"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'holdings'}
              />
              <label
                htmlFor="holdings"
                className="text__radio"
              >
                HSBC Holdings
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="america"
                name="selectedBank"
                className="form-check-input"
                type="radio"
                value="america"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'america'}
              />
              <label
                htmlFor="america"
                className="text__radio"
              >
                Bank of America
              </label>
            </div>

            <div className="form-check_col-md-6">
              <input
                id="chase"
                name="selectedBank"
                className="form-check-input"
                type="radio"
                value="chase"
                onChange={handleSelectBankForm}
                checked={selectBankForm.selectedBank === 'chase'}
              />
              <label
                htmlFor="chase"
                className="text__radio"
              >
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
            {checkForm(selectBankForm)
              ? (
                <NavLink to="/success">
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="btn_payment"
                  >
                    MAKE PAYMENT
                  </button>
                </NavLink>
              )
              : (
                <NavLink to="/failedpage">
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="btn_payment"
                  >
                    MAKE PAYMENT
                  </button>
                </NavLink>
              )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NetBanking;
