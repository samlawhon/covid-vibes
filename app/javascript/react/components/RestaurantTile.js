import React from 'react'
import { Link } from "react-router-dom"

const RestaurantTile = (props) => {

  return (

    <div className="callout shaded">
      <h5>{props.name}</h5>
      <button type="button" className="success button small expanded">
        <Link to={`restaurant/${props.id}`}>
            Visit
        </Link > 
        </button>
    </div>
  )
}

export default RestaurantTile