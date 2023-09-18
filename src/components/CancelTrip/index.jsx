import React, { useContext, useState } from 'react';
import './CancelTrip.scss';
import axios from 'axios';
import { DashboardContext } from '../../store/DashboardContext';
import { formatTableDate } from '../../services/DateFormat';
import Loading from '../Loading';
import ErrorModal from '../ErrorModal';

const URL = import.meta.env.VITE_API_URL;

const CancelTrip = ({
  origin, destination, date, setShowModal,
}) => {
  const { selectedTrip, tripsData, setTripsData } = useContext(DashboardContext);
  const [errorModal, setErrorModal] = useState({ show: false, msg: '' });
  const [loading, setLoading] = useState(false);

  const fetchUpdateTrip = async () => {
    try {
      setLoading(true);
      const response = await axios.patch(
        `${URL}/api/trips/single`,
        {
          id: selectedTrip.id,
          status: 'CANCELLED',
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

    <div className="cancel-trip">
      {
        !loading && !errorModal.show && (
          <>
            <h2>Cancel this trip?</h2>
            <div className="info-trip">
              <div>{`${origin} to ${destination}`}</div>
              <div className="date">{formatTableDate(date)}</div>
            </div>
            <button onClick={handleSubmit} className="secondary-button" type="button">OK</button>
          </>
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

export default CancelTrip;
