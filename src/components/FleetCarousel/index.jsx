import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FleetCarousel.scss';
import React, { Component } from "react";
import classicCab from '../../assets/images/1.png'
import businessCab from '../../assets/images/2.png'
import vipCab from '../../assets/images/3.png'
import vanCab from '../../assets/images/4.png'
import seat from '../../assets/icons/seat.png'
import options from '../../assets/icons/settings.png'
import snowflake from '../../assets/icons/snowflake.png'
import luggage from '../../assets/icons/luggage.png'




export default class Responsive extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: false,
      infinite: true,
      centerPadding: "20px",
      speed: 500,
      slidesToShow: 3,
      initialSlide: 0,
 
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1 ,
            initialSlide: 1,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    };
  return (
    
      <Slider {...settings}>

        <div className='fleet__car-type'>
          <div className='fleet-container'>
            <img src={classicCab} alt="classic cab img" />
            <div className='fleet__content'>
              <h3>Classic</h3>
              <h4>Start $5 / per Km</h4>
              <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis</p>
              <ul>
                <li><img src={seat} alt="" /></li>
                <li><img src={luggage} alt="" /></li>
                <li><img src={snowflake} alt="" /></li>
                <li><img src={options} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      

     
        <div className='fleet__car-type'>
          <div className='fleet-container'>
            <img src={businessCab} alt="business cab img" />
            <div className='fleet__content'>
              <h3>Business</h3>
              <h4>Start $6 / per Km</h4>
              <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis</p>
              <ul>
                <li><img src={seat} alt="" /></li>
                <li><img src={luggage} alt="" /></li>
                <li><img src={snowflake} alt="" /></li>
                <li><img src={options} alt="" /></li>
              </ul>
            </div>
          </div> 
        </div>
  

     
        <div className='fleet__car-type'>
          <div className='fleet-container'>
            <img src={vipCab} alt="classic cab img" />
            <div className='fleet__content'>
              <h3>Vip</h3>
              <h4>Start $10 / per Km</h4>
              <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis</p>
              <ul>
                <li><img src={seat} alt="" /></li>
                <li><img src={luggage} alt="" /></li>
                <li><img src={snowflake} alt="" /></li>
                <li><img src={options} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
    

   
        <div className='fleet__car-type'>
          <div className='fleet-container'>
            <img src={vanCab} alt="classic cab img" />
            <div className='fleet__content'>
              <h3>Van</h3>
              <h4>Start $12 / per Km</h4>
              <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis</p>
              <ul>
                <li><img src={seat} alt="" /></li>
                <li><img src={luggage} alt="" /></li>
                <li><img src={snowflake} alt="" /></li>
                <li><img src={options} alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
  

        
      </Slider>
    
    )
  }
}

