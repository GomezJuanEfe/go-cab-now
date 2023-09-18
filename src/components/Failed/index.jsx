import './Failed.scss';
import { imageURL } from '../../assets/variable.img';

const Failed = ({ title, body, children }) => (

  <section className="container_failed">

    <div className="row__failed">

      <img src={imageURL.ImgFailed} className="img-failed" alt="failed" />
      <h2>{title}</h2>
      <p>{body}</p>
      {children}
    </div>
  </section>
);

export default Failed;
