import { useState, useEffect } from 'react'
import Form from './components/Form'
import Results from './components/Results'
import Nav from './components/Nav'
import Display from './components/Display'
import Poster from './components/Poster'
import './App.css'

function App() {

  const apiKey = '8F2mODhfpkcIAxgg5VMGB3Au0Nlf0De9'

  const [concert, setConcert] = useState({})

  const findEvent = async (keyword, city) => {
    try{const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&city=${city}&source=Ticketmaster&apikey=${apiKey}`)
    const data = await response.json()
    setConcert(data)
    } catch(e){
      console.error(e)
    }
  }

  // useEffect(() => {
  //   findEvent('Beyonce','Houston')
  // }, [])

  return (
    <div className='App'>
      <Nav />
      <Form found = {findEvent}/>
      <Results concerts = {concert} />
      {/* <Display findEvent = {findEvent}/> */}
    </div>
  )
}

export default App
