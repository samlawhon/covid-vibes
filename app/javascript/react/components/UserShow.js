import React, { useState, useEffect } from 'react'
import UserTile from './UserTile'
import { createBrowserHistory } from 'history'

const UserShow = (props) => {
  const [user, setUser] = useState({})
  const [errorList, setErrorList] = useState([])

  const id = props.match.params.id

  useEffect(() => {
    fetch(`/api/v1/users/${id}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw (error);
        }
      })
      .then(response => response.json())
      .then(responseBody => {
        if (responseBody.id !== null) {
          setUser(responseBody)
        } else if (responseBody.error[0] === "You need to be signed in first") {
          props.history.go("/users/sign_in")
        } else if (responseBody.error) {
          setErrorList(responseBody.error)
        }
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const errorDisplayArray = errorList.map((error)=>{
   return alert(error)
  })



  return (
    <div>
      <UserTile user={user} />
    </div>
  )
}

export default UserShow