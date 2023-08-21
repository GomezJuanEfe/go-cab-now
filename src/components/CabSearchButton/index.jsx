import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './CabSearchButton.scss';
import { DashboardContext } from '../../store/DashboardContext';

const CabSearchButton = ({ modal }) => {
  const { showButtonSearch } = useContext(DashboardContext);
  const modalStyle = modal ? 'modal' : '';

  return (
    <div className={`search-button ${modalStyle}`}>
      <NavLink to="/cab-list">
        {showButtonSearch && (
        <button className="search-button" type="button">SEARCH</button>
        )}
      </NavLink>
    </div>
  );
};

export default CabSearchButton;
