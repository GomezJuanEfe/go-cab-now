import './CabSearch.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from '../DatePicker';
import LocationPicker from '../LocationPicker';
import CabSearchButton from '../CabSearchButton';
import { FormContext } from '../../store/FormContext';

const CabSearch = () => {
  const { tripForm, handleTripForm } = useContext(FormContext);

  const navigate = useNavigate();

  const handleSearchButton = () => {
    navigate('/cab-list');
  };

  return (

    <div className="cab-search">

      <div className="search-form">

        <div className="search-inputs">

          <LocationPicker
            title="Pick Up Location"
            inpName="pickUpLoc"
            placeholder="Pick up"
            handleInput={handleTripForm}
            value={tripForm?.pickUpLoc}
          />

          <LocationPicker
            title="Drop-Off Location"
            inpName="dropOffLoc"
            placeholder="Drop Off"
            handleInput={handleTripForm}
            value={tripForm?.dropOffLoc}
          />

          <DatePicker
            title="Pick up"
            inpName="pickUpDate"
            value={tripForm?.pickUpDate}
            handleInput={handleTripForm}
          />

        </div>

        <CabSearchButton handleSearchButton={handleSearchButton} />

      </div>

    </div>
  );
};

export default CabSearch;
