import './BookingList.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import bookingsData from '../../services/bookings-data';
import DashboardTable from '../DashboardTable';
import DashboardTitle from '../DashboardTableTitle';
import Modal from '../Modal';
import Reschedule from '../Reschedule';

const URL = 'http://localhost:8080/api/trips';

const BookingsList = () => {
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [tripsData, setTripsData] = useState({
    id: '',
    user_id: '',
    car_id: '',
    total: 1500,
    date: '2023-11-11T19:20:30.451Z',
    status: 'UPCOMING',
    origin_latitude: 1,
    destination_latitude: '',
    origin_longitude: '',
    destination_longitude: '',
    distance_km: '',
    Payments: '',
  });

  /*   useEffect(() => {
    axios.get(URL)
      .then(({ data }) => {
        setBookingsData(data);
        console.log('Data', data);
      })
      .catch((err) => console.log(err));
  }, []); */

  useEffect(() => {
    const fetchTripsdata = async () => {
      setLoading(true);
      try{
        const { data: {trips} } = await axios.get(
          URL,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsbG1sN2NsbDAwMDB0Y2xwZWZobWpwamIiLCJlbWFpbCI6ImRodkB0ZXN0LmNvbSIsImlhdCI6MTY5MjkxNTE3MywiZXhwIjoxNjkzMDAxNTczfQ.OhjmF0CKv6l6JUWw-T8MVq-dMVNDBfSR0-l1D6dxAss',
            },
          },
        );
        setTripsData(trips);
      } catch(err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchTripsdata();
  }, []);

  console.log('tripsData', tripsData);

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
              {
              /* bookingsData.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.itinerary}</td>
                  <td>
                    $
                    {booking.price}
                  </td>
                  <td>{booking.date}</td>
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
              )) */}
              { !loading && tripsData.map((booking, index) => (
              <tr key={index}>
                <td>{booking.origin_latitude}</td>
                <td>
                  $
                  {booking.total}
                </td>
                <td>{booking.date}</td>
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
