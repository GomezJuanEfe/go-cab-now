import axios from 'axios';
import { useContext, useState } from 'react';
import './ModalCarInformation.scss';
import { useNavigate } from 'react-router-dom';
import DashboardTable from '../DashboardTable';
import { DashboardContext } from '../../store/DashboardContext';
import Loading from '../Loading';

const URL = import.meta.env.VITE_API_URL;

const ModalCarInformation = ({
  selectedCar,
  setModalDelete,
  setDeleteCar,
}) => {
  const { dataCars, setDataCars } = useContext(DashboardContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleDeleteCar = async () => {
    console.log('info car', selectedCar.id);
    try {
      setLoading(true);
      await axios.delete(
        `${URL}/api/cars/${selectedCar.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );

      const carsUpdatedDelete = dataCars.filter((item) => item.id !== selectedCar.id);

      setDataCars(carsUpdatedDelete);
      setModalDelete(false);
      setDeleteCar(true);
      setLoading(false);
      navigate('/user-profile/all-cars');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelModal = () => {
    setModalDelete(false);
  };

  return (
    <div className="container__info-selectedCar">
      {!loading
      && (
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
            onClick={handleDeleteCar}
            className="terciary-button"
            type="button"
          >
            Delete Car
          </button>

          <button
            className="terciary-button"
            type="button"
            onClick={handleCancelModal}
          >
            Cancel
          </button>

        </div>
      </DashboardTable>
      )}

      { loading && <Loading text="Deleting Car" /> }

    </div>
  );
};

export default ModalCarInformation;
