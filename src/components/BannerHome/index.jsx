import './BannerHome.scss';
import CabSearch from '../CabSearch';

const BannerHome = () => (
  <div className="banner-container">

    <div className="banner-content">
      <h1>Book Your Cab Now</h1>
      <h3>Rent a Cab with afforable price with Go Cab Now</h3>

      {/*
      <div className="choose-location">
        <label htmlFor="radio-location">
          Different Location
          <input type="radio" name="radio-location" id="radio-diff" />
        </label>
        <label htmlFor="radio-location">
          Same Location
          <input type="radio" name="radio-location" id="radio-same" />
        </label>
      </div>
      */}

      <div className="cab-search-container">
        <CabSearch />
      </div>
    </div>
  </div>
);

export default BannerHome;
