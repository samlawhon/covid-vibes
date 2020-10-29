import React, { Fragment } from 'react'

const ReviewTile = props => (
  <Fragment>
    <h3>Overall Covid Vibe: {props.rating}</h3>
    <ul>
      <li>Groups are smaller than 10? {props.partySize ? 'yes' : 'no'}</li>
      <li>Employees are wearing masks? {props.masksEmployees ? 'yes' : 'no'}</li>
      <li>Customers are wearing masks? {props.masksCustomers ? 'yes' : 'no'}</li>
      <li>Customers are observing social distancing? {props.socialDistancing ? 'yes' : 'no'}</li>
    </ul>
  </Fragment>
);

export default ReviewTile