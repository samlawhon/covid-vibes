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
    .then(reponseBody => {
      setRestaurant(reponseBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <div>
      <p>
        {restaurant.name}
      </p>
    </div>
  )
}

export default RestaurantShow