import './CabSearchModal.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useContext } from 'react';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';
import CabSearchButton from '../CabSearchButton';
import { FormContext } from '../../store/FormContext';

const CabSearchModal = ({ show, handleModal, children }) => {
  const { tripForm, handleTripForm } = useContext(FormContext);

  const handleSearchButton = () => {
    handleModal();
  };

  return (
    <div className={`cab-search-modal ${show ? 'show' : ''}`}>
      <div className="modal-content">

        <div
          className="exit-btn"
          onClick={handleModal}
          onKeyDown={handleModal}
          role="button"
          tabIndex={0}
        >
          <AiOutlineCloseCircle />
        </div>

        <div className="input-container">

          <LocationPicker
            inpName="pickUpLoc"
            placeholder="Pick up"
            handleInput={handleTripForm}
            value={tripForm?.pickUpLoc}
            modal
          />

          <LocationPicker
            inpName="dropOffLoc"
            placeholder="Drop Off"
            handleInput={handleTripForm}
            value={tripForm?.dropOffLoc}
            modal
          />

          <DatePicker
            title="Pick up"
            inpName="pickUpDate"
            handleInput={handleTripForm}
            value={tripForm?.pickUpDate}
            modal
          />

          <CabSearchButton modal handleSearchButton={handleSearchButton} />

          <div className="reschedule_button">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CabSearchModal;
