import './Reschedule.scss';
import { useContext } from 'react';
import axios from 'axios';
import { DashboardContext } from '../../store/DashboardContext';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';
import { pickerDateToDateFormat } from '../../services/DateFormat';

const URL = import.meta.env.VITE_API_URL;

const Reschedule = ({ setShowModal }) => {
  const {
    showReschedule,
    selectedTrip,
    setSelectedTrip,
    tripsData,
    setTripsData,
  } = useContext(DashboardContext);

  const fetchUpdateTrip = async (body) => {
    try {
      const response = await axios.patch(
        `${URL}/api/trips/single`,
        body,
        //este selectedTrip está quedando con un formato de fecha inválido para la DB
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
    const info = {
      ...selectedTrip,
      date: pickerDateToDateFormat(selectedTrip.date),
    };

    console.log('info', info);

    const res = await fetchUpdateTrip(info);
    console.log('response', res);
   /*  const tripsUpdated = tripsData.map((item) => {
      if (data.tripUpdated.id === item.id) {
        return data.tripUpdated;
      }
      return item;
    }); */

    //setTripsData(tripsUpdated);
    setShowModal(false);
  };

  const handleInput = (e, isMantine = false, input = '') => {
    let tripUpdated = {};
    if (isMantine) {
      tripUpdated = {
        ...selectedTrip,
        [input]: e,
      };
    } else {
      const { name, value } = e.target;
      tripUpdated = {
        ...selectedTrip,
        [name]: value,
      };
    }
    setSelectedTrip(tripUpdated);
  };

  console.log('selectedTrip', selectedTrip);

  return (
    <div className="container_reschedule">

      <div className="container_inputs_reschedule">
        <LocationPicker title="Pick Up Location" value={selectedTrip.origin_latitude} inpName="origin_latitude" handleInput={handleInput} />
        <LocationPicker title="Drop Off Location" value={selectedTrip.destination_latitude} inpName="destination_latitude" handleInput={handleInput} />
        <DatePicker title="Pick Up Date" inpName="date" value={selectedTrip.date} handleInput={handleInput} />
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
