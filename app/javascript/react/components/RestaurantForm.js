import { post } from 'fetch-mock'
import React, { useEffect, useState } from 'react'

const RestaurantForm = (props) => {

    const [restaurantData, setRestaurantData] = useState([])

    let handleSubmit = (event) => {
        event.preventDefault()
        let formPayload = {
            review: NewReview
        }
        fetch("/api/review", {
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
            .then(body => {
                let newFortune = body.fortune.text
                setFortune(newFortune)
            })
            .catch(error => console.error(`Error in fetch: ${error.message}`))
    }



    return(
        <form onSubmit={handleSubmit}>
            <label>New Review</label>
            <label>
                Are the employees wearing masks? 
                <input
                    name="employeeMask"
                    type="checkbox"
                    checked={this.state.employeeMask}
                    onChange={this.handleInputChange} />
            </label>
            <label>
                Are the customers wearing masks?
                <input
                    name="customerMask"
                    type="checkbox"
                    checked={this.state.customereMask}
                    onChange={this.handleInputChange} />
            </label>
            <label>
                Are customers observing social distancing, as in, attempting to stand 6 feet apart from each other?
                <input
                    name="customerSocialDistancing"
                    type="checkbox"
                    checked={this.state.socialDistancing}
                    onChange={this.handleInputChange} />
            </label>
            <label>
                Are groups smaller than 10? 
                <input
                    name="lessThanTen"
                    type="checkbox"
                    checked={this.state.lessThanTen}
                    onChange={this.handleInputChange} />
            </label>
            <label>
                How Would you personally rate your Covid safety? 
                <select>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars!</option>
                    <option value="5">5 Stars!!!</option>
                </select>
            </label>


            <input type="submit" value="Submit" />
        </form>
    )
}