/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import BannerPages from '../components/BannerPages';
import SuccessItem from '../components/SuccessItem';
import { FormContext } from '../store/FormContext';
import { CarContext } from '../store/CarContext';
import { formatTableDate } from '../services/DateFormat';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const { tripForm, contactForm } = useContext(FormContext);
  const { selectedCarPrice } = useContext(CarContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
    window.scroll({ top: '0', behavior: 'smooth' });
  };

  return (
    <div>
      <BannerPages pageName="Booking Success" />
      <SuccessItem
        title="Payment Successful! Thanks for your booking!"
        origin={tripForm.pickUpLoc}
        destination={tripForm.dropOffLoc}
        date={formatTableDate(tripForm.pickUpDate)}
        total={selectedCarPrice}
        firstName={contactForm.firstName}
        lastName={contactForm.lastName}
        email={contactForm.emailAddress}
      >
        <button type="button" onClick={handleSubmit} className="secondary-button">Go Cab Now</button>
      </SuccessItem>
    </div>
  );
};

export default Success;
