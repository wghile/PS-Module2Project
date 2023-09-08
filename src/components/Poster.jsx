export default function Poster(poster) {
  return (
    <div className="Poster">
       <img src= {poster._embedded.events[0].images[0].url}/>
    </div>
  )
}
