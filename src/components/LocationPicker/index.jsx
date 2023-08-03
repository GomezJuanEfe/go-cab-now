import './LocationPicker.scss';

const LocationPicker = ({
  title, inpName, placeholder, modal, handleInput,
}) => {
  const modalStyle = modal ? 'modal' : '';
  return (
    <div className={`label-input ${modalStyle}`}>
      <label htmlFor={inpName}>
        <div>{title}</div>
        <input type="text" id={inpName} placeholder={placeholder} name={inpName} onChange={(e) => handleInput(e)} />
      </label>
    </div>
  );
};

export default LocationPicker;
