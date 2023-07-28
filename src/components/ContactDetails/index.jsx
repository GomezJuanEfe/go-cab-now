import React, { useState } from 'react';
import './ContactDetails.scss';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';
import advertise from '../../assets/images/advertise.jpg'

const ContactDetails = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="contact-page">

      <div className="col-contact">
        <div className="review-contact">

          <div className="title-top">Contact Details</div>
          <div className="contact-detail">
            <form>

              <div className="form-group">
                <div className="row">
                  <div className="col first-name">
                    <label htmlFor="first-name">First name</label>
                    <br />
                    <input type="text" id="first-name" placeholder="First name" />
                  </div>
                  <div className="col last-name">
                    <label htmlFor="last-name">Last name</label>
                    <br />
                    <input type="text" id="last-name" placeholder="Last name" />
                  </div>
                </div>
              </div>

              <div className="form-group email-input">
                <label htmlFor="email">Email Address</label>
                <br />
                <input id="email" type="email" placeholder="Enter email" />
                <br />
                <small>Booking confirmation will be sent to this email ID.</small>
              </div>

              <div className="form-group contact-info">
                <label htmlFor="contact-info">Contact Info</label>
                <br />
                <div>
                  <PhoneInput
                    defaultCountry="co"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
              </div>

              <div className="form-group special-request">
                <label htmlFor="special-request">Special Request</label>
                <br />
                <textarea id="special-request" type="text" />
              </div>

              <div className="form-group coupon-group">
                <label className="coupon-title" htmlFor="promo-code">Have A Coupon Code?</label>
                <div className="coupon-input">
                  <input type="text" id="promo-code" placeholder="Promo Code" />
                  <button type="submit">apply</button>
                </div>
              </div>
              <div className="proceed-to-pay">
                <button type="submit" className="proceed-button">PROCEED TO PAY</button>
              </div>

            </form>
          </div>
        </div>

        <div className="info">
          <h5 className="info-title">Information</h5>
          <div className="info-text">
            <div className="info-cancelation">
              <h6>Cancellation Charges</h6>
              <p>
                Airline Fee :
                <span> $2012</span>
              </p>
              <p>This Airline Allows Cancellation Only Before 2 Hrs From Departure Time.</p>
            </div>
            <div className="info-reschedule">
              <h6>Reschedule Charges</h6>
              <p>
                Airline Fee :
                <span> $2012</span>
              </p>
              <p>This Airline Allows Reschedule Only Before 2 Hrs From Departure Time.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="col-r">
        <BookingSummery />
        <CouponCode />
        <div className="advertise">
          <img src={advertise} alt="advertise" />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
