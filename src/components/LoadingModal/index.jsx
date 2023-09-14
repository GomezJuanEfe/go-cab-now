import './LoadingModal.scss';

const loading = ({ text, show }) => (
  <div className={`loading-modal-container ${show && 'show'}`}>
    <h3>{text}</h3>
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
    <div className="overlay" />
  </div>
);

export default loading;
