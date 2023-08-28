/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import axios from 'axios';
import { useContext } from 'react';
import DashboardTitle from '../DashboardTableTitle';
import './AddNewCar.scss';
import { FormContext } from '../../store/FormContext';

const URL = 'http://localhost:8080/api/cars';

const AddNewCar = () => {
  const { createNewCar, handleCreateNewCar } = useContext(FormContext);

  const fetchCreateCar = async () => {
    try {
      const response = await axios.post(
        URL,
        {
          carName: parseInt(createNewCar.carName, 10),
          type: parseInt(createNewCar.carType, 10),
          driver_id: selectedCar.car_id, //como me podría traer el id del driver
        },
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsbHNwYzByeTAwMDMyOTI4dHNndGtuZ3EiLCJlbWFpbCI6ImF2QHRlc3QuY29tIiwiaWF0IjoxNjkzMTY3OTI3LCJleHAiOjE2OTMyNTQzMjd9.flI1QzLGaKW8ijAyjoGg893ADlBch8Nb90k7nLZTcvQ',
          },
        },
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitNewCar = (e) => {
    console.log(e, handleSubmitNewCar);
  };

  return (
    <div className="container__add">

      <DashboardTitle
        title="Add New Car"
      />

      <form
        onSubmit={handleSubmitNewCar}
        className="container__add_form"
      >

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Car Name</b></label>
          <br />
          <input
            id="carName"
            name="carName"
            className="inputs__add"
            type="text"
            placeholder="Car Name"
            value={createNewCar.carName}
            onChange={handleCreateNewCar}
          />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title">
            <b>Upload Car Image here</b>
          </label>
          <br />
          <div className="submit_file">
            <div className="section__submit_file">
              <input
                accept=".jpg, .png"
                multiple={false}
                type="file"
              />
              <i className="icon-cloud-up" />
              <h4><b>Drop files here or click to upload.</b></h4>
            </div>
          </div>
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Capacity</b></label>
          <br />
          <select className="select_add">
            <option>1-5 Passangers</option>
            <option>6-10 Passangers</option>
          </select>
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Fare/Km</b></label>
          <br />
          <div className="input-group">
            <div className="container__span">
              <span className="input-group-text">$</span>
            </div>
            <input
              id="fareKm"
              name="fareKm"
              className="inputs__add"
              placeholder="20"
              type="text"
              value={createNewCar.fareKm}
              onChange={handleCreateNewCar}
            />
          </div>
        </div>

        <div className="container__add-inputs">
          <label htmlFor="car-type" className="add_label-title"><b>Car Type</b></label>
          <br />
          <select id="car-type" className="select_add">

            <option> </option>
            <option>Hatchback</option>
            <option>Sedan</option>
            <option>Electric Sedan</option>
            <option>SUV</option>
            <option>Van</option>
            <option>Camper</option>
            <option>Luxery Coupe</option>

          </select>
        </div>

      </form>

      <div className="buttons__add">
        <button
          type="submit"
          className="submit_add"
        >
          Submit
        </button>
        <button
          type="submit"
          className="submit_add"
        >
          Cancel
        </button>
      </div>

    </div>
  );
};

export default AddNewCar;
