/* eslint-disable no-unreachable */
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
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);// muestra img
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

  const handleSubmitUpdatedCar = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('img', file);
    data.append('car_name', selectedCar.car_name);
    data.append('id', selectedCar.id);
    data.append('type', selectedCar.type);
    data.append('seats', parseInt(selectedCar.seats, 10));
    data.append('luggage', parseInt(selectedCar.luggage, 10));
    data.append('air_conditioner', selectedCar.air_conditioner === 'true');
    data.append('transmition', selectedCar.transmition);
    data.append('fare_km', selectedCar.fare_km);
    try {
      const response = await axios.patch(
        `${URL}/api/cars/${selectedCar.id}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return response;
      setUpdateModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  const readFile = (img) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(img);
  };

  const handleUpdateImage = (e) => {
    readFile(e.target.files[0], e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  return (
    <div className="container__edit-car">

      <form
        onSubmit={handleSubmitUpdatedCar}
        className="container__add_form"
      >
        <div className="section_form__car">
          <h3>Upload your image car</h3>
          <div className="car-section__body">
            <div className="car-section__img">
              {image && <img src={image} alt="car_image" />}
            </div>
            <div className="car-section__upload">
              <div className="upload-img">
                <div className="upload-btn">
                  <input
                    id="img"
                    name="img"
                    type="file"
                    className="img_car"
                    accept="image/*"
                    onChange={handleUpdateImage}
                  />
                  <label htmlFor="img">
                    Upload Image
                  </label>
                </div>

              </div>
              <button className="terciary-button" type="button">Remove</button>
            </div>

          </div>

        </div>

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
