import { NavLink } from 'react-router-dom';
import './CabSearchButton.scss';

const CabSearchButton = ({ modal }) => {
  const modalStyle = modal ? 'modal' : '';

  return (
    <div className={`search-button ${modalStyle}`}>
      <NavLink to="/cab-list">
        <button className="search-button" type="button">SEARCH</button>
      </NavLink>
    </div>
  );
};

export default CabSearchButton;
