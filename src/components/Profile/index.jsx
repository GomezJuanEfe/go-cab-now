/* eslint-disable jsx-a11y/label-has-associated-control */
import './Profile.scss';
import { useContext } from 'react';
import axios from 'axios';
import profile from '../../assets/images/profile.png';

import DashboardTitle from '../DashboardTableTitle';
import { UserContext } from '../../store/UserContext';

const URL = import.meta.env.VITE_API_URL;

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      first_name, last_name, address, phone, email,
    } = userData;
    axios.patch(
      `${URL}/api/users/single`,
      {
        first_name, last_name, address, phone, email,
      },
      { headers: { Authorization: `Bearer ${userData.token}` } },
    )
      .then(({ data }) => {
        alert(data.message);
      })
      .catch((err) => {
        console.log(err);
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
            <label htmlFor="container__inputs_label"><b>User Name</b></label>
            <br />
            <input className="inputs__profile" type="number" placeholder="UserName" />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>First Name</b></label>
            <br />
            <input className="inputs__profile" type="text" value={userData.first_name} placeholder="First Name" name="first_name" onChange={handleChange} />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Last Name</b></label>
            <br />
            <input className="inputs__profile" type="text" value={userData.last_name} placeholder="Last Name" name="last_name" onChange={handleChange} />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Address</b></label>
            <br />
            <input className="inputs__profile" type="text" value={userData.address} placeholder="Address" name="address" onChange={handleChange} />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Contact Number</b></label>
            <br />
            <input className="inputs__profile" type="number" value={userData.phone} placeholder="Contact Number" name="phone" onChange={handleChange} />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Email Address</b></label>
            <br />
            <input className="inputs__profile" type="Email" value={userData.email} placeholder="Email Address" name="email" onChange={handleChange} />
          </div>

        </div>
        <button
          type="submit"
          className="btn__profile"
        >
          Save Change
          {' '}
        </button>

      </form>
    </div>

  );
};

export default Profile;

/*
"
Invalid `prisma.user.update()` invocation in
/home/gomezjuan/MIR-bootcamp/projects/go-cab-now-backend/src/api/user/user.service.ts:101:36

   98   const hashedPassword = await hashPassword(password);
   99   data.password = hashedPassword;
  100 }
→ 101 const user = await prisma.user.update(
Unique constraint failed on the fields: (`email`)"
*/
