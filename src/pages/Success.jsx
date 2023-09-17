/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerPages from '../components/BannerPages';
import SuccessItem from '../components/SuccessItem';
import { FormContext } from '../store/FormContext';
import { CarContext } from '../store/CarContext';
import { formatTableDate } from '../services/DateFormat';

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
      >
        <table style={{minWidth: '250px'}}>
          <tbody>
            <tr>
              <td>Booking holder</td>
              <td>{`${contactForm.firstName} ${contactForm.lastName}`}</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>{tripForm.pickUpLoc}</td>
            </tr>
            <tr>
              <td>Destination</td>
              <td>{tripForm.dropOffLoc}</td>
            </tr>
            <tr>
              <td>Pick up date</td>
              <td>{formatTableDate(tripForm.pickUpDate)}</td>
            </tr>
            <tr>
              <td>Total charges</td>
              <td>{selectedCarPrice}</td>
            </tr>
          </tbody>
        </table>
        <p>{`Booking confirmation was sent to ${contactForm.emailAddress}`}</p>
        <button type="button" onClick={handleSubmit} className="secondary-button">Go Cab Now</button>
      </SuccessItem>
    </div>
  );
};

export default Success;
