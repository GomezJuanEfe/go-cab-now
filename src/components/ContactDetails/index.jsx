import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import './ContactDetails.scss';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';

const ContactDetails = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="contact-page">
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

            <button type="submit" className="proceed-button">PROCEED TO PAY</button>

          </form>
        </div>
      </div>
      <div className="col-contact">
        <BookingSummery />
        <CouponCode />
      </div>
    </div>
  );
};

export default ContactDetails;
