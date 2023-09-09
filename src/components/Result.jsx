export default function Result({name, venue, img, link, date, location}) {
  return (
        <div className="Result">
            <h1>Name:{name}</h1>
            <h1>Location:{venue}, {location}</h1>
            <img src = {img} alt = {name}/>
            <h3>{date}</h3>
            <a href={link}>Link to Buy Tickets</a>
        </div>
    )  
}
