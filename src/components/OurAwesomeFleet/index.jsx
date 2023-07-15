import './OurAwesomeFleet.scss'

const OurAwesomeFleet = () => {
  return (
    <section className='fleet'>
      <div className='fleet__text'>
        <span>WIDEST VARITY</span>
        <h2>Our Awesome Fleet</h2>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore Magnam Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam Veritatis Voluptate Voluptatem!</p>
      </div>
      <div className='fleet__car-type'>
        <img src="../../assets/images/1.png" alt="classic cab img" />
        <div className='fleet__content'>
          <h3>Classic</h3>
          <h4>Start $5 / per Km</h4>
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Adipisci Alias Aperiam At, Aut Commodi Corporis</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OurAwesomeFleet