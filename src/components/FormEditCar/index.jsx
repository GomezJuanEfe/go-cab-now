/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { DashboardContext } from '../../store/DashboardContext';
import './FormEditCar.scss';

const URL = import.meta.env.VITE_API_URL;

const FormEditCar = () => {
  const { selectedCar } = useContext(DashboardContext);

  const [updatedData, setUpdatedData] = useState({
    id: selectedCar.id,
    car_name: selectedCar.car_name,
    type: selectedCar.type,
    img: selectedCar.img,
    seats: selectedCar.seats,
    luggage: selectedCar.luggage,
    transmition: selectedCar.transmition,
    fare_km: selectedCar.fare_km,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };
  console.log("updatedData", updatedData);

  const handleSubmitUpdatedCar = (e) => {
    e.preventDefault();
    try {
      axios.patch(
        `${URL}/api/cars/${selectedCar.id}`,
        updatedData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      );
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (

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
            onChange={handleChange}
            className="select_add"
            value={updatedData.air_conditionaer}
          >
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
          <input
            className="inputs__add"
            type="text"
            value={updatedData.transmition}
            name="transmition"
            onChange={handleChange}
            placeholder="Mecanic or Automatic"
          />
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
        <button type="submit" className="submit_add">Cancel</button>
      </div>

    </form>

  );
};

export default FormEditCar;
