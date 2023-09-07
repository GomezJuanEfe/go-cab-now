import './LocationPicker.scss';

const LocationPicker = ({
  title, inpName, placeholder, modal, handleInput, value,
}) => {
  const modalStyle = modal ? 'modal' : '';
  const cities = [
    'Bogotá',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Cartagena',
    'Bucaramanga',
    'Santa Marta',
    'Pereira',
    'Manizales',
    'Cúcuta',
  ];
  return (
    <div className={`label-input ${modalStyle}`}>
      <label htmlFor={inpName}>
        <div>{title}</div>
        <select
          id={inpName}
          placeholder={placeholder}
          name={inpName}
          onChange={(e) => handleInput(e)}
          value={value}
          required
        >
          <option value="" disabled>Choose a city</option>
          {cities.map((city) => (<option key={city} value={city}>{city}</option>))}
        </select>
      </label>
    </div>
  );
};

export default LocationPicker;
