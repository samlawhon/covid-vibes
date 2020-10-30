import React, { useEffect, useState, Fragment } from "react";
import RestaurantTile from "./RestaurantTile";
import RestaurantMap from "./RestaurantsMap";
import SearchForm from "./SearchForm";

const RestaurantIndex = () => {

  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetch('/api/v1/restaurants?location=boston')
    .then(response => {
      if (response.ok) {
        return response
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw (error);
    }
    })
    .then(response => response.json())
    .then(responseBody => {
      setRestaurantData(responseBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, []);

  const handleSubmit = (event, searchBarQuery) => {
    event.preventDefault();
    fetch(`/api/v1/restaurants?location=${searchBarQuery.trim()}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        setRestaurantData(responseBody)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const restaurantTileArray = restaurantData.map((restaurant) => (
    <RestaurantTile
      name={restaurant.name}
      id={restaurant.id}
      key={restaurant.id}
    />
  ));

  const restaurantMap = restaurantData.length !== 0 ? <RestaurantMap restaurantsData={restaurantData} /> : null;

  return(
    <Fragment>
      <div className="grid-x text-center grid-padding-y">
        <div className="cell small-12">
          <img src="/assets/CovidVibesLogo2.png"/>
        </div>
      </div>
      <div className="square-box grid-y medium-grid-frame grid-padding-y .grid-margin-y">    
        <SearchForm handleSubmit={handleSubmit}/>
        <div className="cell medium-auto medium-cell-block-container">
          <div className="grid-x grid-padding-x" >
            <div className="cell medium-6 medium-cell-block-y">
              {restaurantTileArray}
            </div>
            <div className="cell medium-6 medium-cell-block-y">
              {restaurantMap}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}  
  
export default RestaurantIndex;  
