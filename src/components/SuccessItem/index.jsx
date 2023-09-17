import './SuccessItem.scss';
import ImgCar from '../../assets/images/success_img.png';

// eslint-disable-next-line arrow-body-style
const SuccessItem = ({
  title, body, children,
}) => (
  <section className="success-section">
    <div>
      <div className="row_success">
        <div className="col_success">
          <img src={ImgCar} alt="successCar" />
          <h2>{title}</h2>
          <p>
            {body}
          </p>
          {children}
        </div>
      </div>
    </div>
  </section>
);
export default SuccessItem;
