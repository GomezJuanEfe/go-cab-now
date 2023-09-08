import React, { useState, useContext, useEffect } from 'react';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import './ContactDetails.scss';
import { NavLink } from 'react-router-dom';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import BookingSummery from '../BookingSummery';
import CouponCode from '../CouponCode';
import advertise from '../../assets/images/advertise.jpg';
import { UserContext } from '../../store/UserContext';
import { FormContext } from '../../store/FormContext';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const sendRequest = async (url, data) => {
  const resp = await axios.post(url, data);
  return resp;
};

const ContactDetails = () => {
  const { trigger, isMutating, error } = useSWRMutation(URL, sendRequest);
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState('');
  const { userData } = useContext(UserContext);
  const { contactForm, setContactForm } = useContext(FormContext);

  contactForm.contactPhone = phone;

  useEffect(() => {
    setContactForm({
      ...contactForm,
      firstName: userData.first_name,
      lastName: userData.last_name,
      emailAddress: userData.email,
      contactPhone: userData.phone,
    });
    setLoading(false);
  }, []);

  const handleContactForm = (e) => {
    const { name, value } = e.target;
    const contactData = {
      ...contactForm,
      [name]: value,
    };
    setContactForm(contactData);
  };

  console.log('contactForm', contactForm);

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    const resolve = await trigger(contactForm);
  };
  if (isMutating) return <div>Adding post...</div>;
  if (error) return <div>Failed to add post</div>;

  return (

    <div className="contact-page">

      <div className="col-contact">
        <div className="review-contact">

          <div className="title-top">Contact Details</div>
          <div className="contact-detail">
            {
              !loading && (
              <form onSubmit={handleClickSubmit}>

              <div className="form-group">
                <div className="row">
                  <div className="col first-name">
                    <label htmlFor="first-name">First name</label>
                    <br />
                    <input
                      type="text"
                      id="first-name"
                      name="firstName"
                      placeholder="First name"
                      onChange={(e) => handleContactForm(e)}
                      value={contactForm.firstName}
                      required
                    />
                  </div>
                  <div className="col last-name">
                    <label htmlFor="last-name">Last name</label>
                    <br />
                    <input
                      type="text"
                      id="last-name"
                      name="lastName"
                      placeholder="Last name"
                      onChange={(e) => handleContactForm(e)}
                      value={contactForm.lastName}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group email-input">
                <label htmlFor="email">Email Address</label>
                <br />
                <input
                  id="email"
                  name="emailAddress"
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => handleContactForm(e)}
                  value={contactForm.emailAddress}
                  required
                />
                <br />
                <small>Booking confirmation will be sent to this email ID.</small>
              </div>

              <div className="form-group contact-info">
                <label htmlFor="contact-info">Contact Info</label>
                <br />
                <div>
                  <PhoneInput
                    defaultCountry="co"
                    value={userData.phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
              </div>

              <div className="form-group special-request">
                <label htmlFor="special-request">Special Request</label>
                <br />
                <textarea
                  id="special-request"
                  name="specialRequest"
                  type="text"
                  onChange={(e) => handleContactForm(e)}
                  value={contactForm.specialRequest}
                />
              </div>

              <div className="form-group coupon-group">
                <label className="coupon-title" htmlFor="promo-code">Have A Coupon Code?</label>
                <div className="coupon-input">
                  <input
                    type="text"
                    name="promoCode"
                    id="promo-code"
                    placeholder="Promo Code"
                    onChange={(e) => handleContactForm(e)}
                    value={contactForm.promoCode}
                  />
                  <button type="submit">apply</button>
                </div>
              </div>
              <NavLink to="/payments">
                <div className="proceed-to-pay">
                  <button type="submit" className="proceed-button">PROCEED TO PAY</button>
                </div>
              </NavLink>
              </form>
              )
            }
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
