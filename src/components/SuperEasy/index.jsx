import './SuperEasy.scss'
import mobile from '../../assets/icons/mobile-app.png'
import calendar from '../../assets/icons/confirm-schedule.png'
import taxi from '../../assets/icons/taxi.png'
import destination from '../../assets/icons/destination.png'


const SuperEasy = () => {

return (
    <div>
      <section className='container__general' >
            <h2>SUPER EASY</h2>
            <p className='container__text'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.Adipisci 
            Alias Aperiam At, Aut Commodi Corporis Dolorum Ducimus Labore
            Magnam Mollitia Natus Porro Possimus Quae Sit Tenetur Veniam 
            Veritatis Voluptate Voluptatem!
            </p>
        <section className='container__icons'> 

           <div className='card'>
              <img src={mobile}/>
              <p>Book Cab Threw Website Or App</p>
            </div>

            <div className='card'>
              <img src={calendar}/>
              <p>Receive Confirmation</p>
            </div>

            <div className='card'>
              <img src={taxi}/>
              <p>Meet Cab Driver On Pickup Time</p>
            </div>

            <div className='card'>
              <img src={destination}/>
              <p>Arrive At Your Destination</p>
            </div>

        </section>
      </section>        
    </div>

    )
}

export default SuperEasy;