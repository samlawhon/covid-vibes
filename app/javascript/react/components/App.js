import React from 'react'
import RestaurantIndex from "./RestaurantIndex.js"
import RestaurantShow from "./RestaurantShow.js"
import {Route, Switch, BrowserRouter} from "react-router-dom"

const App = () => { 
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RestaurantIndex}/>
        <Route exact path="/restaurants" component={RestaurantIndex}/>
        <Route exact path="/restaurant/:id" component={RestaurantShow}/>
      </Switch> 
    </BrowserRouter>
  )
}

export default App
