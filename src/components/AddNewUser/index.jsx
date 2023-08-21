/* eslint-disable jsx-a11y/label-has-associated-control */
import DashboardTitle from '../DashboardTableTitle';
import './AddNewUser.scss';

const AddNewUser = () => {
  const handleSubmitNewUser = () => {
    console.log(handleSubmitNewUser);
  };
  return (
    <div className="container__add">

      <DashboardTitle
        title="Add New User"
      />

      <form className="container__add_form" onSubmit={handleSubmitNewUser}>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Username</b></label>
          <br />
          <input className="inputs__add" type="text" placeholder="Username" />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>First Name</b></label>
          <br />
          <input className="inputs__add" type="text" placeholder="First Name" />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Last Name</b></label>
          <br />
          <input className="inputs__add" type="text" placeholder="Last Name" />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Last Name</b></label>
          <br />
          <input className="inputs__add" type="text" placeholder="Last Name" />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Address</b></label>
          <br />
          <input className="inputs__add" type="text" placeholder="Address" />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Phone</b></label>
          <br />
          <input className="inputs__add" type="text" placeholder="Phone" />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title"><b>Email</b></label>
          <br />
          <input className="inputs__add" type="text" placeholder="Email" />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title">
            <b>Upload Item Image here</b>
          </label>
          <br />
          <div className="submit_file">
            <div className="section__submit_file">
              <input type="file" />
              <i className="icon-cloud-up" />
              <h4><b>Drop files here or click to upload.</b></h4>
            </div>
          </div>
        </div>

      </form>

      <div className="buttons__add">
        <button onSubmit={handleSubmitNewUser} type="submit" className="submit_add">Submit</button>
        <button type="submit" className="submit_add">Cancel</button>
      </div>

    </div>
  );
};

export default AddNewUser;
