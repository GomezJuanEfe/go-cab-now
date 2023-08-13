import './CabSearchSection.scss';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useState, useContext } from 'react';
import CabSearch from '../CabSearch';
import CabSearchModal from '../CabSearchModal';
import { FormContext } from '../../store/FormContext';

const CabSearchSection = ({ handleFilterMenu }) => {
  const [modal, setModal] = useState(false);
  const { tripForm } = useContext(FormContext);

  const handleModal = () => setModal(!modal);

  return (
    <div className="cab-search-section">

      <div className="cab-search-mobile">
        <div className="cab-search-details margin">

          <div>
            <h5>
              {tripForm.pickUpLoc || 'Origin'}
              {' '}
              <FaLongArrowAltRight />
              {' '}
              {tripForm.dropOffLoc || 'Destination'}
            </h5>
            <p>
              Pick Up Date:
              {' '}
              {tripForm.pickUpDate.toString().slice(0, 24) || ''}
            </p>
            <p>
              Drop Off Date:
              {' '}
              {tripForm.dropOffDate.toString().slice(0, 24) || ''}
            </p>
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
