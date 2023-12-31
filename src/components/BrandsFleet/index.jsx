/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Slider from 'react-slick';
import './BrandsFleet.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { iconsURL } from '../../assets/variable.img';

const ArrowStyle = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

const BrandsFleet = () => {
  const settings = {
    dots: false,
    centerMode: false,
    className: 'slider-container',
    centerPadding: '60px',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    nextArrow: <ArrowStyle />,
    prevArrow: <ArrowStyle />,
    responsive: [

      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          initialSlide: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="container__limit">
      <div className="brand__slider">
        <Slider {...settings}>
          <div>
            <img className="brand" src={iconsURL.tecno} alt="tecno" />
          </div>
          <div>
            <img className="brand" src={iconsURL.eco} alt="eco" />
          </div>
          <div>
            <img className="brand" src={iconsURL.air} alt="airport" />
          </div>
          <div>
            <img className="brand" src={iconsURL.hydra} alt="hydra" />
          </div>
          <div>
            <img className="brand" src={iconsURL.ux} alt="ux" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default BrandsFleet;
