/* eslint-disable jsx-a11y/label-has-associated-control */
import './Profile.scss';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import profile from '../../assets/images/profile.png';

import DashboardTitle from '../DashboardTableTitle';
import { UserContext } from '../../store/UserContext';
import useForm from '../../hooks/useForm';

const URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('token');

const Profile = () => {
  const { userData, setUserData, loadingUser } = useContext(UserContext);
  const { form, handleForm, resetForm } = useForm({
    first_name: userData.first_name,
    last_name: userData.last_name,
    address: userData.address,
    phone: userData.phone,
    email: userData.email,
  });

  useEffect(() => {
    resetForm({
      first_name: userData.first_name,
      last_name: userData.last_name,
      address: userData.address,
      phone: userData.phone,
      email: userData.email,
    });
  }, [loadingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch(`${URL}/api/users/single`, form, { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => {
        setUserData({ ...data.data });
        alert(data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (

    <div className="container_profile">
      <DashboardTitle
        title="Personal Information"
      />

      <form className="form__profile" onSubmit={handleSubmit}>
        <div className="personal__info">
          <div className="personal-info__img">
            <img src={profile} alt="profile" />
          </div>
          <div className="personal-info__uplode">
            <p>
              Max file size is 5MB,Minimum dimension 150x150
              And Suitable files are .jpg & .png
              {' '}
            </p>
            <div className="uplode-img">
              <label htmlFor="img">
                <i data-feather="upload" />
                {' '}
                Uploade Image here
              </label>
              <input
                type="file"
                id="img"
                className="img_profile"
                accept="image/*"
              />
            </div>
            <button className="btn__profile remove_img" type="submit"> Remove Image</button>
          </div>

        </div>

        <div className="container__form_profile">

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>First Name</b></label>
            <br />
            <input className="inputs__profile" type="text" value={form.first_name || ''} placeholder="First Name" name="first_name" onChange={handleForm} />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Last Name</b></label>
            <br />
            <input className="inputs__profile" type="text" value={form.last_name || ''} placeholder="Last Name" name="last_name" onChange={handleForm} />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Address</b></label>
            <br />
            <input className="inputs__profile" type="text" value={form.address || ''} placeholder="Address" name="address" onChange={handleForm} />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Contact Number</b></label>
            <br />
            <input className="inputs__profile" type="number" value={form.phone || ''} placeholder="Contact Number" name="phone" onChange={handleForm} />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Email Address</b></label>
            <br />
            <input className="inputs__profile" type="Email" value={form.email || ''} placeholder="Email Address" name="email" onChange={handleForm} readOnly />
          </div>

        </div>
        <button
          type="submit"
          className="btn__profile"
        >
          Save Change
        </button>

      </form>
    </div>

  );
};

export default Profile;
