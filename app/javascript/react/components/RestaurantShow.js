import React, { useState, useEffect } from 'react'

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

  return (
      <h1>
        {restaurant.name}
      </h1>
  )
}

export default RestaurantShow