/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useState } from 'react';
import useForm from '../../hooks/useForm';

const URL = import.meta.env.VITE_API_URL;

const FormEditCar = ({ carData, updateCar, setUpdateCar }) => {
  const { form, handleForm, resetForm } = useForm({
    id: carData.id,
    img: carData.img,
    car_name: carData.car_name,
    type: carData.type,
    fare_km: carData.fare_km,
  });

  const handleSubmit = (e) => {
    e.prevenntDefault();

    axios.patch(`${URL}/api/cars/single`, form, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }),
    setUpdateCar(updateCar);
  };

  return (

    <form
      className="container__add_form"
      onSubmit={handleSubmit}
    >

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

  );
};

export default FormEditCar;
