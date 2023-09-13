import { useRef, useState } from "react"
import { Link } from 'react-router-dom'

import ayra from '../images/ayrastarr.png'
import beyonce from '../images/beyonce.jpeg'
import brent from '../images/brent.png'
import daniel from '../images/danielcaesar.png'
import ed from '../images/edsheeran.png'
import jazmine from '../images/jazminesullivan.png'
import john from '../images/johnmayer.png'
import kali from '../images/kaliuchis.png'
import karol from '../images/karolg.png'
import shania from '../images/shaniatwain.png'
import sza from '../images/sza.png'
import taylor from '../images/taylorswift.png'
import tiwa from '../images/tiwa.png'
import victoria from '../images/victoriamonet.png'
import wizkid from '../images/wizkid.png'

export default function Form({check}) {


    const artRef = useRef()
    const cityRef = useRef()

    const incRef = useRef()

    const submit = (e) => {
        e.preventDefault()
        check(artRef.current.value, cityRef.current.value)
    }
    
    const pics = [ayra, beyonce, brent, shania, daniel, wizkid, john, jazmine, kali, taylor, karol, sza, tiwa, victoria, ed]

    const [background, setBackground] = useState(pics[0])

    const [incDisplay, setIncDisplay] = useState(true)
    const [decDisplay, setDecDisplay] = useState(false)

    const decrementIndex = () => {
        let currentIndex = pics.findIndex((el) => el === background)
        // console.log(currentIndex)
        setIncDisplay(true)
        if(currentIndex > 1){
            setBackground(pics[currentIndex-1])
            setDecDisplay(true)
        }else if(currentIndex == 1){
            setBackground(pics[currentIndex-1])
            setDecDisplay(false)
        }
    }
   
    const incrementIndex = () => {
        let currentIndex = pics.findIndex((el) => el === background)
        // console.log(currentIndex)
        if(currentIndex + 1 == pics.length - 1){
            setBackground(pics[currentIndex+1])
            setIncDisplay(false)
        }else{
            setBackground(pics[currentIndex+1])
            setDecDisplay(true)
        }
    }

  return (
    <div className="Form">
        <div className="section1">
            <h1>Discover the Biggest Performances of the Year</h1>
            <div className="inputs">
                <input type="text" ref={artRef} placeholder="Search by Artist"></input>
                <input type="text" ref={cityRef} placeholder="Filter by City"></input>
                <button onClick={submit}>
                    <Link to='/searchresults' style={{color: 'darkslateblue', textDecoration: 'none'}}>
                        Search
                    </Link>
                </button>
            </div>
        </div>
        <div className="section2">
            {decDisplay && <button onClick={decrementIndex} style={{color: 'slateblue'}}>{'<'}</button>}
            <div className="images">
                <img src={background} />
                {incDisplay && <button onClick={incrementIndex} style={{color: 'slateblue'}}>{'>'}</button>}
            </div>
        </div>
        {/* <button onClick={reset}>Clear</button> */}
    </div>
  )
}
