import './Modal.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ showModal, handleShowModal, children }) => (
  <div className={`cab-search-modal ${showModal ? 'show' : ''}`}>
    <div className="modal-content">

      <div
        className="exit-btn"
        onClick={handleShowModal}
        onKeyDown={handleShowModal}
        role="button"
        tabIndex={0}
      >
        <AiOutlineCloseCircle />
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
