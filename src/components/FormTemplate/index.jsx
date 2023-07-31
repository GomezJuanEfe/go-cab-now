/* eslint-disable jsx-a11y/label-has-associated-control */
import './FormTemplate.scss';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FormTemplate = ({
  title,
  children,
  active,
  setActive,
  id,

}) => {
  const handleClick = (clickedId) => {
    if (window.innerWidth >= 576) {
      return undefined;
    }
    return setActive(clickedId === active ? undefined : clickedId);
  };

  return (
    <div className="payment__section">

      <div
        className="payment__section_title"
        role="menuitem"
        tabIndex={0}
        onClick={() => handleClick(id)}
        onKeyDown={() => handleClick(id)}
      >
        <div className="input_radio_payment">
          <input type="radio" />
          <label htmlFor="radio_input" />
          <h3>{title}</h3>

          {/* <span>
            {active === id ? <FaChevronUp /> : <FaChevronDown />}
          </span> */}
        </div>
      </div>

      <div className={`payment__section__body ${active === id ? 'show' : ''}`}>
        <div className="payment__section__form">
          {children}
        </div>
      </div>

    </div>
  );
};
export default FormTemplate;
