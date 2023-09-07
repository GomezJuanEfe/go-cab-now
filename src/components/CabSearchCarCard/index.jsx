import './CabSearchCarCard.scss';
import { useContext } from 'react';
import { FormContext } from '../../store/FormContext';
import { usdFormat, toTitleCase } from '../../services/utils';
import distanceBetweenCities from '../../services/citiesDistance';

const CabSearchCarCard = ({ data, handleSelect }) => {
  const { tripForm } = useContext(FormContext);
  return (
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
        <h3>
          {usdFormat((distanceBetweenCities(tripForm.pickUpLoc, tripForm.dropOffLoc))
         * data.fare_km * 100)}
        </h3>
        <p>
          Fare/km:
          {' '}
          <span>{`$${data.fare_km}`}</span>
        </p>
      </div>
      <div className="card__button">
        <button className="secondary-button" type="button" onClick={handleSelect}>Book Now</button>
      </div>
    </div>
  );
};

export default CabSearchCarCard;
