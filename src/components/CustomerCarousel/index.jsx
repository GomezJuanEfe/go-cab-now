import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomerCarousel.scss';
import React from 'react';
import { imageURL } from '../../assets/variable.img';

const FleetCarousel = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    dots: false,
    infinite: true,
    centerPadding: '20px',
    speed: 500,
    slidesToShow: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (

    <Slider Slider {...settings}>

      <div className="customer-container">
        <div className="customer-card">
          <img src={imageURL.customer1} alt="costumer" />
          <div className="costumer__content">
            <p>Architecto aut error explicabo. Voluptatem eaque sequi qui beatae velit vero autautem. Et adipisci perferendis corporis et similique vitae consequatur. Auteveniet quam. Et ut placeat consequatur qui nihil eos quibusdam. Impedit blanditiis delectus.</p>
            <h3>Mark Enderess</h3>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </div>
        </div>
      </div>

      <div className="customer-container">
        <div className="customer-card">
          <img src={imageURL.customer2} alt="costumer" />
          <div className="fleet__content">
            <p>Architecto aut error explicabo. Voluptatem eaque sequi qui beatae velit vero autautem. Et adipisci perferendis corporis et similique vitae consequatur. Auteveniet quam. Et ut placeat consequatur qui nihil eos quibusdam. Impedit blanditiis delectus.</p>
            <h3>Mark Enderess</h3>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </div>
        </div>
      </div>

    </Slider>

  );
};

export default FleetCarousel;
