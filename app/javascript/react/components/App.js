import React from 'react'
import RestaurantIndex from "./RestaurantIndex.js"
// import restaurantsdata from "/constants/restaurantsdata"


const App = () => {
  const restaurantData = [
    {
      "id": 500678894,
      "latitude": 42.379816,
      "longitude": 42.379816,
      "name": "El Potro"
    },
    {
      "id": 500792317,
      "latitude": 42.3734909,
      "longitude": 42.3734909,
      "name": "All-Star Sandwich Bar"
    },
    {
      "id": 500792356,
      "latitude": 42.3734808,
      "longitude": 42.3734808,
      "name": "S&S Restaurant"
    }]
  const data = restaurantData
  // const restaurantName = "Big Harry's"
  // const restaurantDesc = "The best barbecue"
  // const wearMasks = false
  // const socialDistance = false

  return (<div>
  <h1>Watson, Come here, I need you!</h1>
    <RestaurantIndex
      // name={restaurantName}
      // description={restaurantDesc}
      // masks={wearMasks}
      // socialDistance={socialDistance}
      data={data.}
    />
  </div>)
}

export default App
