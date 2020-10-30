import React from "react";
import { Link } from "react-router-dom";

const RestaurantTile = props => (
  <div className="callout shaded">
    <h5>{props.name}</h5>
    <Link to={`restaurant/${props.id}`}>
      <button type="button" className="success button small expanded">
        Visit
      </button>
    </Link>
  </div>
);

export default RestaurantTile;