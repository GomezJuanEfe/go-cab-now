import './BookingList.scss';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import DashboardTable from '../DashboardTable';
import DashboardTitle from '../DashboardTableTitle';
import Modal from '../Modal';
import Reschedule from '../Reschedule';
import { DashboardContext } from '../../store/DashboardContext';
import { usdFormat } from '../../services/utils';
import { formatTableDate } from '../../services/DateFormat';
import { UserContext } from '../../store/UserContext';
import CompleteTrip from '../CompleteTrip';
import CancelTrip from '../CancelTrip';
import LoadingModal from '../LoadingModal';
import ErrorModal from '../ErrorModal';

const URL = import.meta.env.VITE_API_URL;

const BookingsList = () => {
  const { userData } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, msg: '' });
  const [loading, setLoading] = useState(true);
  const {
    setSelectedTrip,
    tripsData,
    setTripsData,
    selectedTrip,
  } = useContext(DashboardContext);

  const urlHandler = () => {
    let url = '';
    if (userData.role === 'ADMIN') {
      url = `${URL}/api/trips`;
    } if (userData.role === 'USER') {
      url = `${URL}/api/trips/user-trips`;
    } if (userData.role === 'DRIVER') {
      url = `${URL}/api/trips/car-trips`;
    }

    return url;
  };

  useEffect(() => {
    const fetchTripsdata = async () => {
      setLoading(true);
      const fetchUrl = urlHandler();
      try {
        const { data: { trips } } = await axios.get(
          fetchUrl,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        );

        setTripsData(trips);
      } catch ({ message }) {
        setErrorModal({ show: true, msg: message });
      }
      setLoading(false);
    };

    fetchTripsdata();
  }, []);

  const handleSetShowModal = (bookingData) => {
    if (!showModal) {
      setSelectedTrip({
        origin_latitude: bookingData.origin_latitude,
        destination_latitude: bookingData.destination_latitude,
        id: bookingData.id,
        date: new Date(bookingData.date),
      });
    }
    setShowModal(!showModal);
  };

  const handleCancelModal = (bookingData) => {
    if (!cancelModal) {
      setSelectedTrip({
        origin_latitude: bookingData.origin_latitude,
        destination_latitude: bookingData.destination_latitude,
        id: bookingData.id,
        date: new Date(bookingData.date),
      });
    }
    setCancelModal(!cancelModal);
  };

  const handleShowModal = (bookingData) => {
    if (!showModal) {
      setSelectedTrip(bookingData);
    }
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="table-container">
        <DashboardTitle title="Bookings">
          <NavLink to="/cab-list">
            <button className="add-button secondary-button" type="button">
              <AiOutlinePlusSquare />
              <span>Add New Booking</span>
            </button>
          </NavLink>
        </DashboardTitle>
        <DashboardTable>
          <table>
            <thead>
              <tr>
                <th>Itinerary</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { !loading && tripsData.map((booking) => (
                <tr key={booking.id}>
                  <td>{`${booking.origin_latitude} to ${booking.destination_latitude}`}</td>
                  <td>{usdFormat(booking?.total)}</td>
                  <td>{formatTableDate(booking.date)}</td>
                  <td>
                    <span className={booking.status === 'PAST' ? 'status--past' : booking.status === 'UPCOMING' ? 'status--upcoming' : 'status--cancelled'}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    {userData.role === 'DRIVER'
                      ? <span onClick={() => handleShowModal(booking)} className="complete-trip">Complete Trip</span>
                      : (
                        <div>
                          <span onClick={() => handleSetShowModal(booking)} className="reschedule">Reschedule</span>
                          <span> | </span>
                          <span onClick={() => handleCancelModal(booking)} className="cancel">Cancel</span>
                        </div>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DashboardTable>
      </div>
      {
        userData.role === 'DRIVER'
          ? (
            <Modal showModal={showModal} handleShowModal={handleShowModal}>
              <CompleteTrip setShowModal={setShowModal} />
            </Modal>
          )
          : (
            <div>
              <Modal showModal={showModal} handleShowModal={handleSetShowModal}>
                <Reschedule setShowModal={setShowModal} />
              </Modal>
              <Modal showModal={cancelModal} handleShowModal={handleCancelModal}>
                <CancelTrip
                  origin={selectedTrip.origin_latitude}
                  destination={selectedTrip.destination_latitude}
                  date={selectedTrip.date}
                  setShowModal={setCancelModal}
                />
              </Modal>
              <Modal
                showModal={errorModal.show}
                handleShowModal={() => setErrorModal({ ...errorModal, show: !errorModal.show })}
              >
                <ErrorModal errorMessage={errorModal.msg} />
              </Modal>
              <LoadingModal text="Bookings Loading" show={loading} />
            </div>
          )
      }

    </>
  );
};

export default BookingsList;
