import './TheBestCab.scss';
import img1 from '../../assets/images/3(1).png';
import img2 from '../../assets/images/4(1).png';

function TheBestCab() {
  return (
    <div>
      <section className="container__app">
        <img src="../../assets/images/cab/app-bg.jpg" />
        <div className="container__general">
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
                ></i>
                {' '}
                app store
              </a>
              <a href="https://play.google.com/store?hl=en">
                <i
                  className="fab fa-android"
                ></i>
                {' '}
                playstore
              </a>
            </div>
          </div>
          <div className="container_img">
            <div>
              <div className="image">
                <div className="circle" />
                <img className="phones" src={img1} />
              </div>
              <div className="image">
                <div className="circle b-round" />
                <img className="phones" src={img2} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default TheBestCab;
