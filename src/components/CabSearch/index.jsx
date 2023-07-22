import './CabSearch.scss';
import From from '../../assets/icons/from.png';
import Location from '../../assets/icons/location.png';
import Date from '../../assets/icons/date.png';

const CabSearch = () => (
  <>
    <div className="choose-location">
      <label htmlFor="radio-diff">
        Different Location
        <input type="radio" name="radio-diff" id="radio-diff" />
      </label>
      <label htmlFor="radio-same">
        Same Location
        <input type="radio" name="radio-same" id="radio-same" />
      </label>
    </div>

    <div className="cab-search">

      <div className="cab-search-detail">

        <form className="cab-search-form">

          <div className="search-inputs">

            <div className="col">
              <div className="form-group">
                <div className="label-input">
                  <label htmlFor="pick-up-loc">Pick Up Location</label>
                  <input type="text" id="pick-up-loc" placeholder="Pick Up" />
                </div>
                <div className="search-icon">
                  <img src={From} alt="from icon" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <div className="label-input">
                  <label htmlFor="drop-off-loc">Drop-Off Location</label>
                  <input type="text" id="drop-off-loc" placeholder="Drop Off" />
                </div>
                <div className="search-icon">
                  <img src={Location} alt="location icon" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <div className="label-input">
                  <label htmlFor="pick-up">Pick Up</label>
                  <input type="text" id="pick-up" placeholder="Pick Up Date & Time" />
                </div>
                <div className="search-icon">
                  <img className="date-icon" src={Date} alt="date icon" />
                </div>
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <div className="label-input">
                  <label htmlFor="drop-off">Drop-Off</label>
                  <input type="text" id="drop-off" placeholder="Drop Off Date & Time" />
                </div>
                <div className="search-icon">
                  <img className="date-icon" src={Date} alt="date icon" />
                </div>
              </div>
            </div>

          </div>

          <button className="search-button" type="submit">SEARCH</button>

        </form>
      </div>
    </div>
  </>
);

export default CabSearch;
