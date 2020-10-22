
import React from 'react'
import RestaurantShow from "./RestaurantShow"

const RestaurantIndex = (props) => {
    

   // useEffect(() => {
      //  fetch('/restaurants.json')
       //       .then(response => response.json())
       //       .then(responseBody => {
                  // debugger
        //      })
      //}, [])
  const restaurantTile  = props.data.map((restaurant) =>{
      
    return(
        < RestaurantShow
            key={restaurant.id}
            id={restaurant.id}
            latitude={restaurant.latitude}
            longitude={restaurant.longitude}
            name={restaurant.name}
        />
    )
}) 

  
      return (<div>
          hello I'm here now RestaurantIndex
          {props.name}
          {props.description}
          {restaurantTile}
      </div>)
}  
  
export default RestaurantIndex      