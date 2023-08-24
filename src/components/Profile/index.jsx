/* eslint-disable jsx-a11y/label-has-associated-control */
import './Profile.scss';
import { useContext } from 'react';
import profile from '../../assets/images/profile.png';

import DashboardTitle from '../DashboardTableTitle';
import { UserContext } from '../../store/UserContext';

const Profile = () => {
  const { userData } = useContext(UserContext);

  return (

    <div className="container_profile">
      <DashboardTitle
        title="Personal Information"
      />
      <form className="form__profile">

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
            <label htmlFor="container__inputs_label"><b>UserName</b></label>
            <br />
            <input className="inputs__profile" type="number" placeholder="UserName" />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>First Name</b></label>
            <br />
            <input className="inputs__profile" type="text" value={userData.first_name} placeholder="First Name" />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Last Name</b></label>
            <br />
            <input className="inputs__profile" type="text" value={userData.last_name} placeholder="Last Name" />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Address</b></label>
            <br />
            <input className="inputs__profile" type="text" value={userData.address} placeholder="Address" />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Contact Number</b></label>
            <br />
            <input className="inputs__profile" type="number" value={userData.phone} placeholder="Contact Number" />
          </div>

          <div className="container__inputs_profile">
            <label htmlFor="container__inputs_label"><b>Email Address</b></label>
            <br />
            <input className="inputs__profile" type="Email" value={userData.email} placeholder="Email Address" />
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
