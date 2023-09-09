import { useRef } from "react"
import { Link } from 'react-router-dom'

export default function Form({check}) {

    // const [input, setInput] = useState({artist: '', city: ''})

    const artRef = useRef()
    const cityRef = useRef()
    
    // const update = (e) => {
    //     setInput({...,[e.target.name]: e.target.value})
    // }

    const submit = (e) => {
        e.preventDefault()
        check(artRef.current.value, cityRef.current.value)
    }

    // const reset = (e) => {
    //     e.preventDefault()
    //     check(artRef, cityRef)
    // }

  return (
    <div className="Form">
        <input type="text" ref={artRef} placeholder="Search by Artist/Genre"></input>
        <input type="text" ref={cityRef} placeholder="Filter by City"></input>
            <button onClick={submit}>
                <Link to='/searchresults' style={{color: 'black', textDecoration: 'none'}}>
                    Search
                </Link>
            </button>
        {/* <button onClick={reset}>Clear</button> */}
    </div>
  )
}
