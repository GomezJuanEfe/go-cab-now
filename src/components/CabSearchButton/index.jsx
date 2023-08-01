import './CabSearchButton.scss';

const CabSearchButton = ({ modal }) => {
  const modalStyle = modal ? 'modal' : '';

  return (
    <div className={`search-button ${modalStyle}`}>
      <button className="search-button" type="button">SEARCH</button>
    </div>
  );
};

export default CabSearchButton;
