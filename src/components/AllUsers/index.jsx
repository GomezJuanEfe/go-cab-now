import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import useSWR from 'swr';
import DashboardTitle from '../DashboardTableTitle';
import DashboardTable from '../DashboardTable';
import profileImg from '../../assets/images/profile4.jpg';
import './AllUsers.scss';

const fetcher = (url) => axios.get(url, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((res) => res.data);
const URL = import.meta.env.VITE_API_URL;

const AllUsers = () => {
  const { data, error, isLoading } = useSWR(`${URL}/api/users/`, fetcher);

  const handleEditUser = () => {
    alert('Edit User');
  };
  const handleShowModalUser = () => {
    alert('Show modal to confirm deletion');
  };

  return (
    <div className="table-container">
      <DashboardTitle title="All Users" />
      <DashboardTable>
        { error && <div>Failed to load</div> }
        { isLoading && <div>Loading</div> }
        { (!error && !isLoading)
          && (
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Name</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              { data.users.map((item) => (
                <tr key={item.email}>
                  <td>
                    <div className="user-list-img">
                      <img src={item.avatar || profileImg} alt="Profile" />
                    </div>
                  </td>
                  <td>{`${item.first_name} ${item.last_name}`}</td>
                  <td>{item.role}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>
                    <FaEdit
                      onClick={() => handleEditUser()}
                      className="icon_edit"
                    />
                  </td>
                  <td>
                    <AiOutlineDelete
                      onClick={() => handleShowModalUser()}
                      className="icon_delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
      </DashboardTable>
    </div>
  );
};

export default AllUsers;
