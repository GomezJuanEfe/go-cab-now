/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import DashboardTitle from '../DashboardTableTitle';
import './AddNewCar.scss';
import { DashboardContext } from '../../store/DashboardContext';
import { UserContext } from '../../store/UserContext';

const URL = import.meta.env.VITE_API_URL;

const AddNewCar = () => {
  const { selectedCar, setSelectCar } = useContext(DashboardContext);
  const { userData } = useContext(UserContext);
  const [drivers, setDrivers] = useState(null);

  useEffect(() => {
    const fetchGetDriversWithoutCars = async () => {
      try {
        const { data } = await axios.get(
          `${URL}/api/users/drivers-without-car`,
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
        );
        setDrivers(data.drivers);
      } catch (error) {
        console.log(error);
      }
    };
    if (userData.role === 'ADMIN') fetchGetDriversWithoutCars();
  }, []);

  const fetchCreateCar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        (`${URL}/api/cars`,
        {
          carName: selectedCar.carName,
          type: selectedCar.carType,
          seats: selectedCar.seats,
          luggage: selectedCar.luggage,
          air_conditioner: selectedCar.air_conditioner,
          transmition: selectedCar.transmition,
          fare_km: selectedCar.fare_km,
          driver_id: '',
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }),
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container__add">

      <DashboardTitle
        title="Add New Car"
      />

      <form
        onSubmit={fetchCreateCar}
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
            value={selectedCar.carName}
          />
        </div>

        <div className="container__add-inputs">
          <label htmlFor="car-type" className="add_label-title"><b>Car Type</b></label>
          <br />
          <input
            className="inputs__add"
            type="text"
            value=""
            name="type"
            placeholder="Car Type"
          />
        </div>

        {drivers
          && (
            <div className="container__add-inputs">
              <label className="add_label-title"><b>Select Drivers</b></label>
              <br />
              <div className="input-group">
                <select id="car-type" className="select_add">
                  <option>Please select an option</option>
                  {drivers.map((item) => (
                    <option>
                      {`${item.first_name} ${item.last_name}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

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
          <label className="add_label-title"><b>Seats</b></label>
          <br />
          <div className="input-group">
            <div className="container__span">
              <span className="input-group-text">
                <img src="https://res.cloudinary.com/dbmertsgv/image/upload/v1693273273/samples/ICONS_CAR_EDIT/seat_e37og3.png" alt="seat" />
              </span>
            </div>
            <input
              name=""
              className="inputs__add"
              type="number"
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
            <input className="inputs__add" placeholder="20" type="text" />
          </div>
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
