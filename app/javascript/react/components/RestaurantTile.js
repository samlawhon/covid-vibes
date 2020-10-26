import React from 'react'
import { Link } from "react-router-dom"

const RestaurantTile = (props) => {

  return (
      <li>
        <Link to={`restaurant/${props.id}`}>
          {props.name}
        </Link > 
      </li>
  )
}

export default RestaurantTile