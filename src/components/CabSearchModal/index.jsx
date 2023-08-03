import './CabSearchModal.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';
import CabSearchButton from '../CabSearchButton';
import useForm from '../../hooks/useForm';

const CabSearchModal = ({ show, handleModal }) => {
  const { form, handleForm } = useForm('modal');

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
            inpName="Pick Up Location"
            id="pick-up-loc"
            placeholder="Pick up"
            handleInput={handleForm}
            modal
          />

          <LocationPicker
            inpName="Drop-Off Location"
            id="drop-off-loc"
            placeholder="Drop Off"
            handleInput={handleForm}
            modal
          />

          <DatePicker
            title="Pick up"
            inpName="pick-up-date"
            handleInput={handleForm}
            modal
          />

          <DatePicker
            title="Drop off"
            inpName="drop-off-date"
            handleInput={handleForm}
            modal
          />

          <CabSearchButton modal />

        </div>
      </div>
    </div>
  );
};

export default CabSearchModal;
