/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardTitle from '../DashboardTableTitle';
import './EditCar.scss';
import Modal from '../Modal';
import FormEditCar from '../FormEditCar';

const URL = import.meta.env.VITE_API_URL;

const EditCar = ({ selectedCar }) => {
  const [updateCar, setUpdateCar] = useState(false);
  const [lodingCarById, setLoadingCarById] = useState(true); // renderizar componente
  const [carData, setCarData] = useState({}); // pasar por parametro al new component form

  const fetchCarById = async () => {
    setLoadingCarById(true);
    try {
      const res = await axios.get(
        `${URL}/api/cars/single/${selectedCar.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        },
      );

      setCarData(res.data.car);
      setLoadingCarById(false);
    } catch (error) {
      console.error(error);
      setLoadingCarById(false);
    }
  };

  useEffect(() => {
    fetchCarById();
    lodingCarById();
  }, []);

  // la logica del form, va ir en el nuevo componente, (recibe como parametro carData)
  return ( // dividir componente para formulario  y despues de que se realice la petición me lo renderice.

    <div className="container_edit-car">

      <DashboardTitle
        title="Edit Car"
      />
      <FormEditCar />
      <Modal
        showModal={updateCar.show}
        handleShowModal={setUpdateCar}
      >
        <h2>{updateCar.msg}</h2>
        <div className="center">
          <h2>Car have been updated correctly</h2>
        </div>
      </Modal>

    </div>
  );
};

export default EditCar;
