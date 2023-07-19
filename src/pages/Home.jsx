import OurAwesomeFleet from "../components/OurAwesomeFleet"
import OurHappyCustomer from "../components/OurHappyCustomer"
import SuperEasy from "../components/SuperEasy"
import WhyChooseRica from "../components/WhyChooseRica"
import BannerHome from "../components/BannerHome"

const Home = () => {

  return (
    <>
      <BannerHome/>
      <SuperEasy />
      <WhyChooseRica />
      <OurAwesomeFleet />
      <OurHappyCustomer />
    </>
  )
}

export default Home