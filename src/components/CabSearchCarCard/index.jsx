import './CabSearchCarCard.scss';
import car5 from '../../assets/images/5.png';

const CabSearchCarCard = ({ carName, carType }) => (
  <div className="cab-search-card">
    <div className="card__header">
      <div className="card__img">
        <img src={car5} alt="car #5" />
      </div>
      <h6>{carName}</h6>
      <p>{`(${carType})`}</p>
    </div>
    <div className="card__details">
      <ul>
        <li>
          <span className="seat-icon" />
          5 seater
        </li>
        <li>
          <span className="ac-icon" />
          AC
        </li>
        <li>
          <span className="luggage-icon" />
          2 luggage
        </li>
        <li>
          <span className="trans-icon" />
          Automatic
        </li>
      </ul>
    </div>
    <div className="card__price">
      <h3>$1200</h3>
      <p>
        Fare/km:
        {' '}
        <span>$25</span>
      </p>
    </div>
    <div className="card__button">
      <button className="secondary-button" type="button">Book Now</button>
    </div>
  </div>
);

export default CabSearchCarCard;
