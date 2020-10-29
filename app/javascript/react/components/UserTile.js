import React from 'react'

const UserTile = (props) => {
  return(
    <div>
      <h1>
        {props.users.first_name} {props.users.last_name} 
      </h1>
    </div>
  )
}

export default UserTile