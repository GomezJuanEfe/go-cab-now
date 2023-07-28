// import { useState } from 'react';
import './CabSearchCarList.scss';
import CabSearchCarCard from '../CabSearchCarCard';

const CabSearchCarList = () =>
// const [carData, setCarData] = useState();
(
  <div className="cab-search-list">
    <h4>lista de carros - map</h4>
    <CabSearchCarCard carName="Peugeot Citroen" carType="Sedan" />
    <CabSearchCarCard carName="Susuki" carType="Medium" />
    <CabSearchCarCard carName="Fiat Chrysler" carType="Mini" />
  </div>
);
export default CabSearchCarList;
