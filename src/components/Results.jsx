export default function Results ({concerts}) {

  console.log(concerts)
  let retrievedData = concerts["_embedded"]
  let array = []
  array.push(retrievedData)
  // console.log(array)
  let concertsArray = []
  array[0]?.["events"].forEach((el) => concertsArray.push(el))
  console.log(concertsArray)

  const loaded = () => {
    concertsArray.forEach(concert => {
      return (
        <div className="Results">
            <h1>{concert.name}</h1>
            <h2>{concert.genre}</h2>
            {/* <img src = {concert.images} alt = {concert.name}/>
            <h3>{concert.localStartDate}</h3>
            <a href={concert.url}>Link to Buy Tickets</a> */}
        </div>
      )  
    })
  }

  const loading = () => {
      return <h1>No Concert Matches Results</h1>
  }

  return concertsArray.length > 0 ? loaded() : loading()
}
