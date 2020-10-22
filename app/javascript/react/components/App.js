import React, {useEffect} from 'react'
import RestaurantIndex from "./RestaurantIndex.js"



export const App = () => {

  useEffect(()=>{
    fetch('./restaurants.json')
    .then(response => response.json())
    .then(responseBody => {
 
    })
  })

  const restaurantName = "Big Harry's"
  const restaurantDesc = "The best barbecue"
  const wearMasks = false
  const socialDistance = false

  return (<div>
  <h1>Watson, Come here, I need you!</h1>
    <RestaurantIndex
      name={restaurantName}
      description={restaurantDesc}
      masks={wearMasks}
      socialDistance={socialDistance}
    />
  </div>)
}

export default App
