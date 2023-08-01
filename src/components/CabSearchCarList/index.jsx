// import { useState } from 'react';
import './CabSearchCarList.scss';
import CabSearchCarCard from '../CabSearchCarCard';

const CabSearchCarList = () =>
// const [carData, setCarData] = useState();
(
  <div className="cab-search-list">
    <div className="list-container">
      <CabSearchCarCard carName="Peugeot Citroen" carType="Sedan" />
      <CabSearchCarCard carName="Susuki" carType="Medium" />
      <CabSearchCarCard carName="Fiat Chrysler" carType="Mini" />
    </div>
    <ul className="pagination">
      <li className="pagination__item">«</li>
      <li className="pagination__item active">1</li>
      <li className="pagination__item">2</li>
      <li className="pagination__item">3</li>
      <li className="pagination__item">»</li>
    </ul>
  </div>
);
export default CabSearchCarList;
