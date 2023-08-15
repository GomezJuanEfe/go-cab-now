/* eslint-disable jsx-a11y/label-has-associated-control */
import './Profile.scss';
import profile from '../../assets/images/profile.png';

const Profile = (props) => {
  console.log();
  return (
    <div className="container_profile">
      <form className="form__profile">

        <div className="personal__info">
          <div className="personal-info__img">
            <img src={profile} alt="profile" />
          </div>
          <div className="  personal-info__uplode">
            <p>
              Max file size is 5MB,Minimum dimension 150x150
              And Suitable files are .jpg & .png
              {' '}
            </p>
            <div className="uplode-img">
              <input
                type="file"
                id="img"
                className="img_profile"
                accept="image/*"
              />
              <label htmlFor="img">
                <i data-feather="upload" />
                {' '}
                Uploade Image here
              </label>
            </div>
            <button className="btn__profile" type="submit"> Remove Image</button>
          </div>

        </div>

        <div className="container__profile">

          <div className="container__inputs_profile">
            <label className="container__inputs_label">UserName</label>
            <input className="form-control" type="number" placeholder="UserName" />
          </div>

          <div className="container__inputs_profile">
            <label className="container__inputs_label">First Name</label>
            <input className="form-control" type="text" placeholder="First Name" />
          </div>

          <div className="container__inputs_profile">
            <label className="container__inputs_label">Last Name</label>
            <input className="form-control" type="text" placeholder="Last Name" />
          </div>

          <div className="container__inputs_profile">
            <label className="container__inputs_label">Address</label>
            <input className="form-control" type="text" placeholder="Address" />
          </div>

          <div className="container__inputs_profile">
            <label className="container__inputs_label">Contact Number</label>
            <input className="form-control" type="number" placeholder="Contact Number" />
          </div>

          <div className="container__inputs_profile">
            <label className="container__inputs_label">Email Address</label>
            <input className="form-control" type="Email" placeholder="Email Address" />
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
