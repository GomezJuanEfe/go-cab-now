import axios from 'axios';
import { useState } from 'react';
import './ModalCarInformation.scss';
import { useNavigate } from 'react-router-dom';
import DashboardTable from '../DashboardTable';
import Modal from '../Modal';

const URL = import.meta.env.VITE_API_URL;

const ModalCarInformation = ({
  selectedCar,
  dataCars,
  setDataCars,
  setModalDelete,

}) => {
  const [deleteCar, setDeleteCar] = useState(false);

  const navigate = useNavigate();

  const handleDeleteCar = async () => {
    try {
      await axios.delete(
        `${URL}/api/cars/${selectedCar.id}`,
        {
          data: { id: selectedCar.id },
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );

      const updatedCarList = dataCars.filter((car) => car.id !== selectedCar.id);
      setDataCars(updatedCarList);

      setModalDelete(false);
      setModalDelete(false);

      navigate('/user-profile/all-cars');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container__info-selectedCar">

      <DashboardTable>
        <table>
          <thead>
            <tr>
              <th>Car Photo</th>
              <th>Car Name</th>
              <th>Type</th>
              <th>Fare/Km</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={selectedCar.img} alt="car" />
              </td>
              <td>{selectedCar.car_name}</td>
              <td>{selectedCar.type}</td>
              <td>
                $
                {selectedCar.fare_km}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <div className="container_button_delete">
          <button
            onClick={() => setDeleteCar(true)}
            className="terciary-button"
            type="button"
          >
            Delete Car
          </button>
        </div>
      </DashboardTable>

      <Modal
        showModal={deleteCar}
        handleShowModal={() => setModalDelete(false)}
      >
        <h2>You are about to delete your car permanently. Are you sure?</h2>
        <div className="center">
          <button className="terciary-button" onClick={handleDeleteCar} type="button">Confirm</button>
          <button className="terciary-button" type="button" onClick={() => setDeleteCar(false)}>Cancel</button>
        </div>
      </Modal>

    </div>
  );
};

export default ModalCarInformation;
