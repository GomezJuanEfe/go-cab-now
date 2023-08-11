import './Failed.scss';
import ImgFailed from '../../assets/images/failed.jpg';

const Failed = () => (

  <section className="container_failed">

    <div className="row__failed">

      <img src={ImgFailed} className="img-failed" alt="failed" />
      <h2>oops ! we are unable to process your payment</h2>
      <p>
        looks like we encountered an error. please try again.
        if you continue to have issue, try another payment method.
      </p>
      <button type="submit" className="btn_failed">Try Again</button>

    </div>
  </section>
);

export default Failed;
