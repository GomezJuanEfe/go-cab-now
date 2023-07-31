import './CabSearchSection.scss';
import { FaLongArrowAltRight } from 'react-icons/fa';
import CabSearch from '../CabSearch';

const CabSearchSection = ({ handleFilterMenu }) => (
  <div className="cab-search-section">

    <div className="cab-search-mobile">
      <div className="cab-search-details margin">

        <div>
          <h5>
            Paris
            {' '}
            <FaLongArrowAltRight />
            {' '}
            Toulouse
          </h5>
          <p>02:05, 19-Aug-2019</p>
          <p>2 Adults</p>
        </div>
        <div>
          <button className="secondary-button" type="button">Modify Search</button>
        </div>

      </div>
      <div className="margin">
        <div
          className="latest-filters__title"
          onClick={handleFilterMenu}
          onKeyDown={handleFilterMenu}
          role="button"
          tabIndex={0}
        >
          <h5>latest filters</h5>
          <span className="latest-filtes__icon" />
        </div>
      </div>
    </div>

    <div className="cab-search-desktop">
      <CabSearch />
    </div>

  </div>
);

export default CabSearchSection;
