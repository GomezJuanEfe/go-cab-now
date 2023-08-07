import { useState, useEffect } from 'react';
import './CabSearchCarList.scss';
import CabSearchCarCard from '../CabSearchCarCard';

const getAllCars = async () => {
  const response = await fetch('../../data.json');
  const data = await response.json();
  return data;
};

const CabSearchCarList = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    getAllCars()
      .then((data) => {
        setCarData(data);
        return data;
      })
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="cab-search-list">
      <div className="list-container">
        {
          carData.map((item) => (
            <CabSearchCarCard
              key={item.car_id}
              carName={item.car_name}
              carType={item.car_type}
              carImg={item.car_img}
              carDetails={item.car_details}
              fare={item.fare_km}
            />
          ))
        }
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
};

export default CabSearchCarList;
