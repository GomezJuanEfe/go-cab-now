import './CabSearch.scss';
import DatePicker from '../DatePicker';
import LocationPicker from '../LocationPicker';
import CabSearchButton from '../CabSearchButton';

const CabSearch = () => (
  <div className="cab-search">

    <div className="search-inputs">

      <LocationPicker inputName="Pick Up Location" id="pick-up-loc" placeholder="Pick up" />

      <LocationPicker inputName="Drop-Off Location" id="drop-off-loc" placeholder="Drop Off" />

      <DatePicker inputName="Pick up" />

      <DatePicker inputName="Drop off" />

      <CabSearchButton />

    </div>

  </div>
);

export default CabSearch;
