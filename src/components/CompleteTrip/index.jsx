import './CompleteTrip.scss';
import { useContext, useState } from 'react';
import axios from 'axios';
import { DashboardContext } from '../../store/DashboardContext';
import Loading from '../Loading';
import ErrorModal from '../ErrorModal';

const URL = import.meta.env.VITE_API_URL;

const CompleteTrip = ({ setShowModal }) => {
  const [errorModal, setErrorModal] = useState({ show: false, msg: '' });
  const [loading, setLoading] = useState(false);
  const { selectedTrip, tripsData, setTripsData } = useContext(DashboardContext);

  const fetchUpdateTrip = async () => {
    setLoading(true);
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
      setLoading(false);
      return response;
    } catch ({ message }) {
      setErrorModal({ show: true, msg: message });
      setLoading(false);
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
            : !loading && !errorModal.show && (
            <div>
              <h2>Change the status of the trip to &apos;completed&apos;?</h2>
              <div className="buttons">
                <button onClick={handleSubmit} className="secondary-button" type="button">Yes</button>
              </div>
            </div>
            )
      }
      {
        loading && <Loading text="Cancelling Trip" />
      }
      {
        errorModal.show && <ErrorModal errorMessage={errorModal.msg} />
      }

    </div>
  );
};

export default CompleteTrip;
