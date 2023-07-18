import './OurAwesomeFleet.scss'
import FleetCarousel from '../FleetCarousel'



const OurAwesomeFleet = () => {
  return (
    <section className='fleet'>
      <div className='fleet__text'>
        <span>WIDEST VARITY</span>
        <h2>Our Awesome Fleet</h2>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!</p>
      </div>
      <div className='slider'>
        <FleetCarousel />
      </div>
      
    </section>
  )
}

export default OurAwesomeFleet