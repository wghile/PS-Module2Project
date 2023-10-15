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

    const submit = (e) => {
        e.preventDefault()
        check(artRef.current.value, cityRef.current.value)
    }
    
    const pics = [ayra, beyonce, brent, shania, daniel, wizkid, john, jazmine, kali, taylor, karol, sza, tiwa, victoria, ed]

    const [background, setBackground] = useState(pics[0])

    let currentIndex = pics.findIndex((el) => el === background)

    //Flipping through images
    const decrementIndex = (evt) => {
        evt.preventDefault()
        setBackground(pics[currentIndex - 1])
    }
    const incrementIndex = (evt) => {
        evt.preventDefault()
        setBackground(pics[currentIndex + 1])
    }

    //Button Toggle
    let backButton = document.querySelector('#back-button')
    let nextButton = document.querySelector('#next-button')
    if(currentIndex == 0){
        backButton?.setAttribute('disabled', '')
    }else{
        backButton?.removeAttribute('disabled', '')
    }
    if(currentIndex == 14){
        nextButton?.setAttribute('disabled', '')
    }else{
        nextButton?.removeAttribute('disabled', '')
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
            <button id='back-button' onClick={decrementIndex} style={{color: 'slateblue'}}>{'<'}</button>
            <img src={background} />
            <button id='next-button' onClick={incrementIndex} style={{color: 'slateblue'}}>{'>'}</button>
            {/* </div> */}
        </div>
    </div>
  )
}
