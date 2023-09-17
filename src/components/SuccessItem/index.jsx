import './SuccessItem.scss';
import ImgCar from '../../assets/images/success_img.png';

// eslint-disable-next-line arrow-body-style
const SuccessItem = ({
  title, origin, destination, date, total, firstName, lastName, email, children,
}) => (
  <section className="success-section">
    <div>
      <div className="row_success">
        <div className="col_success">
          <img src={ImgCar} alt="successCar" />
          <h2>{title}</h2>
          <table>
            <tbody>
              <tr>
                <td>Booking holder</td>
                <td>{`${firstName} ${lastName}`}</td>
              </tr>
              <tr>
                <td>Origin</td>
                <td>{origin}</td>
              </tr>
              <tr>
                <td>Destination</td>
                <td>{destination}</td>
              </tr>
              <tr>
                <td>Pick up date</td>
                <td>{date}</td>
              </tr>
              <tr>
                <td>Total charges</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
          <p>{`Booking confirmation was sent to ${email}`}</p>
          {children}
        </div>
      </div>
    </div>
  </section>
);
export default SuccessItem;
