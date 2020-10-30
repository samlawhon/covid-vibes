import React, { useState } from 'react'

const SearchForm = props => {

  const [searchBarQuery, setSearchBarQuery] = useState("");

  const handleInputChange = event => {

    event.preventDefault();
    const value = event.currentTarget.value;
    setSearchBarQuery(value);
  }

  return (
    <form onSubmit={event => props.handleSubmit(event, searchBarQuery)}>
      <div className="grid-x align-right align-bottom grid-padding-x">
        <div className="medium-7 cell">
          <label>City
            <input onChange={handleInputChange} type="text" placeholder="For ex Boston, MA" />
          </label>
        </div>
        <div className="medium-3 cell">
          <input type="submit" className="button" value="Submit" />
        </div>
      </div>
    </form>
  )
}

export default SearchForm;
