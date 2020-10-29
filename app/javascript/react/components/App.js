import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import RestaurantIndex from "./RestaurantIndex";
import RestaurantShow from "./RestaurantShow";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={RestaurantIndex}/>
      <Route exact path="/restaurants" component={RestaurantIndex}/>
      <Route exact path="/restaurant/:id" component={RestaurantShow}/>
    </Switch> 
  </BrowserRouter>
);

export default App;
