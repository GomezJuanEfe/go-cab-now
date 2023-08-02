import './CabSearchModal.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';
import CabSearchButton from '../CabSearchButton';

const CabSearchModal = ({ show, handleModal }) => (
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
          inputName="Pick Up Location"
          id="pick-up-loc"
          placeholder="Pick up"
          modal
        />

        <LocationPicker
          inputName="Drop-Off Location"
          id="drop-off-loc"
          placeholder="Drop Off"
          modal
        />

        <DatePicker
          inputName="Pick up"
          modal
        />

        <DatePicker
          inputName="Drop off"
          modal
        />

        <CabSearchButton modal />

      </div>
    </div>
  </div>
);

export default CabSearchModal;
