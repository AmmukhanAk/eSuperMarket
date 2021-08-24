import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "./ProductList";
import { getProducts } from "../service/products";
import { NavBar } from "./NavBAr"
import MiddlePart from "./MiddlePart"
import "./Product.css";
import { NoteTwoTone } from "@material-ui/icons";
import { Nav } from "react-bootstrap";

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
            <NavBar setSearchText={setSearchText} />
            <MiddlePart />
            <ProductList searchText={searchText} />

        </div>
    );
};