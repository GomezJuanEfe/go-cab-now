import './WhyChooseRica.scss';
import { iconsURL } from '../../assets/variable.img';

const WhyChooseRica = () => (
  <div>
    <div className="section__limit">
      <section className="container__card_why">
        <span>WHY CHOOSE GO CAB NOW?</span>
        <h2>Welcome To Go Cab Now</h2>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias
          Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam
          Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!
        </p>
      </section>

      <section className="container__icons">

        <div className="card">
          <img src={iconsURL.wheel} alt="wheel" />
          <h3>4500 + Rides Daily</h3>
          <p>Every Day More Than 4500 Customer Take Rides With Go Cab Now</p>
        </div>

        <div className="card">
          <img src={iconsURL.customer} alt="customer" />
          <h3>3,00,000 Happy Client</h3>
          <p>Till Today Go Cab Now Has More Than Three Lakhs Happy Customer</p>
        </div>

        <div className="card">
          <img src={iconsURL.world} alt="world" />
          <h3>45,000 + Location</h3>
          <p>Rica Cab Has More Than 45k Location At Different Countries & Citys</p>
        </div>

        <div className="card">
          <img src={iconsURL.cab} alt="cab" />
          <h3>10,000 Cabs</h3>
          <p>Go Cab Now Has More Than 10000 Cabs Which Include Luxury Cabs Too.</p>
        </div>

      </section>
    </div>
  </div>
);

export default WhyChooseRica;
