import React, { useEffect, useState } from 'react';
import RestaurantTile from './RestaurantTile';
import RestaurantMap from './RestaurantsMap';

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
    <>
    <div className="grid-x text-center grid-padding-y">
      <div className="cell small-12">
        <img src="/assets/CovidVibesLogo2.png"/>
      </div>
    </div>
    <div className="square-box grid-y medium-grid-frame grid-padding-y .grid-margin-y">
      <form>
        <div className="grid-x align-right align-bottom grid-padding-x">
            <div className="medium-7 cell">
                <label>Zipcode
                  <input type="text" placeholder="zipcode" />
                </label>
            </div>
            <div className="medium-3 cell">
              <input type="submit" className="button" value="Submit" />
            </div>
        </div>
      </form>
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x grid-padding-x" >
          <div className="cell medium-6 medium-cell-block-y">
              {restaurantTileArray}
          </div>
          <div className="cell medium-6 medium-cell-block-y">
            {restaurantData.length !== 0 ? <RestaurantMap restaurantsData={restaurantData} /> : null }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}  
  
export default RestaurantIndex      
