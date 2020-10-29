import React from "react";

const UserTile = props => (
  <div>
    <h1>{props.users.first_name} {props.users.last_name}</h1>
  </div>
);

export default UserTile;