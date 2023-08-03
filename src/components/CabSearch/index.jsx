import './CabSearch.scss';
import DatePicker from '../DatePicker';
import LocationPicker from '../LocationPicker';
import CabSearchButton from '../CabSearchButton';
import useForm from '../../hooks/useForm';

const CabSearch = () => {
  const { form, handleForm } = useForm('home');

  return (

    <div className="cab-search">

      <div className="search-inputs">

        <LocationPicker
          title="Pick Up Location"
          inpName="pick-up-loc"
          placeholder="Pick up"
          handleInput={handleForm}
        />

        <LocationPicker
          title="Drop-Off Location"
          inpName="drop-off-loc"
          placeholder="Drop Off"
          handleInput={handleForm}
        />

        <DatePicker
          title="Pick up"
          inpName="pick-up-date"
          handleInput={handleForm}
        />

        <DatePicker
          title="Drop off"
          inpName="drop-off-date"
          handleInput={handleForm}
        />

        <CabSearchButton />

      </div>

    </div>
  );
};

export default CabSearch;
