import { useState, useRef } from "react"

export default function Form({found}) {

    // const [data, setData] = useState({artist: '', city: '', startDate: '', endDate: ''})

    const artistRef = useRef()
    const cityRef = useRef()
    
    // const update = (e) => {
    //     setData({...data,[e.target.name]: e.target.value})
    // }

    const search = (e) => {
        e.preventDefault()
        found(artistRef.current.value, cityRef.current.value)
        // evt(data.artist, data.city, data.startDate, data.endDate)
        // evt(data)
    }

  return (
    <div className="Form">
        <input type="text" ref={artistRef} placeholder="Search by Artist"></input>
        <input type="text" ref={cityRef} placeholder="Filter by City"></input>
        <button onClick={search}>Search</button>
    </div>
  )
}
