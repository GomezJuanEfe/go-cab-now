import './BookingSummery.scss';

const BookingSummery = () => (
  <div className="review-booking">
    <div className="title-top">Booking Summary</div>
    <div className="booking-detail">
      <div className="summery-box">
        <table>
          <tbody>
            <tr>
              <td>Itinerary:</td>
              <td>{'Paris > Toulouse'}</td>
            </tr>
            <tr>
              <td>Pickup Date:</td>
              <td>10/01/2019, 11:35pm</td>
            </tr>
            <tr>
              <td>Return Date:</td>
              <td>14/01/2019</td>
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
);

export default BookingSummery;
