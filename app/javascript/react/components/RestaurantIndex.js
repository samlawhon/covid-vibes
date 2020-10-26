import React, { useEffect, useState } from 'react'
import RestaurantTile from './RestaurantTile'

const RestaurantIndex = (props) => {
  const [restaurantData, setRestaurantData] = useState([])

   useEffect(() => {
    fetch('/api/v1/restaurants?location=boston')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw (error);
      }
    })
    .then(response => response.json())
    .then(responseBody => {
      setRestaurantData(responseBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
   }, [])

  const restaurantTileArray  = restaurantData.map((restaurant) => {
      
    return(
      <RestaurantTile
        name={restaurant.name}
        id={restaurant.id}
        key={restaurant.id}
      />
    )
  }) 

  return(
      <ul>
        {restaurantTileArray}
      </ul>
  )
}  
  
export default RestaurantIndex      
