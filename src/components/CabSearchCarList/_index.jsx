import { useContext } from 'react';
import './CabSearchCarList.scss';
import CabSearchCarCard from '../CabSearchCarCard';
import { CarsContext } from '../../store/CarsContext';

const CabSearchCarList = () => {
  const {
    carsData, carsError, carsIsLoading, setCarPageIndex, carPageIndex, carPages, handleSelectCar,
  } = useContext(CarsContext);
  if (carsError) return <div>Failed to load</div>;
  if (carsIsLoading) return <div>Loading...</div>;

  const generatePagination = (pages) => (
    Array.from({ length: pages }, (_, index) => index + 1)
  );
  return (
    <div className="cab-search-list">
      <div className="list-container">
        {
          carsData.result.map((item) => (
            <CabSearchCarCard
              key={item.car_id}
              carName={item.car_name}
              carType={item.car_type}
              carImg={item.car_img}
              carDetails={item.car_details}
              fare={item.fare_km}
              handleSelect={() => handleSelectCar(item)}
            />
          ))
        }
      </div>
      <ul className="pagination">
        {/* Previus arrow */}
        {
          carPages > 1
            ? (
              <li
                className={`pagination__item ${carPageIndex === 1 ? 'disabled' : ''}`}
                onClick={() => setCarPageIndex(carPageIndex - 1)}
                onKeyDown={() => setCarPageIndex(carPageIndex - 1)}
                role="menuitem"
              >
                «
              </li>
            ) : ''
        }
        {
          generatePagination(carPages).map((index) => (
            <li
              key={index}
              className={`pagination__item ${carPageIndex === index ? 'active' : ''}`}
              onClick={() => setCarPageIndex(index)}
              onKeyDown={() => setCarPageIndex(index)}
              role="menuitem"
            >
              {index}
            </li>
          ))
        }
        {/* Next Arrow */}
        {
          carPages > 1
            ? (
              <li
                className={`pagination__item ${carPageIndex === carPages ? 'disabled' : ''}`}
                onClick={() => setCarPageIndex(carPageIndex + 1)}
                onKeyDown={() => setCarPageIndex(carPageIndex + 1)}
                role="menuitem"
              >
                »
              </li>
            )
            : ''
        }
      </ul>
    </div>
  );
};
export default CabSearchCarList;
