import './CabSearch.scss';
import DatePicker from '../DatePicker';
// import From from '../../assets/icons/from.png';
// import Location from '../../assets/icons/location.png';
// import Date from '../../assets/icons/date.png';

const CabSearch = () => (
  <>
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

    <div className="cab-search">

      <div className="search-inputs">

        <div className="label-input">
          <label htmlFor="pick-up-loc">
            <div>Pick Up Location</div>
            <input type="text" id="pick-up-loc" placeholder="Pick Up" />
          </label>
          {/* <div className="search-icon">
            <img src={From} alt="from icon" />
          </div> */}
        </div>

        <div className="label-input">
          <label htmlFor="drop-off-loc">
            <div>Drop-Off Location</div>
            <input type="text" id="drop-off-loc" placeholder="Drop Off" />
          </label>
          {/* <div className="search-icon">
            <img src={Location} alt="location icon" />
          </div> */}
        </div>

        <div className="label-input">
          <label htmlFor="pick-up">
            <div>Pick Up</div>
            <DatePicker />
          </label>
          {/* <div className="search-icon">
            <img className="date-icon" src={Date} alt="date icon" />
          </div> */}
        </div>

        <div className="label-input">
          <label htmlFor="drop-off">
            <div>Drop-Off</div>
            <DatePicker />
          </label>
          {/* <div className="search-icon">
            <img className="date-icon" src={Date} alt="date icon" />
          </div> */}
        </div>

        <div className="search-button">
          <button className="search-button" type="button">SEARCH</button>
        </div>

      </div>

    </div>
  </>
);

export default CabSearch;
