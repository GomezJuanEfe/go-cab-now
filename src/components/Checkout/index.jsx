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

const Checkout = ({ totalPrice }) => {
  const { setSuccessfulPayment, successfulPayment } = useContext(FormContext)
  const stripe = useStripe();
  const elements = useElements();

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
        amount: totalPrice,
      });
      alert('Thanks for your Booking');
      setSuccessfulPayment(true);
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
