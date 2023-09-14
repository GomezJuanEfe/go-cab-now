import './Failed.scss';
import ImgFailed from '../../assets/images/failed.jpg';

const Failed = ({ title, body, children }) => (

  <section className="container_failed">

    <div className="row__failed">

      <img src={ImgFailed} className="img-failed" alt="failed" />
      <h2>{title}</h2>
      <p>{body}</p>
      {children}
    </div>
  </section>
);

export default Failed;
