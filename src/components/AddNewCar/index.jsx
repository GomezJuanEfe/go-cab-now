/* eslint-disable no-unused-vars */
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
  const { setSelectCar, selectedCar } = useContext(DashboardContext);
  const { userData } = useContext(UserContext);
  const [drivers, setDrivers] = useState(null);
  const [selectedDriverEmail, setSelectedDriverEmail] = useState({
    driver_email: '',
  });

  const [createCar, setCreateCar] = useState({
    car_name: selectedCar.car_name,
    type: selectedCar.type,
    img: selectedCar.img,
    seats: selectedCar.seats,
    luggage: selectedCar.luggage,
    air_conditioner: selectedCar.air_conditioner,
    transmition: selectedCar.transmition,
    fare_km: selectedCar.fare_km,
  });

  console.log('create car', createCar);

  // traer user segun role condicion:
  // si el role role es admin obj con item requeridos crear objeto.
  // si es driver objeto DriverEmail
  useEffect(() => {
    const fetchGetDriversWithoutCars = async () => {
      try {
        const { data } = await axios.get(
          `${URL}/api/users/drivers-without-car`,
          { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
        );
        setDrivers(data.drivers);
      } catch (error) {
        console.error(error);
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

  const handleDriverChange = (e) => {
    const { driverEmail } = e.target.options[e.target.selectedIndex].dataset;
    setSelectedDriverEmail(
      driverEmail,
    );
  };

  const fetchCreateCar = async (e) => {
    e.preventDefault();
    console.log(selectedCar);
    try {
      const response = await axios.post(
        `${URL}/api/cars`,
        {
          car_info: {
            createCar,
          },
          driver_email: selectedDriverEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      // return response;
      console.log('response', response);
    } catch (error) {
      console.error(error);
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
            name="type"
            className="inputs__add"
            type="text"
            value={selectedCar.type}
            onChange={handleInputChange}
            placeholder="Car Type"
          />
        </div>

        {drivers
          && (
            <div className="container__add-inputs">
              <label className="add_label-title"><b>Select Drivers</b></label>
              <br />
              <div className="input-group">
                <select
                  name="driver_id"
                  id="car-type"
                  className="select_add"
                  onChange={handleDriverChange}
                  value={selectedDriverEmail.driver_email}
                >
                  <option>Please select an option</option>
                  {drivers.map((item) => (
                    <option key={item.id} value={item.id} data-driver-email={item.email}>
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
              name="seats"
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
              name="luggage"
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

            <select
              name="air_conditioner"
              id="car-type"
              className="select_add"
              value={selectedCar.air_conditioner}
              onChange={handleInputChange}
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
            <select
              name="transmition"
              className="inputs__add"
              type="text"
              onChange={handleInputChange}
              value={selectedCar.transmition}
            >
              <option>Please choose an option</option>
              <option>MECANIC</option>
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
              name="fare_km"
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
