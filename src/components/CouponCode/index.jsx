import React from 'react';
import './CouponCode.scss';

const CouponCode = () => (
  <div className="review-box">
    <div className="coupon-detail">
      <div className="promo-section">

        <div className="form-group">
          <label className="coupon-title" htmlFor="promo-code">Have A Coupon Code?</label>
          <div className="coupon-input">
            <input type="text" id="promo-code" placeholder="Promo Code" />
            <button type="submit">apply</button>
          </div>
        </div>

        <div className="promos">
          <form>

            <div className="form-check">
              <input className="form-check-radio" type="radio" id="option1" />
              <div>
                <label htmlFor="option1">Rica500</label>
                <label htmlFor="option1">Use Rica50, And Get $50 Off On First Booking</label>
              </div>
            </div>

            <div className="form-check">
              <input className="form-check-radio" type="radio" id="option2" />
              <div>
                <label htmlFor="option2">CAB10</label>
                <label htmlFor="option2">Use FLY10, And Get $10 Off Upto $50 On Cab Ticket Booking</label>
              </div>
            </div>

            <div className="form-check">
              <input className="form-check-radio" type="radio" id="option3" />
              <div>
                <label htmlFor="option3">CAB80</label>
                <label htmlFor="option3">
                  Upto 80% Off + Upto 40% Cashback On Cab Booking & More + Extra 10% Off Via ICICI Cards $
                  (10th-13th Oct)
                </label>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
);

export default CouponCode;
