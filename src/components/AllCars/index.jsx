import { useEffect, useState } from 'react';
import './AllCars.scss';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import DashboardTitle from '../DashboardTableTitle';
import DashboardTable from '../DashboardTable';
import Modal from '../Modal';
import ModalCarInformation from '../ModalCarInformation';

const URL = import.meta.env.VITE_API_URL;

const AllCars = () => {
  const [modalDelete, setModalDelete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataCars, setDataCars] = useState({});
  const [selectedCar, setSelectCar] = useState({
    id: '',
    img: '',
    car_name: '',
    type: '',
    fare_km: '',
  });

  useEffect(() => {
    const fetchCarsData = async () => {
      setLoading(true);

      try {
        const { data: { cars } } = await axios.get(`${URL}/api/cars`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setDataCars(cars);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchCarsData();
  }, []);

  const handleShowModalCar = (carInformation) => {
    setSelectCar({
      id: carInformation.id,
      img: carInformation.img,
      car_name: carInformation.car_name,
      type: carInformation.type,
      fare_km: carInformation.fare_km,
    });

    setModalDelete(true);
  };

  const navigate = useNavigate();

  const handleEditCar = () => {
    navigate('/user-profile/edit-car');
  };

  return (
    <>
      <div className="table-container">
        <DashboardTitle title="All Cars" />
        <DashboardTable>
          <table>
            <thead>
              <tr>
                <th>Car Photo</th>
                <th>Car Name</th>
                <th>Type</th>
                <th>Fare/Km</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {!loading && dataCars.map((car, index) => (
                <tr key={index}>
                  <td>
                    <img src={car.img} alt="car" />
                  </td>
                  <td>{car.car_name}</td>
                  <td>{car.type}</td>
                  <td>
                    $
                    {car.fare_km}
                  </td>

                  <td>
                    <FaEdit
                      onClick={() => handleEditCar(selectedCar.id)}
                      className="icon_edit"
                    />
                  </td>

                  <td>
                    <AiOutlineDelete
                      onClick={() => handleShowModalCar(car)}
                      className="icon_delete"
                    />
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </DashboardTable>
      </div>

      <Modal
        showModal={modalDelete}
        handleShowModal={() => setModalDelete(false)}
      >
        <ModalCarInformation
          selectedCar={selectedCar} // Pasa la info car selected
          setModalDelete={setModalDelete}
          setDataCars={setDataCars}
        />
      </Modal>
    </>
  );
};

export default AllCars;
