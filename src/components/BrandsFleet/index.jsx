import Slider from 'react-slick';
import './BrandsFleet.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import tecno from '../../assets/icons/tecno.png';
import eco from '../../assets/icons/eco.png';
import air from '../../assets/icons/airport.png';
import hydra from '../../assets/icons/hydra.png';
import ux from '../../assets/icons/ux.png';

const BrandsFleet = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
    // responsive: [
    //   {
    //     breakpoint: 1440,
    //     settings: {
    //       slidesToShow: 5,
    //       initialSlide: 5,
    //       infinite: false,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 5,
    //       initialSlide: 5,
    //       arrows: false,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 5,
    //       arrows: false,
    //       dots: true,
    //     },
    //   },
    // ],
  return (
    <div>
      <Slider {...settings}>
        <section className="section__brand">
          <img className="brand" src={tecno} alt="tecno" />
          <img className="brand" src={eco} alt="eco" />
          <img className="brand" src={air} alt="airport" />
          <img className="brand" src={hydra} alt="hydra" />
          <img className="brand" src={ux} alt="ux" />
        </section>
      </Slider>
    </div>
  );
};
export default BrandsFleet;
