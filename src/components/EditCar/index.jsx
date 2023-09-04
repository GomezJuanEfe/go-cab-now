/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import DashboardTitle from '../DashboardTableTitle';
import './EditCar.scss';
import Modal from '../Modal';
import FormEditCar from '../FormEditCar';

const EditCar = () => {
  const [updateCar, setUpdateCar] = useState(false);

  return (

    <div className="container_edit-car">

      <DashboardTitle
        title="Edit Car"
      />

      <FormEditCar />

      <Modal
        showModal={updateCar.show}
        handleShowModal={setUpdateCar}
      >
        <div className="center">
          <h2>Car have been updated correctly</h2>
        </div>
      </Modal>

    </div>
  );
};

export default EditCar;
