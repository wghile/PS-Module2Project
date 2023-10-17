import { Link } from "react-router-dom"

export default function Result({name, venue, img, date, location, time}) {

  return (
        <div className="Result">
            <h1>{name}</h1>
            <h2>📍 {venue}, {location}</h2>
            <img src = {img} alt = {name}/>
            <h3>🗓️ {date} · {time}</h3>
            <button>
                <Link to='/checkout' style={{color: "black", textDecoration: 'none'}} state={{name: `${name}`, venue: `${venue}`, img: `${img}`, date: `${date}`, place: `${location}`, time: `${time}`}}>
                    ☞ Buy Tickets
                </Link>
            </button>
        </div>
    )  
}
