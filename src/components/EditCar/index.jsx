/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import DashboardTitle from '../DashboardTableTitle';
import './EditCar.scss';
import Modal from '../Modal';

const URL = import.meta.env.VITE_API_URL;

const EditCar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const selectedCarId = queryParams.get('selectedCarId');

  const [updateCar, setUpdateCar] = useState(false);
  const [lodingCarById, setLoadingCarById] = useState(true); //renderizar componente
  const [carData, setCarData] = useState({}); // pasar por parametro al new component form

  useEffect(() => {
    const fetchUpdateCar = async () => {
      setLoadingCarById(true);
      console.log('selectedCarId:: ', selectedCarId);
      try {
        const res = await axios.get(
          `${URL}/api/cars/single/${selectedCarId}`,
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          },
        );

        setCarData(res.data.car);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUpdateCar(false);
  }, []);

  const handleSubmit = () => {
    setUpdateCar(updateCar);
  };
//la logica del form, va ir en el nuevo componente, (recibe como parametro carData)
  return ( //dividir componente para formulario  y despues de que se realice la petición me lo renderice.
    <>
      <div className="container_edit-car">

        <DashboardTitle
          title="Edit Car"
        />

        <form className="container__add_form" onSubmit={handleSubmit}>

          <div className="container__add-inputs">
            <label className="add_label-title"><b>Car Name</b></label>
            <br />
            <input className="inputs__add" type="text" placeholder="Car Name" />
          </div>

          <div className="container__add-inputs">
            <label htmlFor="car-type" className="add_label-title"><b>Car Type</b></label>
            <br />
            <input className="inputs__add" type="text" placeholder="Car Name" />
          </div>

          <div className="container__add-inputs">
            <label className="add_label-title">
              <b>Upload Car Image here</b>
            </label>
            <br />
            <div className="submit_file">
              <div className="section__submit_file">
                <input type="file" />
                <i className="icon-cloud-up" />
                <h4><b>Drop car img here or click to upload.</b></h4>
              </div>
            </div>
          </div>

          <div className="container__add-inputs">
            <label className="add_label-title"><b>Seats</b></label>
            <br />
            <div className="input-group">
              <div className="container__span">
                <span className="input-group-text">
                  <img src="https://res.cloudinary.com/dbmertsgv/image/upload/v1693273273/samples/ICONS_CAR_EDIT/seat_e37og3.png" alt="seat" />
                </span>
              </div>
              <input className="inputs__add" type="number" placeholder="Seats" />
            </div>

          </div>

          <div className="container__add-inputs">
            <label className="add_label-title"><b>Luggage</b></label>
            <br />
            <div className="input-group">
              <div className="container__span">
                <span className="input-group-text">
                  <img src="https://res.cloudinary.com/dbmertsgv/image/upload/v1693273257/samples/ICONS_CAR_EDIT/luggage_vqprta.png" alt="luggage" />
                </span>
              </div>
              <input className="inputs__add" type="number" placeholder="Luggage" />
            </div>

          </div>

          <div className="container__add-inputs">
            <label className="add_label-title"><b>Air Conditioner</b></label>
            <br />
            <div className="input-group">
              <div className="container__span">
                <span className="input-group-text">
                  <img src="https://res.cloudinary.com/dbmertsgv/image/upload/v1693273273/samples/ICONS_CAR_EDIT/snowflake_uqwwpz.png" alt="air" />
                </span>
              </div>

              <select id="car-type" className="select_add">
                <option>Please choose an option</option>
                <option>True</option>
                <option>False</option>
              </select>

            </div>
          </div>

          <div className="container__add-inputs">
            <label className="add_label-title"><b>Transmition</b></label>
            <br />
            <div className="input-group">
              <div className="container__span">
                <span className="input-group-text">
                  <img src="https://res.cloudinary.com/dbmertsgv/image/upload/v1693273273/samples/ICONS_CAR_EDIT/settings_wijv7z.png" alt="transmition" />
                </span>
              </div>
              <input className="inputs__add" type="text" placeholder="Mecanic or Automatic" />
            </div>
          </div>

          <div className="container__add-inputs">
            <label className="add_label-title"><b>Fare/Km</b></label>
            <br />
            <div className="input-group">
              <div className="container__span">
                <span className="input-group-text">$</span>
              </div>
              <input className="inputs__add" placeholder="Fare/km" type="text" />
            </div>
          </div>

          <div className="buttons__add">
            <button type="submit" className="submit_add">Edit</button>
            <button type="submit" className="submit_add">Cancel</button>
          </div>

        </form>

      </div>
      <Modal
        showModal={updateCar.show}
        handleShowModal={setUpdateCar}
      >
        <h2>{updateCar.msg}</h2>
        <div className="center">
          <button className="secondary-button" type="button" onClick={() => setUpdateModal(false)}>Ok</button>
        </div>
      </Modal>
    </>
  );
};

export default EditCar;
