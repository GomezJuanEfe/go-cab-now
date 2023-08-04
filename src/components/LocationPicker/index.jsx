import './LocationPicker.scss';

const LocationPicker = ({
  inputName, id, placeholder, modal,
}) => {
  const modalStyle = modal ? 'modal' : '';
  return (
    <div className={`label-input ${modalStyle}`}>
      <label htmlFor={id}>
        <div>{inputName}</div>
        <input type="text" id={id} placeholder={placeholder} />
      </label>
    </div>
  );
};

export default LocationPicker;
