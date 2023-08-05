import './LocationPicker.scss';

const LocationPicker = ({
  title, inpName, placeholder, modal, handleInput, value,
}) => {
  const modalStyle = modal ? 'modal' : '';
  return (
    <div className={`label-input ${modalStyle}`}>
      <label htmlFor={inpName}>
        <div>{title}</div>
        <input type="text" id={inpName} placeholder={placeholder} name={inpName} onChange={(e) => handleInput(e)} value={value} />
      </label>
    </div>
  );
};

export default LocationPicker;
