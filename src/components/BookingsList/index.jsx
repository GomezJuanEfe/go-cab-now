import './BookingList.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import DashboardTable from '../DashboardTable';
import DashboardTitle from '../DashboardTableTitle';
import Modal from '../Modal';
import Reschedule from '../Reschedule';
import { DashboardContext } from '../../store/DashboardContext';
import { usdFormat } from '../../services/utils';

const URL = import.meta.env.VITE_API_URL;

const BookingsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tripsData, setTripsData] = useState({});
  const { setAddBookingButton } = useContext(DashboardContext);

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
      setAddBookingButton(true);
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

  const handleSetShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="table-container">
        <DashboardTitle title="My Bookings" />
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
                  <td>{booking.date?.slice(0, 10)}</td>
                  <td>
                    <span className={booking.status === 'PAST' ? 'status--past' : booking.status === 'UPCOMING' ? 'status--upcoming' : 'status--cancelled'}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <span onClick={handleSetShowModal} className="reschedule">Reschedule</span>
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
        <Reschedule />
      </Modal>
    </>
  );
};

export default BookingsList;
