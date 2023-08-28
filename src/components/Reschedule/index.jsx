import './Reschedule.scss';
import { useContext } from 'react';
import axios from 'axios';
import { DashboardContext } from '../../store/DashboardContext';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';
import { useNavigate } from 'react-router-dom';

const URL = import.meta.env.VITE_API_URL;

const Reschedule = ({ setShowModal }) => {
  const { showReschedule, selectedTrip, setSelectedTrip, tripsData, setTripsData } = useContext(DashboardContext);
  const navigate = useNavigate();

  const fetchUpdateTrip = async () => {
    try {
      const response = await axios.patch(
        `${URL}/api/trips/single`,
        selectedTrip,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    const { data } = await fetchUpdateTrip();
    console.log(data);
    const tripsUpdated = tripsData.map((item) => {
      if (data.tripUpdated.id === item.id) {
        return data.tripUpdated;
      }
      return item;
    });

    setTripsData(tripsUpdated);
    setShowModal(false);
  };

  const handleInput = (e) => {
    let tripUpdated = {};
    const { name, value } = e.target;
    tripUpdated = {
      ...selectedTrip,
      [name]: value,
    };
    setSelectedTrip(tripUpdated);
  };

  console.log(selectedTrip);
  return (
    <div className="container_reschedule">

      <div className="container_inputs_reschedule">
        <LocationPicker title="Pick Up Location" value={selectedTrip.origin_latitude} inpName="origin_latitude" handleInput={handleInput} />
        <LocationPicker title="Drop Off Location" value={selectedTrip.destination_latitude} inpName="destination_latitude" handleInput={handleInput} />
        <DatePicker title="Pick Up" />
        <DatePicker title="Drop Off" />
      </div>

      <div className="container_button_reschedule">
        <button
          onClick={handleSubmit}
          className="btn__profile_reschedule"
          type="button"
        >
          Reschedule
        </button>
      </div>

    </div>

  );
};

export default Reschedule;
