import React from 'react'
import { Link } from "react-router-dom"
import RestaurantTile from './RestaurantTile'

const RestaurantShow = (props) => {
debugger

    return (
        <div>
            <p key={props.id}>
                <Link to={`restaurant/${props.id}`}>
                    {props.name}
                </Link > 
                
            </p>
        </div>
    )
}

export default RestaurantShow