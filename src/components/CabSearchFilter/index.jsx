import './CabSearchFilter.scss';

const CabSearchFilter = ({ isFilterOpen, handleFilterMenu }) => {
  const leftProperty = isFilterOpen ? '-1px' : '-356px';
  const showClass = isFilterOpen ? 'show' : '';

  return (
    <div className="cab-search-filter">

      <div
        className="cab-search-sidebar"
        style={{ height: '100vh', left: leftProperty }}
      >
        CabSearchFilter - todos los filtros aplicables
      </div>
      <div
        className={`cab-search-overlay ${showClass}`}
        onClick={handleFilterMenu}
        onKeyDown={handleFilterMenu}
        role="button"
        tabIndex={0}
        aria-label="overlay"
      />

    </div>
  );
};

export default CabSearchFilter;
