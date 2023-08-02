import { useState } from 'react';
import BannerPages from '../components/BannerPages';
import CabSearchBody from '../components/CabSearchBody';
import CabSearchCarList from '../components/CabSearchCarList';
import CabSearchFilter from '../components/CabSearchFilter';
import CabSearchSection from '../components/CabSearchSection';

const CabList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterMenu = () => {
    if (window.innerWidth >= 1200) {
      return null;
    }
    return setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <BannerPages pageName="cab search" />
      <CabSearchBody>
        <CabSearchSection
          handleFilterMenu={handleFilterMenu}
        />
        <CabSearchFilter
          isFilterOpen={isFilterOpen}
          handleFilterMenu={handleFilterMenu}
        />
        <CabSearchCarList />
      </CabSearchBody>
    </>
  );
};

export default CabList;
