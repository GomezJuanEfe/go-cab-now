import { useContext } from 'react';
import './CabSearchCarList.scss';
import CabSearchCarCard from '../CabSearchCarCard';
import { CarsContext } from '../../store/CarsContext';

const CabSearchCarList = () => {
  const { carsData, carsError, carsIsLoading } = useContext(CarsContext);
  if (carsError) return <div>Failed to load</div>;
  if (carsIsLoading) return <div>Loading...</div>;

  return (
    <div className="cab-search-list">
      <div className="list-container">
        {
          carsData.map((item) => (
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
