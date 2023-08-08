import './Success.scss';
import ImgCar from '../../assets/images/success_img.png';

// eslint-disable-next-line arrow-body-style
const SuccessBooking = () => {
  return (
    <section className="success-section">
      <div>
        <div className="row_success">
          <div className="col_success">
            <img src={ImgCar} alt="successCar" />
            <h2>Payment Successful ! get ready to ride</h2>
            <p>
              thank you for you payment. we have received your payment successfully.
              your transaction ID is 'SHJG12155215', you will get an email invoice soon!
            </p>
            <button type="submit" className="btn_success">Download Invoice</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SuccessBooking;
