/* eslint-disable jsx-a11y/label-has-associated-control */
import './Profile.scss';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/images/profile.jpg';

import DashboardTitle from '../DashboardTableTitle';
import { UserContext } from '../../store/UserContext';
import useForm from '../../hooks/useForm';
import Modal from '../Modal';
import LoadingModal from '../LoadingModal';

const URL = import.meta.env.VITE_API_URL;

const Profile = () => {
  const {
    userData,
    setUserData,
    loadingUser,
    logOut,
  } = useContext(UserContext);

  const [updateModal, setUpdateModal] = useState({ show: false, msg: '' });
  const [deleteModal, setDeleteModal] = useState(false);
  const { form, handleForm, resetForm } = useForm({
    first_name: userData.first_name,
    last_name: userData.last_name,
    address: userData.address,
    phone: userData.phone,
    email: userData.email,
  });
  const [loadingModal, setLoadingModal] = useState(false);

  useEffect(() => {
    resetForm({
      first_name: userData.first_name,
      last_name: userData.last_name,
      address: userData.address,
      phone: userData.phone,
      email: userData.email,
    });
  }, [loadingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingModal(true);
    axios.patch(`${URL}/api/users/single`, form, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(({ data }) => {
        setUserData({ ...data.data });
        setUpdateModal({ show: true, msg: data.message });
      })
      .catch((err) => {
        setUpdateModal({ show: true, msg: err.message });
      })
      .finally(() => {
        setLoadingModal(false);
      });
  };

  const updateImage = async (fl, name) => {
    const data = new FormData();

    data.append('avatar', fl, name);
    const response = await axios.post(
      `${URL}/api/users/upload-img`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );
    return response;
  };

  const readFile = (fl, name) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        setLoadingModal(true);
        const { data } = await updateImage(fl, name);
        setUserData({ ...userData, avatar: data.avatar });
        setUpdateModal({ show: true, msg: data.message });
      } catch (error) {
        setUpdateModal({ show: true, msg: error.message });
      } finally {
        setLoadingModal(false);
      }
    };
    reader.readAsDataURL(fl);
  };

  const handleUploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) readFile(files[0], files[0].name);
  };

  const handleRemoveImg = async () => {
    try {
      setLoadingModal(true);
      const { data } = await axios.patch(
        `${URL}/api/users/single`,
        { avatar: '' },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      );
      setUserData({ ...userData, avatar: data.avatar });
      setUpdateModal({ show: true, msg: 'Image removed successfully' });
    } catch (error) {
      setUpdateModal({ show: true, msg: error.message });
    } finally {
      setLoadingModal(false);
    }
  };

  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    setLoadingModal(true);
    await axios.delete(`${URL}/api/users`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    logOut();
    setLoadingModal(false);
    navigate('/');
  };

  return (

    <>
      <div className="container_profile">
        <DashboardTitle
          title="Personal Information"
        />

        <div className="avatar-section form__profile">
          <h3>Avatar</h3>
          <div className="avatar-section__body">
            <div className="avatar-section__img">
              <img src={userData.avatar || profile} alt="profile" />
            </div>
            <div className="avatar-section__upload">
              <div className="upload-img">
                <div className="upload-btn">
                  <input
                    type="file"
                    id="img"
                    className="img_profile"
                    accept="image/*"
                    onChange={handleUploadImage}
                  />
                  <label htmlFor="img">
                    Upload
                  </label>
                </div>

              </div>
              <button className="terciary-button" type="button" onClick={handleRemoveImg}>Remove</button>
            </div>

          </div>

        </div>

        <form className="form__profile" onSubmit={handleSubmit}>
          <h3>General</h3>
          <div className="container__form_profile">

            <div className="container__inputs_profile">
              <label htmlFor="container__inputs_label"><b>First Name</b></label>
              <br />
              <input className="inputs__profile" type="text" value={form.first_name || ''} placeholder="First Name" name="first_name" onChange={handleForm} />
            </div>

            <div className="container__inputs_profile">
              <label htmlFor="container__inputs_label"><b>Last Name</b></label>
              <br />
              <input className="inputs__profile" type="text" value={form.last_name || ''} placeholder="Last Name" name="last_name" onChange={handleForm} />
            </div>

            <div className="container__inputs_profile">
              <label htmlFor="container__inputs_label"><b>Address</b></label>
              <br />
              <input className="inputs__profile" type="text" value={form.address || ''} placeholder="Address" name="address" onChange={handleForm} />
            </div>

            <div className="container__inputs_profile">
              <label htmlFor="container__inputs_label"><b>Contact Number</b></label>
              <br />
              <input className="inputs__profile" type="text" value={form.phone || ''} placeholder="Contact Number" name="phone" onChange={handleForm} />
            </div>

            <div className="container__inputs_profile">
              <label htmlFor="container__inputs_label"><b>Email Address</b></label>
              <br />
              <input className="inputs__profile" type="Email" value={form.email || ''} placeholder="Email Address" name="email" onChange={handleForm} readOnly />
            </div>

          </div>
          <button
            type="submit"
            className="btn__profile"
          >
            Save Changes
          </button>

          <div>
            <button
              type="button"
              className="btn__delete-acc"
              onClick={() => setDeleteModal(true)}
            >
              Delete Account
            </button>
          </div>
        </form>
      </div>
      <Modal
        showModal={updateModal.show}
        handleShowModal={setUpdateModal}
      >
        <h2>{updateModal.msg}</h2>
        <div className="center">
          <button className="secondary-button" type="button" onClick={() => setUpdateModal(false)}>Ok</button>
        </div>
      </Modal>
      <Modal
        showModal={deleteModal}
        handleShowModal={() => setDeleteModal(false)}
      >
        <h2>You are about to delete you account permanently. Are you sure?</h2>
        <div className="center">
          <button className="secondary-button" onClick={handleDeleteAccount} type="button">Confirm</button>
          <button className="terciary-button" type="button" onClick={() => setDeleteModal(false)}>Cancel</button>
        </div>
      </Modal>
      <LoadingModal show={loadingModal} />
    </>
  );
};

export default Profile;
