/* eslint-disable jsx-a11y/label-has-associated-control */
import './Payment.scss';
import { useContext, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from '../Checkout';
import FormTemplate from '../FormTemplate';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';
import NetBanking from '../NetBanking';
import MyWallet from '../MyWallet';
import '../FormTemplate/FormTemplate.scss';
import { PaymentContext } from '../../store/PaymentContext';

const stripePromise = loadStripe('pk_test_51NntkQKjWbEgSGch5a0c8ajoYKWr2NPDi1A51X1zbVWtN4ifd9QIHFkTnneRQ7eqHNAkNsduXPeMdwIhkZTu4nc200zJzuQQDM');

const Payment = () => {
  const [active, setActive] = useState(undefined);
  const [activeForm, setActiveForm] = useState('Debit Card'); // CreditCard || DebitCard || Bank || Wallet
  const { resetGeneralForm } = useContext(PaymentContext);

  const handleFormChange = () => {
    resetGeneralForm();
    setActiveForm(activeForm);
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
              <Checkout />
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
              <Checkout />
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
