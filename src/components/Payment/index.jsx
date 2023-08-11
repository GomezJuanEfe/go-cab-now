import './Payment.scss';
import { useState } from 'react';
import FormTemplate from '../FormTemplate';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';
import creditcard from '../../assets/icons/creditcards.png';
import Cvv from '../../assets/icons/cvv.png';
import NetBanking from '../NetBanking';
import MyWallet from '../MyWallet';
import '../FormTemplate/FormTemplate.scss';

const Payment = () => {
  const [active, setActive] = useState(undefined);

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
                <div className="title__inputs">
                  Name On Card
                </div>
                <input type="text" className="form-control" />
              </div>

              <div className="form-group">
                <div className="title__inputs">
                  Card Number
                </div>
                <input type="number" className="form-control" />
                <div className="img_credit">
                  <img src={creditcard} alt="creditcard" />
                </div>
              </div>
              <div className="row__inputs">

                <div className="form-group_select">
                  <div className="title__inputs">
                    Month
                  </div>
                  <br />
                  <select className="form-control_cvv">
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
                </div>

                <div className="form-group_select">
                  <div className="title__inputs">
                    Year
                  </div>
                  <br />
                  <select className="form-control_cvv">
                    <option selected>Year...</option>
                    <option>...</option>
                  </select>
                </div>

                <div className="form-group_select">
                  <div className="title__inputs">
                    Cvv
                  </div>
                  <br />
                  <input type="password" maxLength="4" className="form-control_cvv" />
                  <div className="img_cvv">
                    <img src={Cvv} alt="cvv" />
                  </div>
                </div>

              </div>
              <div className="payment-btn">
                <button type="button" className="btn_payment">
                  MAKE PAYMENT
                </button>
              </div>

            </form>

          </FormTemplate>

          <FormTemplate className="title__container" title="Credit Card" active={active} setActive={setActive} id={2}>

            <form action="form__payment">

              <div className="form-group">
                <div className="title__inputs">
                  Name On Card
                </div>
                <input type="text" className="form-control" />
              </div>

              <div className="form-group">
                <div className="title__inputs">
                  Card Number
                </div>
                <input type="number" className="form-control" />
                <img src={creditcard} alt="creditcard" className="img_credit" />
              </div>

              <div className="row__inputs">

                <div className="form-group_select">
                  <div className="title__inputs">
                    Month
                  </div>
                  <br />
                  <select className="form-control_cvv">
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
                </div>

                <div className="form-group_select">
                  <div className="title__inputs">
                    Year
                  </div>
                  <br />
                  <select className="form-control_cvv">
                    <option selected>Year...</option>
                    <option>...</option>
                  </select>
                </div>

                <div className="form-group_select">
                  <div className="title__inputs">
                    Cvv
                  </div>
                  <br />
                  <input type="password" maxLength="4" className="form-control_cvv" />
                  <div className="img_cvv">
                    <img src={Cvv} alt="cvv" />
                  </div>
                </div>

              </div>

              <div className="payment-btn">
                <button type="button" className="btn_payment">
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
