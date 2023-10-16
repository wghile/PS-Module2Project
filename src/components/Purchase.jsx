import { useLocation } from 'react-router-dom'

export default function Purchase() {

  const location = useLocation()
  const {name} = location.state
  const {date} = location.state
  const {img} = location.state
  const {venue} = location.state
  const {place} = location.state
  const {time} = location.state

  return (
    <div className='Purchase'>
      <main>
        <img src={img} alt='Concert Img'/>
        <h1>
          {name}
        </h1>
        <p>
          🗓️ {date} · {time}
        </p>
        <p>
          {venue}, {place}
        </p>
        <p>
          {place}
        </p>
      </main>
      <aside>
        Reserve Tickets Now!
      </aside>
    </div>
  )
}
