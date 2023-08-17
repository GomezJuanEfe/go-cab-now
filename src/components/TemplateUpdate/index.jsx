import '../FormUpdate/FormUpdate.scss';

const TemplateUpdate = ({
  title,
  placeholder,
  textbutton,
  showButton,
}) => {
  const handleSubmit = (e) => {
    e.preventDafault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className="container__update">
          <label htmlFor="container__update_label">
            <b>{title}</b>
          </label>
          <br />
          <input className="container__update_input" type="email" placeholder={placeholder} />
        </div>

        {showButton && (
          <button
            onSubmit={handleSubmit}
            className="btn__profile"
            type="submit"
          >
            {textbutton}
          </button>
        )}

      </form>
    </div>

  );
};

export default TemplateUpdate;
