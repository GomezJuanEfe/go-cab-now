import './BookingSummery.scss';
import { useContext } from 'react';
import { FormContext } from '../../store/FormContext';
import { CarContext } from '../../store/CarContext';
import { PaymentContext } from '../../store/PaymentContext';

const BookingSummery = () => {
  const { tripForm } = useContext(FormContext);
  const { selectedCar, selectedCarPrice } = useContext(CarContext);
  const { discount } = useContext(PaymentContext);

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
                <td>Car Type:</td>
                <td>{selectedCar.car_name || ''}</td>
              </tr>
              <tr>
                <td>Discount:</td>
                <td>{`${discount * 100} %` || ''}</td>
              </tr>
            </tbody>
          </table>
          <div className="grand-total">
            <h5>
              Total Fare:
              <span>{selectedCarPrice}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummery;
