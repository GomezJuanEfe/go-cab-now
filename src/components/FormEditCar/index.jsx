/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import './FormEditCar.scss';
import { useContext, useState, useEffect } from 'react';
import Modal from '../Modal';
import { DashboardContext } from '../../store/DashboardContext';

const URL = import.meta.env.VITE_API_URL;

const FormEditCar = () => {
  const { selectedCar } = useContext(DashboardContext);
  const [updateModal, setUpdateModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    id: selectedCar.id,
    car_name: selectedCar.car_name,
    type: selectedCar.type,
    img: selectedCar.img,
    seats: selectedCar.seats,
    luggage: selectedCar.luggage,
    air_conditioner: selectedCar.air_conditioner === 'Yes',
    transmition: selectedCar.transmition,
    fare_km: parseInt(selectedCar.fare_km, 10),
  });

  useEffect(() => {
    setUpdatedData({
      id: selectedCar.id,
      car_name: selectedCar.car_name,
      type: selectedCar.type,
      img: selectedCar.img,
      seats: selectedCar.seats,
      luggage: selectedCar.luggage,
      air_conditioner: selectedCar.air_conditioner,
      transmition: selectedCar.transmition,
      fare_km: selectedCar.fare_km,
    });
  }, []);

  const handleCloseUpdateModal = () => {
    setUpdateModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  const handleSubmitUpdatedCar = (e) => {
    e.preventDefault();
    try {
      axios.patch(
        `${URL}/api/cars/${selectedCar.id}`,
        updatedData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      );
      setUpdateModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container__edit-car">

      <form
        onSubmit={handleSubmitUpdatedCar}
        className="container__add_form"
      >

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Car Name</b></label>
          <br />
          <input
            className="inputs__add"
            type="text"
            value={updatedData.car_name}
            name="car_name"
            onChange={handleChange}
            placeholder="Car Name"
          />
        </div>

        <div className="container__add-inputs">
          <label htmlFor="car-type" className="add_label-title"><b>Car Type</b></label>
          <br />
          <input
            className="inputs__add"
            type="text"
            value={updatedData.type}
            name="type"
            onChange={handleChange}
            placeholder="Car Name"
          />
        </div>

        <div className="container__add-inputs">
          <span>
            <b>Current Image</b>
            <br />
            <div className="container_img_update">
              <img src={selectedCar.img} alt="" />
            </div>
          </span>
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title">
            <b>Upload Car Image here</b>
          </label>
          <br />
          <div className="submit_file">
            <div className="section__submit_file">
              <input
                type="file"
              />
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
            <input
              className="inputs__add"
              type="number"
              value={updatedData.seats}
              name="seats"
              onChange={handleChange}
              placeholder="Seats"
            />
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
            <input
              className="inputs__add"
              type="number"
              value={updatedData.luggage}
              name="luggage"
              onChange={handleChange}
              placeholder="Luggage"
            />
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

            <select
              id="car-type"
              name="air_conditioner"
              onChange={handleChange}
              className="select_add"
              value={updatedData.air_conditioner}
            >
              <option>Please choose an option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
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
            <select
              className="inputs__add"
              type="text"
              value={updatedData.transmition}
              name="transmition"
              onChange={handleChange}
            >
              <option>Please choose an option</option>
              <option>MANUAL</option>
              <option>AUTOMATIC</option>
            </select>
          </div>
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Fare/Km</b></label>
          <br />
          <div className="input-group">
            <div className="container__span">
              <span className="input-group-text">$</span>
            </div>
            <input
              className="inputs__add"
              placeholder="Fare/km"
              value={updatedData.fare_km}
              name="fare_km"
              onChange={handleChange}
              type="text"
            />
          </div>
        </div>

        <div className="buttons__add">
          <button
            type="submit"
            className="submit_add"
            onClick={handleSubmitUpdatedCar}
          >
            Edit
          </button>
          <button
            type="button"
            className="submit_add"
          >
            Cancel
          </button>
        </div>

      </form>
      <Modal
        showModal={updateModal}
        handleShowModal={() => setUpdateModal(false)}
      >
        <h2>Your car was updated successfully</h2>
        <div className="center">
          <button
            className="secondary-button"
            type="button"
            onClick={handleCloseUpdateModal}
          >
            Ok
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FormEditCar;
