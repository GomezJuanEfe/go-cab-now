import React, { useContext } from 'react';
import './DashboardTitle.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { DashboardContext } from '../../store/DashboardContext';

const DashboardTitle = ({ title }) => {
  const { addBookingButton } = useContext(DashboardContext);

  return (
    <div className="table__title">
      <h5>{title}</h5>
      <NavLink to="/cab-list">
        <button type="button" className={addBookingButton ? 'add-button' : 'hiden'}>
          <AiOutlinePlusSquare />
          <span>Add New Booking</span>
        </button>
      </NavLink>
    </div>
  );
};

export default DashboardTitle;
