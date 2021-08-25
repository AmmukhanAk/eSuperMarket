import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "./ProductList";
import { getProducts } from "../service/products";
import { NavBar } from "./NavBAr"
import MiddlePart from "./MiddlePart"
import "./Product.css";
import { NoteTwoTone } from "@material-ui/icons";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductDetails } from "./Productdetails";

export const Home = () => {
    const dispatch = useDispatch();
    const allProducts = async () => {
        const products = await getProducts();
        dispatch({
            type: "ADD_PRODUCT",
            data: products,
        });
    };
    const [searchText, setSearchText] = useState(" ")
    useEffect(() => {
        allProducts();
    }, []);
    return (
        <div>
            <Router>
                <NavBar setSearchText={setSearchText} />

                <MiddlePart />
                <Switch>
                    <div>
                        <Route exact path="/">
                            <ProductList searchText={searchText} />
                        </Route>
                        <Route path="/productdetails">
                            <ProductDetails />
                        </Route>
                    </div>
                </Switch>
            </Router>

        </div>
    );
};