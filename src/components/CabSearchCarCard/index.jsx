import './CabSearchCarCard.scss';
import { NavLink } from 'react-router-dom';
import { usdFormat, toTitleCase } from '../../services/utils';

const CabSearchCarCard = ({ data, handleSelect }) => (
  <div className="cab-search-card">
    <div className="card__header">
      <div className="card__img">
        <img src={data.img} alt={`${data.car_name} car`} />
      </div>
      <h6>{data.car_name}</h6>
      <p>{`(${data.type})`}</p>
    </div>
    <div className="card__details">
      <ul>
        <li>
          <span className="seat-icon" />
          {`${data.seats} seats`}
        </li>
        {data.air_conditioner
          ? (
            <li>
              <span className="ac-icon" />
              AC
            </li>
          )
          : <li />}
        <li>
          <span className="luggage-icon" />
          {`${data.luggage} luggage`}
        </li>
        <li>
          <span className="trans-icon" />
          {toTitleCase(data.transmition)}
        </li>
      </ul>
    </div>
    <div className="card__price">
      <h3>{usdFormat(120000)}</h3>
      <p>
        Fare/km:
        {' '}
        <span>{`$${data.fare_km}`}</span>
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
