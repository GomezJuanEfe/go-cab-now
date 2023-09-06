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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectCar({
      ...selectedCar,
      [name]: value,
    });
  };

  const fetchCreateCar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        (`${URL}/api/cars`,
        selectedCar,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }),
      );
      // return response;
      console.log('response', response);
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
            name="car_name"
            className="inputs__add"
            type="text"
            placeholder="Car Name"
            value={selectedCar.car_name}
            onChange={handleInputChange}
          />
        </div>

        <div className="container__add-inputs">
          <label htmlFor="car-type" className="add_label-title"><b>Car Type</b></label>
          <br />
          <input
            className="inputs__add"
            type="text"
            value={selectedCar.type}
            onChange={handleInputChange}
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
              value={selectedCar.seats}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              value={selectedCar.luggage}
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
            <input
              className="inputs__add"
              type="text"
              onChange={handleInputChange}
              value={selectedCar.transmition}
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
              placeholder="20"
              onChange={handleInputChange}
              value={selectedCar.fare_km}
              type="number"
            />
          </div>
        </div>

        <div className="buttons__add">
          <button
            type="submit"
            className="submit_add"
            onClick={fetchCreateCar}
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

      </form>

    </div>
  );
};
export default AddNewCar;
