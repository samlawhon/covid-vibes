import React from 'react'
import {Route, Switch, BrowserRouter} from "react-router-dom"

import RestaurantIndex from "./RestaurantIndex.js"
import RestaurantShow from "./RestaurantShow.js"

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
