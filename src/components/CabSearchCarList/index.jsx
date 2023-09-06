import './CabSearchCarList.scss';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
    setSelectedCar,
  } = useContext(CarContext);

  const navigate = useNavigate();

  const handleSelectCar = (item) => {
    setSelectedCar(item);
    navigate('/cab-booking');
    window.scroll({ top: '0', behavior: 'smooth' });
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
