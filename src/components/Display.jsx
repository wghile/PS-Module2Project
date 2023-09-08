import { useRef } from "react"
import Poster from "./Poster"

export default function Display(findEvent) {
    const posterArrays = []
    posterArrays.push(findEvent('Beyonce'), findEvent('Alicia Keys'), findEvent('Victoria Monet'), findEvent('Ariana Grande'))
    const poster = posterArrays.forEach((el) => {
        return el.images
    })

  return (
    <div className="Display">
        <Poster poster = {poster}/>
        <Poster poster = {poster}/>
        <Poster poster = {poster}/>
        <Poster poster = {poster}/>
        <Poster poster = {poster}/>
    </div>
  )
}
