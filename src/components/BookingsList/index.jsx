import './BookingList.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardTable from '../DashboardTable';
import DashboardTitle from '../DashboardTableTitle';
import Modal from '../Modal';
import Reschedule from '../Reschedule';

const URL = import.meta.env.VITE_API_URL;

const BookingsList = () => {
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [tripsData, setTripsData] = useState({});

  useEffect(() => {
    const fetchTripsdata = async () => {
      setLoading(true);
      try{
        const { data: { trips } } = await axios.get(
          URL,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsbG1sN2NsbDAwMDB0Y2xwZWZobWpwamIiLCJlbWFpbCI6ImRodkB0ZXN0LmNvbSIsImlhdCI6MTY5MzA3MDMxNCwiZXhwIjoxNjkzMTU2NzE0fQ.YkcG3EWnW6b3UTfLvGsSxt6DZVTOBkxWUgfkl3ty4Vg',
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
