import { useLocation } from 'react-router-dom'

export default function Purchase() {

  const location = useLocation()
  const {name} = location.state
  const {date} = location.state
  const {img} = location.state
  const {venue} = location.state
  const {place} = location.state


  return (
    <div className='Purchase'>
      <main>
        <h1>
          Event: {name}
        </h1>
        <p>
          {date}
        </p>
        <p>
          {venue}
        </p> 
        <p>
          {place}
        </p>
        <img src={img} alt='Concert Img' width='200px'/>
      </main>
      <aside>
        CheckOut
      </aside>
    </div>
  )
}
