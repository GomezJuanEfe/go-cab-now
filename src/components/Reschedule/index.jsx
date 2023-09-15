import './Reschedule.scss';
import { useContext, useState } from 'react';
import axios from 'axios';
import { DashboardContext } from '../../store/DashboardContext';
import LocationPicker from '../LocationPicker';
import DatePicker from '../DatePicker';
import { pickerDateToDateFormat } from '../../services/DateFormat';
import Loading from '../Loading';
import ErrorModal from '../ErrorModal';

const URL = import.meta.env.VITE_API_URL;

const Reschedule = ({ setShowModal }) => {
  const [errorModal, setErrorModal] = useState({ show: false, msg: '' });
  const [loading, setLoading] = useState(false);
  const {
    showReschedule,
    selectedTrip,
    setSelectedTrip,
    tripsData,
    setTripsData,
  } = useContext(DashboardContext);

  const fetchUpdateTrip = async (body) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${URL}/api/trips/single`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      setLoading(false);
      return response;
    } catch ({ message }) {
      setErrorModal({ show: true, msg: message });
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    const info = {
      ...selectedTrip,
      date: pickerDateToDateFormat(selectedTrip.date),
    };

    const { data } = await fetchUpdateTrip(info);
    const tripsUpdated = tripsData.map((item) => {
      if (data.tripUpdated.id === item.id) {
        return data.tripUpdated;
      }
      return item;
    });

    setTripsData(tripsUpdated);
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

  return (
    <div className="container_reschedule">
      {
        !loading && !errorModal.show && (
          <>
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
          </>
        )
      }

      {
        loading && <Loading text="Updating Trip" />
      }
      {
        errorModal.show && <ErrorModal errorMessage={errorModal.msg} />
      }
    </div>

  );
};

export default Reschedule;
