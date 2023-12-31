import './FooterSection.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FooterSection = ({
  title,
  children,
  active,
  setActive,
  id,
}) => {
  const handleClick = (clickedId) => {
    if (window.innerWidth >= 768) {
      return undefined;
    }
    return setActive(clickedId === active ? undefined : clickedId);
  };

  return (
    <div className="footer-section">

      <div
        className="footer-section__title"
        role="menuitem"
        tabIndex={0}
        onClick={() => handleClick(id)}
        onKeyDown={() => handleClick(id)}
      >
        <h5>{title}</h5>
        <span>
          {active === id ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      <div className={`footer-section__body ${active === id ? 'show' : ''}`}>
        <div className="footer-section__body-details">
          {children}
        </div>
      </div>

    </div>
  );
};

export default FooterSection;
