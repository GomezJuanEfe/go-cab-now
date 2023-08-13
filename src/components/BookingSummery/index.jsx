import './BookingSummery.scss';
import { useContext } from 'react';
import { FormContext } from '../../store/FormContext';

const BookingSummery = () => {
  const { tripForm } = useContext(FormContext);

  return (
  <div className="review-booking">
    <div className="title-top">Booking Summary</div>
    <div className="booking-detail">
      <div className="summery-box">
        <table>
          <tbody>
            <tr>
              <td>Itinerary:</td>
              <td>{`${tripForm.pickUpLoc || 'Origin'} > ${tripForm.dropOffLoc || 'Destination'}`}</td>
            </tr>
            <tr>
              <td>Pickup Date:</td>
              <td>{tripForm.pickUpDate.toString().slice(0, 24) || ''}</td>
            </tr>
            <tr>
              <td>Return Date:</td>
              <td>{tripForm.dropOffDate.toString().slice(0, 24) || ''}</td>
            </tr>
            <tr>
              <td>Car Type:</td>
              <td>Fiat Chrysler</td>
            </tr>
          </tbody>
        </table>
        <div className="grand-total">
          <h5>
            Total Fare:
            <span>$1250</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
)
}

export default BookingSummery;
