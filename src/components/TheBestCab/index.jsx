/* eslint-disable no-undef */
import iconsURL from '../../assets/variable.img';
import './TheBestCab.scss';
// eslint-disable-next-line import/order
import { AiFillApple, AiFillAndroid } from 'react-icons/ai';

const TheBestCab = () => (
  <div>
    <div className="limit__section">
      <section className="container__app">
        <div className="container_img">
          <div className="image">
            <img className="phones" src={iconsURL.phone1} alt="phones1" />
          </div>
          <div className="image">
            <img className="phones" src={iconsURL.phone2} alt="phones2" />
          </div>
        </div>
        <div className="app-content">
          <div className="text__new">
            <p className="button_new">NEW</p>
          </div>
          <h2 className="title">
            The best cab app
            <br />
            for your mobile app.
          </h2>
          <p className="paragraph">
            Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa
            efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a
            mauris.
          </p>
          <h3>Dowload App Now...</h3>
          <div className="app__buttons">
            <a href="https://www.apple.com/ios/app-store/">
              <AiFillApple style={{ fill: 'yellow', fontSize: '20px' }} />
              {' '}
              App Store
            </a>
            <a href="https://play.google.com/store?hl=en">
              <AiFillAndroid style={{ fill: 'yellow', fontSize: '20px' }} />
              {' '}
              Play Store
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default TheBestCab;
