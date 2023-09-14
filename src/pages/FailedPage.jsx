/* eslint-disable linebreak-style */
import Failed from '../components/Failed';
import BannerPages from '../components/BannerPages';

const FailedPage = () => (
  <>
    <BannerPages pageName="PAYMENT FAILED" />
    <Failed
      title="oops ! we are unable to process your payment"
      body="looks like we encountered an error. please try again.
        if you continue to have issue, try another payment method."
    >
      <button type="submit" className="secondary-button">Try Again</button>
    </Failed>
  </>
);

export default FailedPage;
