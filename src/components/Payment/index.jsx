/* eslint-disable jsx-a11y/label-has-associated-control */
import './Payment.scss';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from '../Checkout';
import FormTemplate from '../FormTemplate';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';
import creditcard from '../../assets/icons/creditcards.png';
import Cvv from '../../assets/icons/cvv.png';
import NetBanking from '../NetBanking';
import MyWallet from '../MyWallet';
import '../FormTemplate/FormTemplate.scss';
import { PaymentContext } from '../../store/PaymentContext';
import { checkForm, convertPriceToPennies } from '../../services/utils';
import { FormContext } from '../../store/FormContext';
import { CarContext } from '../../store/CarContext';
import { pickerDateToDateFormat } from '../../services/DateFormat';

const stripePromise = loadStripe('pk_test_51NntkQKjWbEgSGch5a0c8ajoYKWr2NPDi1A51X1zbVWtN4ifd9QIHFkTnneRQ7eqHNAkNsduXPeMdwIhkZTu4nc200zJzuQQDM');

const URL = import.meta.env.VITE_API_URL;

const Payment = () => {
  const [active, setActive] = useState(undefined);
  const [activeForm, setActiveForm] = useState('Debit Card'); // CreditCard || DebitCard || Bank || Wallet

  const { tripForm, contactForm, successfulPayment } = useContext(FormContext);
  const { selectedCar, selectedCarPrice } = useContext(CarContext);

  const priceFormated = convertPriceToPennies(selectedCarPrice);
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
            <Elements stripe={stripePromise}>
              <Checkout totalPrice={priceFormated} />
            </Elements>
          </FormTemplate>

          <FormTemplate
            className="title__container"
            title="Credit Card"
            active={active}
            setActive={setActive}
            id={2}
            handleChange={() => handleFormChange('Credit Card')}
          >
            <Elements stripe={stripePromise}>
              <Checkout totalPrice={priceFormated} />
            </Elements>
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
