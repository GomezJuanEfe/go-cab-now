import React, { useContext } from 'react';
import './CancelTrip.scss';
import axios from 'axios';
import { DashboardContext } from '../../store/DashboardContext';
import { formatTableDate } from '../../services/DateFormat';

const URL = import.meta.env.VITE_API_URL;

const CancelTrip = ({ origin, destination, date, setShowModal }) => {
  const { selectedTrip, tripsData, setTripsData } = useContext(DashboardContext);

  const fetchUpdateTrip = async () => {
    try {
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
    <div className="cancel-trip">
      <h2>Cancel this trip?</h2>
      <div className="info-trip">
        <div>{`${origin} to ${destination}`}</div>
        <div className="date">{formatTableDate(date)}</div>
      </div>
      <button onClick={handleSubmit} className="secondary-button" type="button">OK</button>
    </div>
  );
};

export default CancelTrip;
