import React, { useContext, useState } from 'react';
import './CouponCode.scss';
import { CarContext } from '../../store/CarContext';
import { convertPriceToPennies } from '../../services/utils';
import { usdFormat } from '../../services/utils';

const CouponCode = () => {
  const { selectedCarPrice, setSelectedCarPrice } = useContext(CarContext);
  const [discount, setDiscount] = useState(0);
  const [selectDisabled, setSelectDisabled] = useState(false);

  const handleInput = (e) => {
    setDiscount(e.target.value / 100);
  };
  const handleApply = () => {
    const pennies = convertPriceToPennies(selectedCarPrice);
    const priceWithDiscount = pennies - Math.ceil(discount * pennies);
    setSelectedCarPrice(usdFormat(priceWithDiscount));
    setSelectDisabled(true);
  };

  return (
  <div className="review-box">
    <div className="coupon-detail">
      <div className="promo-section">

        <div className="form-group">
          <label className="coupon-title" htmlFor="promo-code">Have A Coupon Code?</label>
          <div className="coupon-input">
            <select disabled={selectDisabled} onChange={(e) => handleInput(e)} name="promo-code" id="promo-code">
              <option value={0}>No Coupon</option>
              <option value={10}>CAB10</option>
              <option value={30}>CAB30</option>
              <option value={40}>CAB40</option>
            </select>
            <button disabled={selectDisabled} onClick={handleApply} type="button">apply</button>
          </div>
        </div>

        <div className="promos">
          <form>

            <div className="coupon-info">
              <div>
                <span className="coupon-title">CAB10</span>
                <br />
                <span>Use this coupon to get a 10% discount within the first three business days of the week.</span>
              </div>
            </div>

            <div className="coupon-info">
              <div>
                <span className="coupon-title">CAB30</span>
                <br />
                <span>Use CAB30, And Get 30% Off On First Booking</span>
              </div>
            </div>

            <div className="coupon-info">
              <div>
                <span className="coupon-title">CAB40</span>
                <br />
                <span>Use this coupon for your first trip of more than 300km.</span>
              </div>
            </div>

          </form>
        </div>

      </div>
    </div>
  </div>
);
}

export default CouponCode;
