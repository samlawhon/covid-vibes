
import React, { useEffect, useState } from 'react'
import RestaurantTile from './RestaurantTile'

const RestaurantIndex = (props) => {
  const [restaurantData, setRestaurantData] = useState([])

   useEffect(() => {
       fetch('/api/v1/restaurants?location=boston')
             .then(response => response.json())
             .then(responseBody => {
                 setRestaurantData(responseBody)
             })
      }, [])

  const restaurantTileArray  = restaurantData.map((restaurant) => {
      
        return(
            <div>
                <RestaurantTile
                    name={restaurant.name}
                    id={restaurant.id}
                    key={restaurant.id}
                />
            </div>
        )
    }) 

    return(
        <div>
            {restaurantTileArray}
        </div>
    )
}  
  
export default RestaurantIndex      