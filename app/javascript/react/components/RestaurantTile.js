import React from 'react'
import { Link } from "react-router-dom"

const RestaurantTile = (props) => {

  return (
      <h1>
        <Link to={`restaurant/${props.id}`}>
          {props.name}
        </Link > 
      </h1>
  )
}

export default RestaurantTile