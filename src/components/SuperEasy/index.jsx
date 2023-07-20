import './SuperEasy.scss';
import mobile from '../../assets/icons/mobile-app.png';
import calendar from '../../assets/icons/confirm-schedule.png';
import taxi from '../../assets/icons/taxi.png';
import destination from '../../assets/icons/destination.png';

const SuperEasy = () => (
  <div>
    <section className="container__general">
      <h2>Super Easy Booking</h2>
      <p className="container__text">
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.Adipisci
        Alias Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore
        Magnam Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam
        Veritatis Voluptate Voluptatem!
      </p>
      <section className="container__icons">

        <div className="se-card">
          <img src={mobile} />
          <p>Book Cab Threw Website Or App</p>
        </div>

        <div id="card__down" className="se-card">
          <img src={calendar} />
          <p>Receive Confirmation</p>
        </div>

        <div className="se-card">
          <img src={taxi} />
          <p>Meet Cab Driver On Pickup Time</p>
        </div>

        <div id="card__down" className="se-card">
          <img src={destination} />
          <p>Arrive At Your Destination</p>
        </div>

      </section>
    </section>
  </div>

);

export default SuperEasy;
