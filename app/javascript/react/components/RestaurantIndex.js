
import React from 'react'
import { Link } from "react-router-dom"
import RestaurantShow from "./RestaurantShow"



const RestaurantIndex = (props) => {
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


   useEffect(() => {
       fetch('the api from sam')
             .then(response => response.json())
             .then(responseBody => {
             })
      }, [])
  const restaurantTileArray  = restaurantData.map((restaurant) =>{
      
    return(
    <div>
        <RestaurantShow
            name={restaurant.name}
            id={restaurant.id}
            key={restaurant.id}
        />
    </div>
    )
}) 
// debugger
    return(
    <div>
        {restaurantTileArray}
    </div>
    )
}  
  
export default RestaurantIndex      