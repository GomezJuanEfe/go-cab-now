import './TheBestCab.scss';
import img1 from '../../assets/images/3(1).png';
import img2 from '../../assets/images/4(1).png';

const TheBestCab = () => (
  <div>
    <section className="container__app">
      <div className="app-content">
        <span className="text__new">NEW</span>
        <h2 className="title">
          The best cab app
          <br />
          for your mobile app.
        </h2>
        <p>
          Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa
          efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a
          mauris.
        </p>
        <h3>Dowload App Now...</h3>
        <div className="app__buttons">
          <a href="https://www.apple.com/ios/app-store/">
            <i
              className="fab fa-apple"
            />
            {' '}
            App Store
          </a>
          <a href="https://play.google.com/store?hl=en">
            <i
              className="fab fa-android"
            />
            {' '}
            Play Store
          </a>
        </div>
      </div>
      <div className="container_img">
        <div className="image">
          <img className="phones" src={img1} alt="phones1" />
        </div>
        <div className="image">
          <img className="phones" src={img2} alt="phones2" />
        </div>
      </div>
    </section>
  </div>
);

export default TheBestCab;
