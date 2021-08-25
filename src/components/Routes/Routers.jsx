import React from "react";
import { NavBars } from "../NavBAr";
import { ProductDetails } from "../Productdetails"
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
  from "react-router-dom";
import { ProductDetails } from "../ProductDetail/ProductDetails";
export const Routers = ({ setstext, stext }) => {
  return (
    <div>
      <Router>
        <NavBars setstext={setstext} />
        <Switch>
          <Route path="/ProductDetails">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};