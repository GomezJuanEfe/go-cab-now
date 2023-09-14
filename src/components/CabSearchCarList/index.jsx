import './CabSearchCarList.scss';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination';
import { CarContext } from '../../store/CarContext';
import CabSearchCarCard from '../CabSearchCarCard';
import { FormContext } from '../../store/FormContext';
import Modal from '../Modal';
import { usdFormat } from '../../services/utils';
import distanceBetweenCities from '../../services/citiesDistance';

const CabSearchCarList = () => {
  const { tripForm } = useContext(FormContext);
  const [locationAlert, setLocationAlert] = useState(false);
  const [dateAlert, setDateAlert] = useState(false);
  const {
    data,
    error,
    isLoading,
    cablistIndexPage,
    setcablistIndexPage,
    setSelectedCar,
    setSelectedCarPrice,
  } = useContext(CarContext);

  const navigate = useNavigate();

  const handleSelectCar = (item) => {
    setSelectedCar(item);
    const totalPrice = usdFormat((distanceBetweenCities(tripForm.pickUpLoc, tripForm.dropOffLoc))
    * item.fare_km * 100);
    setSelectedCarPrice(totalPrice);
    if (tripForm.pickUpLoc === '' || tripForm.dropOffLoc === '' || tripForm.pickUpLoc === tripForm.dropOffLoc) {
      setLocationAlert(true);
      return;
    } if (tripForm.pickUpDate === '') {
      setDateAlert(true);
      return;
    }
    navigate('/cab-booking');
    window.scroll({ top: '0', behavior: 'smooth' });
  };

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleShowLocationAlert = () => {
    setLocationAlert(!locationAlert);
  };
  const handleShowDateAlert = () => {
    setDateAlert(!dateAlert);
  };

  return (
    <div className="cab-search-list" id="main">
      <div className="list-container">
        {
          data.response.cars.map((item) => (
            <CabSearchCarCard
              key={item.id}
              data={item}
              handleSelect={() => handleSelectCar(item)}
              tripTotal={usdFormat((distanceBetweenCities(tripForm.pickUpLoc, tripForm.dropOffLoc))
                * item.fare_km * 100)}
            />
          ))
        }
      </div>
      <Pagination
        num={data.response.pageInfo.totalPages}
        pageIndex={cablistIndexPage}
        setPageIndex={setcablistIndexPage}
      />
      <Modal showModal={locationAlert} handleShowModal={handleShowLocationAlert}>
        <h2>Must select Pick Up and Drop Off Locations</h2>
        <div className="center">
          <button type="button" className="secondary-button" onClick={() => setLocationAlert(false)}>Ok</button>
        </div>
      </Modal>
      <Modal showModal={dateAlert} handleShowModal={handleShowDateAlert}>
        <h2>Must select a Pick Up Date and Time</h2>
        <div className="center">
          <button type="button" className="secondary-button" onClick={() => setDateAlert(false)}>Ok</button>
        </div>
      </Modal>
    </div>
  );
};
export default CabSearchCarList;
