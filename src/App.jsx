import { useState, useEffect } from 'react'
import Form from './components/Form'
import Results from './components/Results'
import Nav from './components/Nav'
import Display from './components/Display'
import './App.css'

function App() {

  const apiKey = '8F2mODhfpkcIAxgg5VMGB3Au0Nlf0De9'

  const [concert, setConcert] = useState(null)

  const findEvent = async (keyword) => {
    try{const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}}&source=Ticketmaster&apikey=${apiKey}`
    )

    const data = await response.json() 
    setConcert(data)
    } catch(e){
      console.error(e)
    }
  }

  // const

  useEffect(() => {
    findEvent('Beyonce')
  }, [])

  return (
    <div className='App'>
      <Nav />
      <Form event = {findEvent}/>
      <Display />
    </div>
  )
}

export default App
