import React, { useState, useEffect } from 'react'

import ReviewForm from "./ReviewForm.js"
import ReviewTile from './ReviewTile'

const RestaurantShow = (props) => {
    const [restaurant, setRestaurant] = useState({})

    const id = props.match.params.id

    useEffect(() => {
      fetch(`/api/v1/restaurants/${id}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        setRestaurant(responseBody)
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])

    const reviewTileArray  = () => restaurant.reviews.map((review) => {
      
      return(
        <ReviewTile
          key={review.id}
          rating={review.rating}
          partySize={review.party_size}
          masksEmployees={review.masks_employees}
          masksCustomers={review.masks_customers}
          socialDistancing={review.social_distancing}
        />
      )
    }) 
  
    return(
      <div>
        <h2>
          {restaurant.name}
        </h2>
        <p>
          Cuisine Type: {restaurant.cuisine}
        </p>
        <ReviewForm id={id}/>
        <ul>
          {Object.keys(restaurant).length !== 0 ? reviewTileArray() : null}
        </ul>
      </div>
    )
}

export default RestaurantShow