/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable linebreak-style */
import BannerPages from '../components/BannerPages';
import SuccessItem from '../components/SuccessItem';

const Success = () => (
  <div>
    <BannerPages pageName="Booking Success" />
    <SuccessItem
      title="Payment Successful ! get ready to ride"
      body="Thank You For You Payment. We Have Received Your Payment Successfully. Your Transaction ID Is 'SHJG12155215', You Will Get An Email Invoice Soon!"
    >
      <button type="submit" className="secondary-button">Download Invoice</button>
    </SuccessItem>
  </div>
);

export default Success;
