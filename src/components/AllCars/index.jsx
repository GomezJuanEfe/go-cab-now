import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from "react-icons/ai";
import DashboardTitle from '../DashboardTableTitle';
import DashboardTable from '../DashboardTable';
import carsData from '../../services/Cars-data';

const AllCars = () => {
  console.log('All cars');
  return (
    <div className="table-container">
      <DashboardTitle title="All Cars" />
      <DashboardTable>
        <table>
          <thead>
            <tr>
              <th>Car Photo</th>
              <th>Car Name</th>
              <th>Type</th>
              <th>Fare/Km</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {carsData.map((car, index) => (
              <tr key={index}>
                <td>
                  <img src={car.car_photo} alt="car_photo" />
                </td>
                <td>{car.car_name}</td>
                <td>{car.car_type}</td>
                <td>
                  $
                  {car.fare}
                </td>
                <td>
                  <FaEdit />
                </td>
                <td>
                  <AiOutlineDelete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DashboardTable>
    </div>
  );
};

export default AllCars;
