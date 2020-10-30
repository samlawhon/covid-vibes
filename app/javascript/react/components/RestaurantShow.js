import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import ReviewTile from './ReviewTile';

const RestaurantShow = props => {
  const [restaurant, setRestaurant] = useState({});
  const [getReviewData, setReviewData] = useState([]);
  
  const id = props.match.params.id;

  const handleSubmit = (event, getNewReview) => { 
    
    event.preventDefault();

    const formPayload = {
      review: getNewReview
    }

    fetch(`/api/v1/restaurants/${restaurant.id}/reviews`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })
  .then(response => {
    if (response.ok) {
      return response;
  } else {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
  })
  .then(response => response.json())
  .then(body => {setReviewData([...getReviewData, body.review]);})
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  useEffect(() => {
    fetch(`/api/v1/restaurants/${id}`)
    .then(response => {
      if (response.ok) {
        return response
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(responseBody => {
      setRestaurant(responseBody);  
      setReviewData(responseBody.reviews);
    })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const reviewTileArray = () => getReviewData.map((review) => (
    <ReviewTile
      key={review.id}
      rating={review.rating}
      partySize={review.party_size}
      masksEmployees={review.masks_employees}
      masksCustomers={review.masks_customers}
      socialDistancing={review.social_distancing}
    />)
  ); 

  return (
    <div className="grid-x grid-padding-y grid-margin-x">
      <div className="cell small-12 text-center"> 
        <h2>{restaurant.name}</h2>
        <p>Cuisine Type: {restaurant.cuisine}</p>
      </div>
      <div className="cell small-12">
        <ReviewForm 
          id={id} 
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="cell small-12">
        {Object.keys(restaurant).length !== 0 ? reviewTileArray() : null}
      </div>
    </div>
  );
}

export default RestaurantShow;