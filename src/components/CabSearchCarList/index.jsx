import './CabSearchCarList.scss';
import { useContext, useState } from 'react';
import Pagination from '../Pagination';
import { CarContext } from '../../store/CarContext';
import CabSearchCarCard from '../CabSearchCarCard';

const CabSearchCarList = () => {
  const { data, error, isLoading } = useContext(CarContext);
  const [cablistIndexPage, setcablistIndexPage] = useState(1);

  const handleSelectCar = (item) => {
    console.log(item);
  };

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="cab-search-list" id="main">
      <div className="list-container">
        {
          data.cars.map((item) => (
            <CabSearchCarCard
              key={item.id}
              data={item}
              handleSelect={() => handleSelectCar(item)}
            />
          ))
        }
      </div>
      <Pagination
        num={4}
        pageIndex={cablistIndexPage}
        setPageIndex={setcablistIndexPage}
      />
    </div>
  );
};
export default CabSearchCarList;
