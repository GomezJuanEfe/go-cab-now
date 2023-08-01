import './CabSearchSection.scss';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useState } from 'react';
import CabSearch from '../CabSearch';
import CabSearchModal from '../CabSearchModal';

const CabSearchSection = ({ handleFilterMenu }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => setModal(!modal);

  return (
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
            <button
              className="secondary-button"
              onClick={handleModal}
              type="button"
            >
              Modify Search
            </button>
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

      <CabSearchModal show={modal} handleModal={handleModal} />
    </div>
  );
};

export default CabSearchSection;
