import React from 'react';
import './BookingList.scss';
import bookingsData from '../../services/bookings-data';
import DashboardTable from '../DashboardTable';
import DashboardTitle from '../DashboardTableTitle';

const BookingsList = () => {
  const handleButtonClick = () => {
  console.log(handleButtonClick);
  };
  return (
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
                  {/* <div
                    onClick={this.handleButtonClick}
                    className="reschedule"
                  >
                    <button>Reschedule</button>
                  </div> */}
                  <span> | </span>
                  <span className="cancel">Cancel</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardTable>
    </div>
  );
};

export default BookingsList;
