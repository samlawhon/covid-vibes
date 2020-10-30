import React, { useState } from 'react'

const ReviewForm = props => {

  const [getNewReview, setNewReview] = useState({
    masks_customers: false, 
    masks_employees: false, 
    social_distancing: false, 
    party_size: false
  });
  
  const handleInputChange = event => {

    const target = event.currentTarget;
    const value = target.type === 'checkbox' ? target.checked : Number(target.value);

    setNewReview({
      ...getNewReview,
      [event.currentTarget.name]: value
    });
  }

  return (
    <div className="grid-x">
      <form onSubmit={(event)=> props.handleSubmit(event, getNewReview)}>
        <h4>What's the vibe?</h4>
        <fieldset class="small-12 columns">
        <ul class="menu vertical">
          <li><input name="masks_employees"
            type="checkbox"
            checked={getNewReview.masks_employees}
            onChange={handleInputChange}/>
            <label>Are the employees wearing masks? </label>
          </li>
          <li>
            <input 
            name="masks_customers"
            type="checkbox"
            checked={getNewReview.masks_customers}
            onChange={handleInputChange}/>
            <label>Are the customers wearing masks?</label>
          </li>
          <li>
            <input
              name="social_distancing"
              type="checkbox"
              checked={getNewReview.social_distancing}
              onChange={handleInputChange}/>
            <label>Are customers observing social distancing, as in, attempting to stand 6 feet apart from each other?</label>
          </li>
          <li>
            <input
              name="party_size"
              type="checkbox"
              checked={getNewReview.party_size}
              onChange={handleInputChange} />
            <label>Are groups smaller than 10?</label>
          </li>
        </ul>
      </fieldset>

        <div className="cell small-12">
          <label>
            How would you personally rate your Covid safety at this establishment? 
            <select onChange={handleInputChange} name="rating">
              <option value="default">Select From The Following:</option>
              <option value="1">1 Star - SUSS</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars!</option>
              <option value="5">5 Stars!!!</option>
            </select>
          </label>
        </div>

        <input type="submit" value="Submit" className="button" />
      </form>
    </div>
  )
}

export default ReviewForm;
