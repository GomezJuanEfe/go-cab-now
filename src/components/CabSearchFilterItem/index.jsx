import './CabSearchFilterItem.scss';
import { useState } from 'react';

const CabSearchFilterItem = ({ itemName, children }) => {
  const [isShown, setIsShown] = useState(true);

  const handleBlock = () => setIsShown(!isShown);

  return (
    <div className="filter-item">
      <div
        className="filter-title"
        onClick={handleBlock}
        onKeyDown={handleBlock}
        role="button"
        tabIndex={0}
      >
        <h6>{itemName}</h6>
        <span>{isShown ? '-' : '+'}</span>
      </div>
      <div className={`filter-content ${isShown ? 'show' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default CabSearchFilterItem;
