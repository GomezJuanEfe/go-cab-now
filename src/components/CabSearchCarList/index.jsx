import './CabSearchCarList.scss';
import { useContext } from 'react';
import Pagination from '../Pagination';
import { CarContext } from '../../store/CarContext';
import CabSearchCarCard from '../CabSearchCarCard';

const CabSearchCarList = () => {
  const {
    data,
    error,
    isLoading,
    cablistIndexPage,
    setcablistIndexPage,
  } = useContext(CarContext);

  const handleSelectCar = (item) => {
    console.log(item);
    // Configurar handle select
  };

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="cab-search-list" id="main">
      <div className="list-container">
        {
          data.response.cars.map((item) => (
            <CabSearchCarCard
              key={item.id}
              data={item}
              handleSelect={() => handleSelectCar(item)}
            />
          ))
        }
      </div>
      <Pagination
        num={data.response.pageInfo.totalPages}
        pageIndex={cablistIndexPage}
        setPageIndex={setcablistIndexPage}
      />
    </div>
  );
};
export default CabSearchCarList;
