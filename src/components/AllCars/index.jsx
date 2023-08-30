import { useEffect, useState } from 'react';
import './AllCars.scss';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import DashboardTitle from '../DashboardTableTitle';
import DashboardTable from '../DashboardTable';
import Modal from '../Modal';
import Reschedule from '../Reschedule';

const URL = import.meta.env.VITE_API_URL;

const AllCars = () => {
  const [modalDelete, setModalDelete] = useState(true);
  const [loading, setLoading] = useState(true);
  const [dataCars, setDataCars] = useState({});

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

  const handleModalDelete = () => {
    setModalDelete(!modalDelete);
    console.log(handleModalDelete);
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
                    <FaEdit className="icon_edit" />
                  </td>

                  <td>
                    <AiOutlineDelete
                      onClick={handleModalDelete}
                      className="icon_delete"
                    />
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </DashboardTable>
      </div>

      <Modal modalDelete={modalDelete} handleShowModal={handleModalDelete}>
        <p>IS WORKING</p>
      </Modal>
    </>
  );
};

export default AllCars;
