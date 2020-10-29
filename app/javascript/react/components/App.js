import React from 'react'
import RestaurantIndex from "./RestaurantIndex.js"
import RestaurantShow from "./RestaurantShow.js"
import UserShow from "./UserShow.js"
import {Route, Switch, BrowserRouter} from "react-router-dom"

const App = () => { 
  
  return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RestaurantIndex}/>
        <Route exact path="/restaurants" component={RestaurantIndex}/>
        <Route exact path="/restaurant/:id" component={RestaurantShow}/>
        <Route exact path="/user/:id" component={UserShow}/>
      </Switch> 
    </BrowserRouter>
  </div>
  )
}

export default App
