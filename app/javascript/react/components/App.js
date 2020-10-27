import React from 'react'
import RestaurantIndex from "./RestaurantIndex.js"
import RestaurantShow from "./RestaurantShow.js"
import ReviewForm from "./ReviewForm.js"
import {Route, Switch, BrowserRouter} from "react-router-dom"

const App = () => { 
  
  return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RestaurantIndex}/>
        <Route exact path="/restaurants" component={RestaurantIndex}/>
        <Route exact path="/restaurant/:id" component={RestaurantShow}/>
        
      </Switch> 
    </BrowserRouter>
  </div>
  )
}

export default App
