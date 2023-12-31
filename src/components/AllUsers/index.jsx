import { FaEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
import { useEffect, useState } from 'react';
import DashboardTitle from '../DashboardTableTitle';
import DashboardTable from '../DashboardTable';
import profileImg from '../../assets/images/profile.jpg';
import Modal from '../Modal';
import './AllUsers.scss';
import useForm from '../../hooks/useForm';
import Loading from '../Loading';
import LoadingModal from '../LoadingModal';
import ErrorModal from '../ErrorModal';

const fetcher = (url) => axios.get(url, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((res) => res.data);
const URL = import.meta.env.VITE_API_URL;

const AllUsers = () => {
  const { data, error, isLoading } = useSWR(`${URL}/api/users/`, fetcher);
  const { mutate } = useSWRConfig();
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, msg: '' });
  const [showLoading, setShowLoading] = useState(false);

  const [selectedUser, setSelectedUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    role: '',
  });

  const { form, handleForm, resetForm } = useForm({
    first_name: selectedUser.first_name,
    last_name: selectedUser.last_name,
    email: selectedUser.email,
    phone: selectedUser.phone,
    role: selectedUser.role,
  });

  useEffect(() => {
    if (selectedUser) {
      resetForm({
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        email: selectedUser.email,
        phone: selectedUser.phone,
        role: selectedUser.role,
      });
    }
  }, [selectedUser]);

  const showEditUserModal = (user) => {
    setSelectedUser(user);
    setEditModal(true);
  };

  const showDeletUserModal = (user) => {
    setSelectedUser(user);
    setDeleteModal(true);
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    setEditModal(false);
    setShowLoading(true);
    axios.patch(`${URL}/api/users`, { ...form }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(() => {
        mutate(`${URL}/api/users/`);
      })
      .catch(({ message }) => {
        setErrorModal({ show: true, msg: message });
        console.error(message);
      })
      .finally(() => setShowLoading(false));
  };

  const handleDeleteUser = () => {
    setDeleteModal(false);
    setShowLoading(true);
    axios.delete(`${URL}/api/users/${selectedUser.email}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(() => {
        mutate(`${URL}/api/users/`);
      })
      .catch(({ message }) => {
        setDeleteModal(false);
        setErrorModal({ show: true, msg: message });
        console.error(message);
      })
      .finally(() => setShowLoading(false));
  };

  return (
    <>
      <div className="table-container">
        <DashboardTitle title="All Users" />
        <DashboardTable>
          { error && <div>Failed to load</div> }
          { isLoading && <Loading /> }
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
                        onClick={() => showEditUserModal(item)}
                        className="icon_edit"
                      />
                    </td>
                    <td>
                      <AiOutlineDelete
                        onClick={() => showDeletUserModal(item)}
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
      <Modal showModal={editModal} handleShowModal={() => setEditModal(false)}>
        <h2>Edit User</h2>
        <form className="edit-user-form" onSubmit={handleEditUser}>

          <div className="form-input">
            <label htmlFor="fistName">First Name</label>
            <input type="text" name="first_name" id="fistName" value={form.first_name || ''} onChange={handleForm} />
          </div>

          <div className="form-input">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="last_name" id="lastName" value={form.last_name || ''} onChange={handleForm} />
          </div>

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={form.email || ''} readOnly />
          </div>

          <div className="form-input">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" value={form.phone || ''} onChange={handleForm} />
          </div>

          <div className="form-input">
            <label htmlFor="role">Role</label>
            <select name="role" id="role" value={form.role || ''} onChange={handleForm}>
              <option value="USER">USER</option>
              <option value="DRIVER">DRIVER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>

          <button className="secondary-button" type="submit">Submit</button>
        </form>
      </Modal>
      <Modal showModal={deleteModal} handleShowModal={() => setDeleteModal(false)}>
        <h2>You&apos;re about to delete a user. Are you sure?</h2>
        <div className="body">
          <p>{`Name: ${selectedUser.first_name} ${selectedUser.last_name}`}</p>
          <p>{`Role: ${selectedUser.role}`}</p>
          <p>{`Email: ${selectedUser.email}`}</p>
          <p>{`Phone: ${selectedUser.phone}`}</p>
        </div>
        <div className="center">
          <button className="secondary-button" onClick={handleDeleteUser} type="button">Confirm</button>
          <button className="terciary-button" type="button" onClick={() => setDeleteModal(false)}>Cancel</button>
        </div>
      </Modal>
      <Modal
        showModal={errorModal.show}
        handleShowModal={() => setErrorModal({ ...errorModal, show: !errorModal.show })}
      >
        <ErrorModal errorMessage={errorModal.msg} />
      </Modal>
      <LoadingModal show={showLoading} />
    </>
  );
};

export default AllUsers;
