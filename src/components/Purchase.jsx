import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Purchase() {

  const location = useLocation()
  const {name} = location.state
  const {date} = location.state
  const {img} = location.state
  const {venue} = location.state
  const {place} = location.state
  const {time} = location.state

  const [seniorTicket, setSeniorTicket] = useState(0)
  const [adultTicket, setAdultTicket] = useState(0)
  const [kidsTicket, setKidsTicket] = useState(0)

  const checkSenior = () => {
    if(seniorTicket == 0){
      return true
    }else{
      return false
    }
  }
  const checkAdult = () => {
    if(adultTicket == 0){
      return true
    }else{
      return false
    }
  }
  const checkKids = () => {
    if(kidsTicket == 0){
      return true
    }else{
      return false
    }
  }
  
  const decrementSenior = () => {
    setSeniorTicket(seniorTicket - 1)
  }
  const incrementSenior = () => {
    setSeniorTicket(seniorTicket + 1)
  }

  const decrement = () => {
    setAdultTicket(adultTicket - 1)
  }
  const increment = () => {
    setAdultTicket(adultTicket + 1)
  }

  const decrementKids = () => {
    setKidsTicket(kidsTicket - 1)
  }
  const incrementKids = () => {
    setKidsTicket(kidsTicket + 1)
  }

  return (
    <div className='Purchase'>
      <main>
        <img src={img} alt='Concert Img'/>
        <div id='text'>
          <p id='title'>
            Event Details
          </p>
          <h1>
            {name}
          </h1>
          <p id='date'>
            🗓️ {date} · {time}
          </p>
          <p id='location'>
            {venue}, {place}
          </p>
        </div>
      </main>
      <aside>
        <h1>
          Reserve Tickets Now!
        </h1>
        <div>
          <span className='text'>Seniors (62+) :</span>
          <span className='numbers'>
            <button disabled={checkSenior()} onClick={() => decrementSenior()}>-</button> 
              <span>{seniorTicket}</span>
            <button onClick={() => incrementSenior()}>+</button>
          </span>
        </div>
        <div>
          <span className='text'>Adults (18+) : </span>
          <span className='numbers'>
            <button disabled={checkAdult()} onClick={() => decrement()}>-</button> 
              <span>{adultTicket} </span>
            <button onClick={() => increment()}>+</button>
          </span>
        </div>
        <div>
          <span className='text'>Kids (under 17) : </span>
          <span className='numbers'>
            <button disabled={checkKids()} onClick={() => decrementKids()}>-</button> 
              <span>{kidsTicket}</span>
            <button onClick={() => incrementKids()}>+</button>
          </span>
        </div>
      </aside>
    </div>
  )
}
