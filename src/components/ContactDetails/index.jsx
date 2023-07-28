import React from 'react';
import './ContactDetails.scss';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';

const ContactDetails = () => (
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
            <label htmlFor="">Email Address</label>
            <br />
            <input id="email" type="email" placeholder="Enter email" />
            <br />
            <small>Booking confirmation will be sent to this email ID.</small>
          </div>

        </form>
      </div>
    </div>
    <div className="col-contact">
      <BookingSummery />
      <CouponCode />
    </div>
  </div>
);

export default ContactDetails;
