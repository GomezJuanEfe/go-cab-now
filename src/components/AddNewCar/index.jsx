/* eslint-disable consistent-return */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import DashboardTitle from '../DashboardTableTitle';
import './AddNewCar.scss';
import { UserContext } from '../../store/UserContext';
import Modal from '../Modal';
import { iconsURL } from '../../assets/variable.img';

const URL = import.meta.env.VITE_API_URL;

const AddNewCar = () => {
  const { userData } = useContext(UserContext);
  const [createModal, setCreateModal] = useState(false);
  const [drivers, setDrivers] = useState(null);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);// muestra img
  const [selectedDriverEmail, setSelectedDriverEmail] = useState({ driver_email: '' });
  const [createCar, setCreateCar] = useState({
    car_name: '',
    type: '',
    img: '',
    seats: '',
    luggage: '',
    air_conditioner: '',
    transmition: '',
    fare_km: '',
    driver_id: '',
  });

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
    if (userData.role === 'DRIVER') setSelectedDriverEmail(userData.email);
  }, []);

  const resetForm = () => {
    setCreateCar({
      car_name: '',
      type: '',
      img: '',
      seats: '',
      luggage: '',
      air_conditioner: '',
      transmition: '',
      fare_km: '',
      driver_id: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateCar({
      ...createCar,
      [name]: value,
    });
  };

  const handleDriverChange = (e) => {
    const { driverEmail } = e.target.options[e.target.selectedIndex].dataset;
    setSelectedDriverEmail(
      driverEmail,
    );
  };

  const handleCloseModal = () => {
    resetForm();
    setImage(null);
    setCreateModal(false);
  };

  const handleCreateDataCar = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('img', file, file.name);
    data.append('car_name', createCar.car_name);
    data.append('type', createCar.type);
    data.append('seats', parseInt(createCar.seats, 10));
    data.append('luggage', parseInt(createCar.luggage, 10));
    data.append('air_conditioner', createCar.air_conditioner === 'true');
    data.append('transmition', createCar.transmition);
    data.append('fare_km', parseInt(createCar.fare_km, 10));
    data.append('driver_id', selectedDriverEmail);

    try {
      await axios.post(
        `${URL}/api/cars`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      setCreateModal(true);
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

  const handleUpdateImg = (e) => {
    readFile(e.target.files[0], e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="container__add">

        <DashboardTitle
          title="Add New Car"
        />

        <form
          onSubmit={handleCreateDataCar}
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
                      onChange={handleUpdateImg}
                    />
                    <label htmlFor="img">
                      Upload Image
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container__add-inputs">
            <label className="add_label-title"><b>Car Name</b></label>
            <br />
            <input
              name="car_name"
              className="inputs__add"
              type="text"
              placeholder="Car Name"
              value={createCar.car_name}
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
              value={createCar.type}
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
            <label className="add_label-title"><b>Seats</b></label>
            <br />
            <div className="input-group">
              <div className="container__span">
                <span className="input-group-text">
                  <img src={iconsURL.seats} alt="seat" />
                </span>
              </div>
              <input
                name="seats"
                className="inputs__add"
                type="number"
                placeholder="Seats"
                value={createCar.seats}
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
                  <img src={iconsURL.luggage} alt="luggage" />
                </span>
              </div>
              <input
                name="luggage"
                className="inputs__add"
                type="number"
                onChange={handleInputChange}
                value={createCar.luggage}
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
                  <img src={iconsURL.air_conditioner} alt="air" />
                </span>
              </div>

              <select
                name="air_conditioner"
                id="car-type"
                className="select_add"
                value={createCar.air_conditioner}
                onChange={handleInputChange}
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
                  <img src={iconsURL.transmition} alt="transmition" />
                </span>
              </div>
              <select
                name="transmition"
                className="inputs__add"
                type="text"
                onChange={handleInputChange}
                value={createCar.transmition}
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
                name="fare_km"
                className="inputs__add"
                placeholder="20"
                onChange={handleInputChange}
                value={createCar.fare_km}
                type="number"
              />
            </div>
          </div>

          <div className="buttons__add">
            <button
              type="submit"
              className="submit_add"
              onClick={() => setCreateModal(true)}
            >
              Submit
            </button>
            <button
              type="button"
              className="submit_add"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

      <Modal
        showModal={createModal}
        handleShowModal={() => setCreateModal(false)}
      >
        <h2>You created a new car</h2>
        <div className="center">
          <button
            className="secondary-button"
            type="button"
            onClick={handleCloseModal}
          >
            Ok
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddNewCar;
