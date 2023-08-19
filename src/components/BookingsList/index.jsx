import './BookingList.scss';
import { useState } from 'react';
import bookingsData from '../../services/bookings-data';
import DashboardTable from '../DashboardTable';
import DashboardTitle from '../DashboardTableTitle';
import Modal from '../Modal';
import Reschedule from '../Reschedule';

const BookingsList = () => {
  const [showModal, setShowModal] = useState(true);

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
              {bookingsData.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.itinerary}</td>
                  <td>
                    $
                    {booking.price}
                  </td>
                  <td>{booking.date}</td>
                  <td>
                    <span className={booking.status === 'Past' ? 'status--past' : booking.status === 'Cancelled' ? 'status--cancelled' : 'status--upcoming'}>
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
