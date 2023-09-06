import './CompleteTrip.scss';
import { useContext } from 'react';
import axios from 'axios';
import { DashboardContext } from '../../store/DashboardContext';

const URL = import.meta.env.VITE_API_URL;

const CompleteTrip = ({ setShowModal }) => {
  const { selectedTrip, tripsData, setTripsData } = useContext(DashboardContext);

  const fetchUpdateTrip = async () => {
    try {
      const response = await axios.patch(
        `${URL}/api/trips/single`,
        {
          id: selectedTrip.id,
          status: 'COMPLETED',
        },
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
    const tripsUpdated = tripsData.map((item) => {
      if (data.tripUpdated.id === item.id) {
        return data.tripUpdated;
      }
      return item;
    });
    setTripsData(tripsUpdated);
    setShowModal(false);
  };

  return (
    <div>
      {
        selectedTrip.status === 'COMPLETED'
          ? <h2>Trip has been completed</h2>
          : (
            <div>
              <h2>Change the status of the trip to &apos;completed&apos;?</h2>
              <div className="buttons">
                <button onClick={handleSubmit} className="secondary-button" type="button">Yes</button>
              </div>
            </div>
          )
      }

    </div>
  );
};

export default CompleteTrip;
