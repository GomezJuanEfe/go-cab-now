import './CabSearchFilter.scss';
import { BiSearch } from 'react-icons/bi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useState } from 'react';
import CabSearchFilterItem from '../CabSearchFilterItem';
import PriceSlider from '../PriceSlider';

const CabSearchFilter = ({ isFilterOpen, handleFilterMenu }) => {
  // Logic to show filter modal on mobile
  const leftProperty = isFilterOpen ? '-1px' : '-356px';
  const showClass = isFilterOpen ? 'show' : '';

  // Latest filters logic
  const [isShown, setIsShown] = useState(true);

  const handleLastFilters = () => setIsShown(!isShown);
  const hideClass = isShown ? '' : 'hide';

  return (
    <div className="cab-search-filter">

      <div
        className="cab-search-sidebar"
        style={{ height: '100vh', left: leftProperty }}
      >

        <div
          className="cab-search__back-btn"
          onClick={handleFilterMenu}
          onKeyDown={handleFilterMenu}
          role="button"
          tabIndex={0}
        >
          Back
        </div>

        <div className="cab-search__filter-bar">
          <div>
            <BiSearch />
            {' | '}
            <input type="text" name="filter-bar" id="filter-bar" placeholder="Search here..." />
          </div>
        </div>

        <div className="latest-filters">
          <div
            className="latest-filters__title"
            onClick={handleLastFilters}
            onKeyDown={handleLastFilters}
            role="button"
            tabIndex={0}
          >
            <h5>latest filters</h5>
            <span className="latest-filtes__icon" />
          </div>

          <div className={hideClass}>
            <CabSearchFilterItem itemName="Car Type">

              <div className="check-box-container">
                <input type="checkbox" id="ct-mini" />
                <label htmlFor="ct-mini">Mini</label>
              </div>
              <div className="check-box-container">
                <input type="checkbox" id="ct-medium" />
                <label htmlFor="ct-medium">Medium</label>
              </div>

            </CabSearchFilterItem>

            <CabSearchFilterItem itemName="Star Category">

              <div className="check-box-container">
                <input type="checkbox" id="sc-5" />
                <label htmlFor="sc-5">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span> (4025)</span>
                </label>
              </div>
              <div className="check-box-container">
                <input type="checkbox" id="sc-4" />
                <label htmlFor="sc-4">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <span> (2012)</span>
                </label>
              </div>
              <div className="check-box-container">
                <input type="checkbox" id="sc-3" />
                <label htmlFor="sc-3">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <span> (25)</span>
                </label>
              </div>
              <div className="check-box-container">
                <input type="checkbox" id="sc-2" />
                <label htmlFor="sc-2">
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <span> (1)</span>
                </label>
              </div>

            </CabSearchFilterItem>

            <CabSearchFilterItem itemName="Price">
              <PriceSlider />
            </CabSearchFilterItem>

            <CabSearchFilterItem itemName="Capacity">

              <div className="check-box-container">
                <input type="checkbox" id="ca-1-5" />
                <label htmlFor="ca-1-5">1-5 passangers</label>
              </div>
              <div className="check-box-container">
                <input type="checkbox" id="ca-6-10" />
                <label htmlFor="ca-6-10">6-10 passangers</label>
              </div>

            </CabSearchFilterItem>

            <CabSearchFilterItem itemName="Car Option">

              <div className="check-box-container">
                <input type="checkbox" id="co-automatic" />
                <label htmlFor="co-automatic">automatic</label>
              </div>
              <div className="check-box-container">
                <input type="checkbox" id="co-manual" />
                <label htmlFor="co-manual">manual</label>
              </div>

            </CabSearchFilterItem>
          </div>

        </div>

        <div className="buttom-info">
          <h5>
            <span>i</span>
            {' '}
            need help
          </h5>
          <h4>856 - 215 - 211</h4>
          <h6>Monday to Friday 9.00am - 7.30pm</h6>
        </div>

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
