import axios from 'axios';
import './ModalCarInformation.scss';
import DashboardTable from '../DashboardTable';

const URL = import.meta.env.VITE_API_URL;

const ModalCarInformation = ({
  selectedCar, dataCars, setModalDelete, setDataCars,
}) => {
  const fetchCarDeleted = async () => {
    try {
      const res = await axios.delete(
        `${URL}/api/cars`,
        selectedCar,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    const { data } = await fetchCarDeleted();
    console.log(data);

    const carDeleted = dataCars.map((deleted) => {
      if (data.carDeleted.id === deleted.id) {
        return data.carDeleted;
      }
      return deleted;
    });
    setDataCars(carDeleted);
    setModalDelete(false);
  };

  return (
    <div className="container__inputs_info-car">

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
            {/* {!loading && dataCars.map((car, index) => ( */}
            {/* <tr key={index}>
              <td>
                <img src={car.img} alt="car" />
              </td>
              <td>{car.car_name}</td>
              <td>{car.type}</td>
              <td>
                $
                {car.fare_km}
              </td>

            </tr>
            ))} */}
          </tbody>
        </table>
      </DashboardTable>

      <div className="container_button_delete">
        <button
          onSubmit={handleSubmit}
          className="terciary-button"
          type="submit"
        >
          Delete Car
        </button>
      </div>

    </div>
  );
};

export default ModalCarInformation;
