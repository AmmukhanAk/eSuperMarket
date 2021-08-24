import React from "react";
import { NavBars } from "../NavBAr";
import { Home } from "../Home";
import { ProductList } from "../ProductList";
import { Middlepart } from "../MiddlePart";
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
          <div>

            <Route path="/ProductDetails">
              <ProductDetails />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
};