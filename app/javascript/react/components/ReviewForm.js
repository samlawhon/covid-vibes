import { post } from 'fetch-mock'
import React, { useEffect, useState } from 'react'

const ReviewForm = (props) => {
  const [getReviewData, setReviewData] = useState([])
  const [getNewReview, setNewReview] = useState({masks_customers: false, masks_employees: false, social_distancing: false, party_size: false })
  const [errorList, setErrorList] = useState([])

    const handleInputChange = event => {

      setNewReview({
        ...getNewReview,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }

  let handleSubmit = (event) => {
    
    event.preventDefault()
    let formPayload = {
      review: getNewReview
    }
    fetch(`/api/v1/restaurants/${props.id}/reviews`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
  })
  .then(response => {
    if (response.ok) {
      return response
  } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
      throw error
    }
  })
  .then(response => response.json())
  .then(responseBody => {
    if(responseBody.review) {
      setReviewData([...getReviewData, getNewReview])
    } else if (responseBody.error) {
      setErrorList(responseBody.error)
    }
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

 const errorsDisplayArray = errorList.map((error)=> {
   return error
 })
  
  return(
    <div>
      {errorsDisplayArray}
      <form onSubmit={handleSubmit}>
        <label>Add A Review</label>
        <label>
            Are the employees wearing masks? 
            <input
                name="masks_employees"
                type="checkbox"
                checked={getNewReview.masks_employees}
                onChange={handleInputChange} />
        </label>
        <label>
          Are the customers wearing masks?
          <input
            name="masks_customers"
            type="checkbox"
            checked={getNewReview.masks_customers}
            onChange={handleInputChange} />
        </label>
        <label>
          Are customers observing social distancing, as in, attempting to stand 6 feet apart from each other?
          <input
            name="social_distancing"
            type="checkbox"
            checked={getNewReview.social_distancing}
            onChange={handleInputChange} />
        </label>
        <label>
          Are groups smaller than 10? 
          <input
            name="party_size"
            type="checkbox"
            checked={getNewReview.party_size}
            onChange={handleInputChange} />
        </label>
        <label>
          How would you personally rate your Covid safety at this establishment? 
          <select onChange={handleInputChange} name="rating">
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
    </div>
  )
}

export default ReviewForm