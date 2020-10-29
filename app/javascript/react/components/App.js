import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";

import RestaurantIndex from "./RestaurantIndex";
import RestaurantShow from "./RestaurantShow";
import UserShow from "./UserShow";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={RestaurantIndex}/>
      <Route exact path="/restaurants" component={RestaurantIndex}/>
      <Route exact path="/restaurant/:id" component={RestaurantShow}/>
      <Route exact path="/user/:id" component={UserShow}/>
    </Switch> 
  </BrowserRouter>
);

export default App;
