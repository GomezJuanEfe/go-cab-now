import './BrandsFleet.scss';
import tecno from '../../assets/icons/tecno.png';
import eco from '../../assets/icons/eco.png';
import air from '../../assets/icons/airport.png';
import hydra from '../../assets/icons/hydra.png';
import ux from '../../assets/icons/ux.png';

const BrandsFleet = () => (
  <section>
    <div className="brand">
      <img src={tecno} alt="tecno" />
      <img src={eco} alt="eco" />
      <img src={air} alt="airport" />
      <img src={hydra} alt="hydra" />
      <img src={ux} alt="ux" />
    </div>
  </section>
);
export default BrandsFleet;
