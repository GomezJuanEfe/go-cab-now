import React, { useContext } from 'react';
import './Access.scss';
import AccessCreateAccount from '../AccessCreateAccount';
import { DashboardContext } from '../../store/DashboardContext';
import AccessLogIn from '../AccessLogIn';

const Access = () => {
  const { handleShowAccess } = useContext(DashboardContext);
  return (
    <>
      <AccessCreateAccount handleShowAccess={handleShowAccess} />
      <AccessLogIn handleShowAccess={handleShowAccess} />
    </>
  );
};

export default Access;
