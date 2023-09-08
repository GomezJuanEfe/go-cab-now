/* eslint-disable jsx-a11y/label-has-associated-control */
import './Payment.scss';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import FormTemplate from '../FormTemplate';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';
import creditcard from '../../assets/icons/creditcards.png';
import Cvv from '../../assets/icons/cvv.png';
import NetBanking from '../NetBanking';
import MyWallet from '../MyWallet';
import '../FormTemplate/FormTemplate.scss';
import { PaymentContext } from '../../store/PaymentContext';
import { checkForm } from '../../services/utils';
import { FormContext } from '../../store/FormContext';
import { CarContext } from '../../store/CarContext';
import { pickerDateToDateFormat } from '../../services/DateFormat';
import { convertPriceToPennies } from '../../services/utils';

const URL = import.meta.env.VITE_API_URL;

const Payment = () => {
  const [active, setActive] = useState(undefined);
  const [activeForm, setActiveForm] = useState('Debit Card'); // CreditCard || DebitCard || Bank || Wallet

  const { tripForm } = useContext(FormContext);
  const { selectedCar, selectedCarPrice } = useContext(CarContext);

  const priceFormated = convertPriceToPennies(selectedCarPrice) ;
  const dateFormated = pickerDateToDateFormat(tripForm.pickUpDate);

  const {
    debitCardForm,
    creditCardForm,
    handleDebitCardForm,
    handleCreditCardForm,
    resetGeneralForm,
  } = useContext(PaymentContext);

  const fetchCreateTrip = async () => {
    try {
      await axios.post(
        `${URL}/api/trips`,
        {
          origin_latitude: tripForm.pickUpLoc,
          destination_latitude: tripForm.dropOffLoc,
          car_id: selectedCar.id,
          total: priceFormated,
          date: dateFormated,
          contact_first_name: contactForm.firstName,
          contact_last_name: contactForm.lastName,
          contact_email: contactForm.emailAddress,
          contact_phone: contactForm.contactPhone,
          contact_request: contactForm.specialRequest,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormChange = () => {
    resetGeneralForm();
    setActiveForm(activeForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchCreateTrip();
  };

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

          <FormTemplate
            className="title__container"
            title="Debit Card"
            active={active}
            setActive={setActive}
            id={1}
            handleChange={() => handleFormChange('Debit Card')}
          >

            <form action="form__payment" onSubmit={handleSubmit}>

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
                  type="submit"
                  className="btn_payment"
                >
                  MAKE PAYMENT
                </button>
                {/* {checkForm(debitCardForm)
                  ? (
                    <NavLink to="/success">
                      <button
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
                        type="submit"
                        className="btn_payment"
                      >
                        MAKE PAYMENT
                      </button>
                    </NavLink>
                  )} */}
              </div>

            </form>

          </FormTemplate>

          <FormTemplate
            className="title__container"
            title="Credit Card"
            active={active}
            setActive={setActive}
            id={2}
            handleChange={() => handleFormChange('Credit Card')}
          >

            <form action="form__payment" onSubmit={handleSubmit}>

              <div className="form-group">
                <label
                  htmlFor="nameCard"
                  className="title__inputs"
                >
                  Name On Card
                </label>
                <input
                  id="nameCard"
                  name="nameCard"
                  type="text"
                  className="form-control"
                  value={creditCardForm.nameCard}
                  onChange={handleCreditCardForm}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="cardNumberCredit"
                  className="title__inputs"
                >
                  Card Number
                </label>
                <input
                  id="cardNumberCredit"
                  name="cardNumberCredit"
                  type="number"
                  className="form-control"
                  value={creditCardForm.cardNumberCredit}
                  onChange={handleCreditCardForm}
                />
                <img src={creditcard} alt="creditcard" className="img_credit" />
              </div>

              <div className="row__inputs">

                <div className="form-group_select">
                  <label
                    htmlFor="monthCredit"
                    className="title__inputs"
                  >
                    Month
                  </label>
                  <br />
                  <select
                    id="monthCredit"
                    name="monthCredit"
                    className="form-control_cvv"
                    value={creditCardForm.monthCredit}
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
                    htmlFor="yearCredit"
                    className="title__inputs"
                  >
                    Year
                  </label>
                  <br />
                  <select
                    id="yearCredit"
                    name="yearCredit"
                    className="form-control_cvv"
                    value={creditCardForm.yearCredit}
                    onChange={handleCreditCardForm}
                  >
                    <option>Year...</option>
                    <option>...</option>
                  </select>
                </div>

                <div className="form-group_select">
                  <label
                    htmlFor="cvvCredit"
                    className="title__inputs"
                  >
                    Cvv
                  </label>
                  <br />
                  <input
                    id="cvvCredit"
                    name="cvvCredit"
                    type="password"
                    maxLength="4"
                    className="form-control_cvv"
                    value={creditCardForm.cvvCredit}
                    onChange={handleCreditCardForm}
                  />
                  <div className="img_cvv">
                    <img src={Cvv} alt="cvv" />
                  </div>
                </div>

              </div>

              <div className="payment-btn">
                {checkForm(creditCardForm)
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

          </FormTemplate>

          <FormTemplate
            className="title__container"
            title="Net Banking"
            active={active}
            setActive={setActive}
            id={3}
            handleChange={() => handleFormChange('Net Banking')}
          >
            <NetBanking />
          </FormTemplate>

          <FormTemplate
            className="title__container"
            title="My Wallet"
            active={active}
            setActive={setActive}
            id={4}
            handleChange={() => handleFormChange('My Wallet')}
          >
            <MyWallet />
          </FormTemplate>
        </div>

      </div>
    </section>

  );
};
export default Payment;
