import React, { useContext } from 'react';
import './Checkout.scss';
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import creditcard from '../../assets/icons/creditcards.png';
import Cvv from '../../assets/icons/cvv.png';
import { FormContext } from '../../store/FormContext';
import { CarContext } from '../../store/CarContext';
import { pickerDateToDateFormat } from '../../services/DateFormat';
import { convertPriceToPennies } from '../../services/utils';

const URL = import.meta.env.VITE_API_URL;

const Checkout = () => {
  const {
    tripForm,
    contactForm,
  } = useContext(FormContext);
  const { selectedCar, selectedCarPrice } = useContext(CarContext);
  const stripe = useStripe();
  const elements = useElements();

  const priceFormated = convertPriceToPennies(selectedCarPrice);
  const dateFormated = pickerDateToDateFormat(tripForm.pickUpDate);

  const fetchCreateTrip = async () => {
    console.log("start fetchCreateTrip");
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(
          CardNumberElement,
          CardExpiryElement,
          CardCvcElement,
        ),
      });
      if (error) {
        alert(error);
        return;
      }

      const response = await axios.post('http://localhost:8080/api/payment', {
        id: paymentMethod.id,
        amount: priceFormated,
      });
      alert('Thanks for your Booking');
      fetchCreateTrip();
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement,
      ).clear();
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="nameOnCard" className="title__inputs">
          Name On Card
        </label>
        <input className="form-control" id="nameOnCard" type="text" required />
      </div>

      <div className="form-group">
        <label htmlFor="card-number" className="title__inputs">Card Number</label>
        <CardNumberElement id="card-number" className="form-control stripe-input" required />
        <div className="img_credit">
          <img src={creditcard} alt="creditcard" />
        </div>
      </div>

      <div className="exp-cvv">
        <div className="form-group">
          <label className="title__inputs">Expiration</label>
          <CardExpiryElement className="form-control stripe-input" required />
        </div>

        <div className="form-group">
          <label className="title__inputs">CVC</label>
          <CardCvcElement className="form-control stripe-input" required />
          <div className="img_cvv">
            <img src={Cvv} alt="cvv" />
          </div>
        </div>
      </div>

      <div className="payment-btn">
        <button type="submit" className="btn_payment">
          MAKE PAYMENT
        </button>
      </div>

    </form>
  );
};

export default Checkout;
