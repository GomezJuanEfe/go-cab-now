import './CabSearchSection.scss';

const CabSearchSection = ({ handleFilterMenu }) => (
  <div className="cab-search-section">
    /CabSearch/ para desktop /Desarrollar aqui/ para mobiles.
    <button type="button" onClick={handleFilterMenu}>open</button>
  </div>
);

export default CabSearchSection;
