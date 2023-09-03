import './CabSearchButton.scss';

const CabSearchButton = ({ modal, handleSearchButton }) => {
  const modalStyle = modal ? 'modal' : '';

  return (
    <div className={`search-button ${modalStyle}`}>
      <button className="search-button" type="button" onClick={handleSearchButton}>SEARCH</button>
    </div>
  );
};

export default CabSearchButton;
