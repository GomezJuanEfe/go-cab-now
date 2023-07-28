import './CabSearchCarCard.scss';

const CabSearchCarCard = ({ carName, carType }) => (
  <div className="cab-search-card">
    <h3>{carName}</h3>
    <p>{carType}</p>
  </div>
);

export default CabSearchCarCard;
