/* eslint-disable jsx-a11y/label-has-associated-control */
import './Payment.scss';
import { useContext, useState } from 'react';
import FormTemplate from '../FormTemplate';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';
import creditcard from '../../assets/icons/creditcards.png';
import Cvv from '../../assets/icons/cvv.png';
import NetBanking from '../NetBanking';
import MyWallet from '../MyWallet';
import '../FormTemplate/FormTemplate.scss';
import { FormContext } from '../../store/FormContext';

const Payment = () => {
  const [active, setActive] = useState(undefined);
  const { debitCardForm, handleDebitCardForm } = useContext(FormContext);
  const { creditCardForm, handleCreditCardForm } = useContext(FormContext);

  console.log(debitCardForm);
  // console.log(creditCardForm);

  return (
    <section className="payment">

      <div className="colum-components">
        <BookingSummery />
        <CouponCode />
      </div>

      <div className="container__payment">

        <div className="container__title">
          <h4>Payment Option</h4>
        </div>
        <div className="container__card_payment">

          <FormTemplate className="title__container" title="Debit Card" active={active} setActive={setActive} id={1}>

            <form action="form__payment">

              <div className="form-group">
                <label
                  htmlFor="nameOnCard"
                  className="title__inputs"
                >
                  Name On Card
                </label>
                <input
                  id="nameOnCard"
                  name="nameOnCard"
                  type="text"
                  className="form-control"
                  value={debitCardForm.nameOnCard}
                  onChange={handleDebitCardForm}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="cardNumber"
                  className="title__inputs"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="number"
                  className="form-control"
                  value={debitCardForm.cardNumber}
                  onChange={handleDebitCardForm}
                />
                <div className="img_credit">
                  <img src={creditcard} alt="creditcard" />
                </div>
              </div>
              <div className="row__inputs">

                <div className="form-group_select">
                  <label
                    htmlFor="month"
                    className="title__inputs"
                  >
                    Month
                  </label>
                  <br />
                  <select
                    id="month"
                    name="month"
                    className="form-control_cvv"
                    value={debitCardForm.month}
                    onChange={handleDebitCardForm}
                  >
                    <option>Month...</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>

                <div className="form-group_select">
                  <label
                    htmlFor="year"
                    className="title__inputs"
                  >
                    Year
                  </label>
                  <br />
                  <select
                    id="year"
                    name="year"
                    className="form-control_cvv"
                    value={debitCardForm.year}
                    onChange={handleDebitCardForm}
                  >
                    <option>Year...</option>
                    <option>...</option>
                  </select>
                </div>

                <div className="form-group_select">
                  <label
                    htmlFor="cvv"
                    className="title__inputs"
                  >
                    Cvv
                  </label>
                  <br />
                  <input
                    id="cvv"
                    name="cvv"
                    type="password"
                    maxLength="4"
                    className="form-control_cvv"
                    value={debitCardForm.cvv}
                    onChange={handleDebitCardForm}
                  />
                  <div className="img_cvv">
                    <img src={Cvv} alt="cvv" />
                  </div>
                </div>

              </div>
              <div className="payment-btn">
                <button
                  type="button"
                  className="btn_payment"
                >
                  MAKE PAYMENT
                </button>
              </div>

            </form>

          </FormTemplate>

          <FormTemplate className="title__container" title="Credit Card" active={active} setActive={setActive} id={2}>

            <form action="form__payment">

              <div className="form-group">
                <label
                  htmlFor="nameOnCard"
                  className="title__inputs"
                >
                  Name On Card
                </label>
                <input
                  id="nameOnCard"
                  name="nameOnCard"
                  type="text"
                  className="form-control"
                  value={creditCardForm.nameOnCard}
                  onChange={handleCreditCardForm}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="cardNumber"
                  className="title__inputs"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="number"
                  className="form-control"
                  value={creditCardForm.cardNumber}
                  onChange={handleCreditCardForm}
                />
                <img src={creditcard} alt="creditcard" className="img_credit" />
              </div>

              <div className="row__inputs">

                <div className="form-group_select">
                  <label
                    htmlFor="month"
                    className="title__inputs"
                  >
                    Month
                  </label>
                  <br />
                  <select
                    id="month"
                    name="month"
                    className="form-control_cvv"
                    value={creditCardForm.month}
                    onChange={handleCreditCardForm}
                  >
                    <option>Month...</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>

                <div className="form-group_select">
                  <label
                    htmlFor="year"
                    className="title__inputs"
                  >
                    Year
                  </label>
                  <br />
                  <select
                    id="year"
                    name="year"
                    className="form-control_cvv"
                    value={creditCardForm.year}
                    onChange={handleCreditCardForm}
                  >
                    <option>Year...</option>
                    <option>...</option>
                  </select>
                </div>

                <div className="form-group_select">
                  <label
                    htmlFor="cvv"
                    className="title__inputs"
                  >
                    Cvv
                  </label>
                  <br />
                  <input
                    id="cvv"
                    name="cvv"
                    type="password"
                    maxLength="4"
                    className="form-control_cvv"
                    value={creditCardForm.cvv}
                    onChange={handleCreditCardForm}
                  />
                  <div className="img_cvv">
                    <img src={Cvv} alt="cvv" />
                  </div>
                </div>

              </div>

              <div className="payment-btn">
                <button
                  type="button"
                  className="btn_payment"
                >
                  MAKE PAYMENT
                </button>
              </div>

            </form>

          </FormTemplate>

          <FormTemplate className="title__container" title="Net Banking" active={active} setActive={setActive} id={3}>
            <NetBanking />
          </FormTemplate>

          <FormTemplate className="title__container" title="My Wallet" active={active} setActive={setActive} id={4}>
            <MyWallet />
          </FormTemplate>
        </div>
      </div>

    </section>

  );
};
export default Payment;
