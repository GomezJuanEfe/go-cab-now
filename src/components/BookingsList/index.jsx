import './BookingList.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import DashboardTable from '../DashboardTable';
import DashboardTitle from '../DashboardTableTitle';
import Modal from '../Modal';
import Reschedule from '../Reschedule';
import { DashboardContext } from '../../store/DashboardContext';
import { usdFormat } from '../../services/utils';
import { formatTableDate } from '../../services/DateFormat';

const URL = import.meta.env.VITE_API_URL;

const BookingsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setSelectedTrip, tripsData, setTripsData } = useContext(DashboardContext);

  useEffect(() => {
    const fetchTripsdata = async () => {
      setLoading(true);
      try {
        const { data: { trips } } = await axios.get(
          `${URL}/api/trips`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        );
        setTripsData(trips);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchTripsdata();
  }, []);

  console.log('tripsData', tripsData);

  useEffect(() => {
    axios.get(`${URL}/api/healthcheck`)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSetShowModal = (bookingData) => {
    setSelectedTrip({
      origin_latitude: bookingData.origin_latitude,
      destination_latitude: bookingData.destination_latitude,
      id: bookingData.id,
      pickUpDate: new Date(bookingData.date),
    });

    setShowModal(!showModal);
  };

  return (
    <>
      <div className="table-container">
        <DashboardTitle title="Bookings">
          <NavLink to="/cab-list">
            <button className="add-button secondary-button" type="button">
              <AiOutlinePlusSquare />
              <span>Add New Booking</span>
            </button>
          </NavLink>
        </DashboardTitle>
        <DashboardTable>
          <table>
            <thead>
              <tr>
                <th>Itinerary</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { !loading && tripsData.map((booking, index) => (
                <tr key={index}>
                  <td>{`${booking.origin_latitude} to ${booking.destination_latitude}`}</td>
                  <td>{usdFormat(booking?.total)}</td>
                  <td>{formatTableDate(booking.date)}</td>
                  <td>
                    <span className={booking.status === 'PAST' ? 'status--past' : booking.status === 'UPCOMING' ? 'status--upcoming' : 'status--cancelled'}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <span onClick={() => handleSetShowModal(booking)} className="reschedule">Reschedule</span>
                    <span> | </span>
                    <span className="cancel">Cancel</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DashboardTable>
      </div>
      <Modal showModal={showModal} handleShowModal={handleSetShowModal}>
        <Reschedule setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default BookingsList;
