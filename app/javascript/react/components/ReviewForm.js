import React from 'react'

const ReviewForm = props => (
  <form onSubmit={props.handleSubmit}>
    <label>Add A Review</label>
    <label>
      Are the employees wearing masks? 
      <input
        name="masks_employees"
        type="checkbox"
        checked={props.getNewReview.masks_employees}
        onChange={props.handleInputChange} />
    </label>
    <label>
      Are the customers wearing masks?
      <input
        name="masks_customers"
        type="checkbox"
        checked={props.getNewReview.masks_customers}
        onChange={props.handleInputChange} />
    </label>
    <label>
      Are customers observing social distancing, as in, attempting to stand 6 feet apart from each other?
      <input
        name="social_distancing"
        type="checkbox"
        checked={props.getNewReview.social_distancing}
        onChange={props.handleInputChange} />
    </label>
    <label>
      Are groups smaller than 10? 
      <input
        name="party_size"
        type="checkbox"
        checked={props.getNewReview.party_size}
        onChange={props.handleInputChange} />
    </label>
    <label>
      How would you personally rate your Covid safety at this establishment? 
      <select onChange={props.handleInputChange} name="rating">
        <option value="default">Select From The Following:</option>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars!</option>
        <option value="5">5 Stars!!!</option>
      </select>
    </label>

    <input type="submit" value="Submit" />
  </form>
);

export default ReviewForm;