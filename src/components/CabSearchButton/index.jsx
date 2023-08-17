import { NavLink } from 'react-router-dom';
import './CabSearchButton.scss';

const CabSearchButton = ({ modal, showButton }) => {
  const modalStyle = modal ? 'modal' : '';

  return (
    <div className={`search-button ${modalStyle}`}>
      <NavLink to="/cab-list">
        {showButton && (
        <button className="search-button" type="button">SEARCH</button>
        )}
      </NavLink>
    </div>
  );
};

export default CabSearchButton;
