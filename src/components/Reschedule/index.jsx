import './Reschedule.scss';
import { useContext } from 'react';
import { DashboardContext } from '../../store/DashboardContext';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';

const Reschedule = () => {
  const handleSubmit = () => {
  };
  const { showReschedule } = useContext(DashboardContext);
  console.log(showReschedule);
  return (
    <div className="container_reschedule">

      <div className="container_inputs_reschedule">
        <span>Pick Up Location</span>
        <LocationPicker />
        <span>Drop Off Location</span>
        <LocationPicker />
        <span>Pick Up</span>
        <DatePicker />
        <span>Drop Off</span>
        <DatePicker />
      </div>

      <div className="container_button_reschedule">
        <button
          onSubmit={handleSubmit}
          className="btn__profile_reschedule"
          type="submit"
        >
          Reschedule
        </button>
      </div>

    </div>

  );
};

export default Reschedule;
