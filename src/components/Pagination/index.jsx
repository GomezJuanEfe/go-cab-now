import './Pagination.scss';

const generatePagination = (pages) => (
  Array.from({ length: pages }, (_, index) => index + 1)
);

const scrollTop = () => {
  window.scroll({ top: '0', behavior: 'smooth' });
};

const Pagination = ({ num, pageIndex, setPageIndex }) => {
  const numberOfPages = num;

  const handlePreviusArrow = () => {
    setPageIndex(pageIndex - 1);
    scrollTop();
  };

  const handleNextArrow = () => {
    setPageIndex(pageIndex + 1);
    scrollTop();
  };

  const handleCurrentPage = (i) => {
    setPageIndex(i);
    scrollTop();
  };

  return (
    <ul className="pagination">
      {/* Previus arrow */}
      {
        pageIndex > 1
          ? (
            <li
              className={`pagination__item ${pageIndex === 1 ? 'disabled' : ''}`}
              onClick={handlePreviusArrow}
              onKeyDown={handlePreviusArrow}
              role="menuitem"
            >
              «
            </li>
          ) : ''
      }
      {
        generatePagination(numberOfPages).map((index) => (
          <li
            key={index}
            className={`pagination__item ${pageIndex === index ? 'active' : ''}`}
            onClick={() => handleCurrentPage(index)}
            onKeyDown={() => handleCurrentPage(index)}
            role="menuitem"
          >
            {index}
          </li>
        ))
      }
      {/* Next Arrow */}
      {
        numberOfPages > 1
          ? (
            <li
              className={`pagination__item ${pageIndex === numberOfPages ? 'disabled' : ''}`}
              onClick={handleNextArrow}
              onKeyDown={handleNextArrow}
              role="menuitem"
            >
              »
            </li>
          )
          : ''
      }
    </ul>
  );
};

export default Pagination;
