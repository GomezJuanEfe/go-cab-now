import './CabSearchCarCard.scss';
import { NavLink } from 'react-router-dom';

const CabSearchCarCard = ({
  carName, carType, carImg, carDetails, fare, handleSelect,
}) => (
  <div className="cab-search-card">
    <div className="card__header">
      <div className="card__img">
        <img src={carImg} alt={`${carName} car`} />
      </div>
      <h6>{carName}</h6>
      <p>{`(${carType})`}</p>
    </div>
    <div className="card__details">
      <ul>
        <li>
          <span className="seat-icon" />
          {`${carDetails.seats} seater`}
        </li>
        {carDetails.air_conditioner
          ? (
            <li>
              <span className="ac-icon" />
              AC
            </li>
          )
          : <li />}
        <li>
          <span className="luggage-icon" />
          {`${carDetails.luggage} luggage`}
        </li>
        <li>
          <span className="trans-icon" />
          {carDetails.transmition}
        </li>
      </ul>
    </div>
    <div className="card__price">
      <h3>$1200</h3>
      <p>
        Fare/km:
        {' '}
        <span>{`$${fare}`}</span>
      </p>
    </div>
    <div className="card__button">
      <NavLink to="/cab-booking">
        <button className="secondary-button" type="button" onClick={handleSelect}>Book Now</button>
      </NavLink>
    </div>
  </div>
);

export default CabSearchCarCard;
