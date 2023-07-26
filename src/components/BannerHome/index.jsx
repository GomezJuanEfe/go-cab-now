import './BannerHome.scss';
import CabSearch from '../CabSearch';

const BannerHome = () => (
  <div className="banner-container">

    <div className="banner-content">
      <h1>Book Your Cab Now</h1>
      <h3>Rent a Cab with afforable price with Go Cab Now</h3>
      <CabSearch />
    </div>
  </div>
);

export default BannerHome;
