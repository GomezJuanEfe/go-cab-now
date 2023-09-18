import './SuperEasy.scss';
import { iconsURL } from '../../assets/variable.img';

const SuperEasy = () => (
  <div>
    <div className="container-to-limit">
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
            <img src={iconsURL.mobile} alt="mobile" />
            <p>Book Cab Threw Website Or App</p>
          </div>

          <div id="card__down" className="se-card">
            <img src={iconsURL.calendar} alt="calendar" />
            <p>Receive Confirmation</p>
          </div>

          <div className="se-card">
            <img src={iconsURL.taxi} alt="taxi" />
            <p>Meet Cab Driver On Pickup Time</p>
          </div>

          <div id="card__down" className="se-card">
            <img src={iconsURL.destination} alt="destination" />
            <p>Arrive At Your Destination</p>
          </div>

        </section>
      </section>
    </div>
  </div>

);

export default SuperEasy;
