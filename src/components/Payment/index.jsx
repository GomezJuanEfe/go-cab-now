import './Payment.scss';
import React, { useState } from 'react';
import FormTemplate from '../FormTemplate';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';
import creditcard from '../../assets/icons/creditcards.png';
import Cvv from '../../assets/icons/cvv.png';

const Payment = () => {
  const [active, setActive] = useState(undefined);

  return (
    <section className="payment">

      <div className="col-components">
        <BookingSummery />
        <CouponCode />
      </div>

      <div className="container__payment">

        <div className="container__title">
          <h5>Payment Option</h5>
        </div>

        <FormTemplate className="title__container" title="Debit Card" active={active} setActive={setActive} id={1}>

          <form action="form__payment">

            <div className="form-group">
              <label htmlFor="name">
                Name On Card
                <input type="text" className="form-control" />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="number">
                Card Number
                <input type="number" className="form-control" />
              </label>
              <img src={creditcard} alt="creditcard" className="img_credit" />
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label htmlFor="month">
                  Month
                  <select id="month" className="form-control">
                    <option selected>Month...</option>
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
                </label>
              </div>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="year">
                Year
                <select id="year" className="form-control">
                  <option selected>Year...</option>
                  <option>...</option>
                </select>
              </label>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="cvv">
                Cvv
                <input type="password" maxLength="4" className="form-control" id="cvv" />
                <img src={Cvv} className="cvv" alt="cvv" />
              </label>
            </div>
            <div className="payment-btn">
              <button type="button" className="btn_payment">
                MAKE PAYMENT
              </button>
            </div>

          </form>

        </FormTemplate>

        <FormTemplate className="title__container" title="Credit Card" active={active} setActive={setActive} id={1}>

          <form action="form__payment">

            <div className="form-group">
              <label htmlFor="name">
                Name On Card
                <input type="text" className="form-control" />
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="number">
                Card Number
                <input type="number" className="form-control" />
              </label>
              <img src={creditcard} alt="creditcard" className="img_credit" />
            </div>

            <div className="row">
              <div className="form-group col-md-4">
                <label htmlFor="month">
                  Month
                  <select id="month" className="form-control">
                    <option selected>Month...</option>
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
                </label>
              </div>
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="year">
                Year
                <select id="year" className="form-control">
                  <option selected>Year...</option>
                  <option>...</option>
                </select>
              </label>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="cvv">
                Cvv
                <input type="password" maxLength="4" className="form-control" id="cvv" />
                <img src={Cvv} className="cvv" alt="cvv" />
              </label>
            </div>
            <div className="payment-btn">
              <button type="button" className="btn_payment">
                MAKE PAYMENT
              </button>
            </div>

          </form>

        </FormTemplate>

      </div>

    </section>

  );
};
export default Payment;
