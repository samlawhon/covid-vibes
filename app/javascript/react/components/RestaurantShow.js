import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import ReviewTile from './ReviewTile';

const RestaurantShow = props => {
  const [restaurant, setRestaurant] = useState({});
  const [getReviewData, setReviewData] = useState([]);
  const [getNewReview, setNewReview] = useState({
    masks_customers: false, 
    masks_employees: false, 
    social_distancing: false, 
    party_size: false
  });

  const id = props.match.params.id;

  const handleSubmit = event => { 
    
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
  .then(body => setReviewData([...getReviewData, body.review]))
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  const handleInputChange = event => {

    const target = event.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : Number(target.value);

    setNewReview({
      ...getNewReview,
      [event.currentTarget.name]: value
    });
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
    />
  )); 

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <p>Cuisine Type: {restaurant.cuisine}</p>
      <ReviewForm 
      id={id} 
      handleInputChange={handleInputChange} 
      handleSubmit={handleSubmit}
      getNewReview={getNewReview}/>
      <ul>
        {Object.keys(restaurant).length !== 0 ? reviewTileArray() : null}
      </ul>
    </div>
  );
}

export default RestaurantShow;