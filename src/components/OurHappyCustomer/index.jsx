import './OurHappyCustomer.scss';
import CustomerCarousel from '../CustomerCarousel';

const OurHappyCustomer = () => (
  <section className="customer">
    <div className="customer__text">
      <span>WHY CHOOSE GO CAB NOW?</span>
      <h2>Our Happy Customer</h2>
    </div>
    <div className="slider">
      <CustomerCarousel />
    </div>

  </section>
);

export default OurHappyCustomer;
