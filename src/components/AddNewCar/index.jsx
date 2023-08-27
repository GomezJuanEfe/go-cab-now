/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import DashboardTitle from '../DashboardTableTitle';
import './AddNewCar.scss';

const AddNewCar = () => {
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
          <input className="inputs__add" type="text" placeholder="Car Name" />
        </div>

        <div className="container__add-inputs">
          <label className="add_label-title">
            <b>Upload Car Image here</b>
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
            <input className="inputs__add" placeholder="20" type="text" />
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
        <button type="submit" className="submit_add">Submit</button>
        <button type="submit" className="submit_add">Cancel</button>
      </div>

    </div>
  );
};

export default AddNewCar;
