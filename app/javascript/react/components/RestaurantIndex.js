import React, { useEffect, useState, Fragment } from "react";
import RestaurantTile from "./RestaurantTile";
import RestaurantMap from "./RestaurantsMap";
import SearchForm from "./SearchForm";
import covidLogo from "../../../assets/images/CovidVibesLogo2.png"

const RestaurantIndex = () => {

  const [restaurantData, setRestaurantData] = useState([]);
  const [coords, setCoords] = useState([42.3601, -71.0589]);  // default to Boston's lat, lon

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
      setCoords(responseBody.coords);
      setRestaurantData(responseBody.restaurants);
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
        setCoords(responseBody.coords);
        setRestaurantData(responseBody.restaurants);
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

  let restaurantMap;
  if (restaurantData.length !== 0) {
    restaurantMap = (
      <RestaurantMap 
      restaurantsData={restaurantData} 
      coords={coords}/>
    );
  }

  return(
    <Fragment>
      <div className="grid-x text-center grid-padding-y">
        <div className="cell small-12">
          <img src={covidLogo}/>
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
