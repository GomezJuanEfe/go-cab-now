import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import DashboardTitle from '../DashboardTableTitle';
import DashboardTable from '../DashboardTable';
import carsData from '../../services/Cars-data';

const URL = 'http://localhost:8080/api/cars';

const AllCars = () => {
  const [loading, setLoading] = useState(true);
  const [dataCars, setDataCars] = useState({});

  useEffect(() => {
    const fetchCarsData = async () => {
      setLoading(true);

      try {
        const { data: { cars } } = await axios.get(URL, {
          headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsbGNxcWVkczAwMDB1bDhwaHBsZHh0OGMiLCJlbWFpbCI6ImF2QHRlc3QuY29tIiwiaWF0IjoxNjkzMDc5MzAzLCJleHAiOjE2OTMxNjU3MDN9.PRn_hoGiF74r4MDlOztpjFtFU-9m36bQUwJrGHYFPEM' },
        });
        setDataCars(cars);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchCarsData();
  }, []);

  console.log('carsData', dataCars);

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
            { !loading && dataCars.map((car, index) => (
              <tr key={index}>
                <td>
                  {car.img}
                </td>
                <td>{car.car_name}</td>
                <td>{car.type}</td>
                <td>
                  $
                  {car.fare_km}
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
