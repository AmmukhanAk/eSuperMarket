import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "./ProductList";
import { getProducts } from "../service/products";
import { NavBar } from "./NavBAr"
import MiddlePart from "./MiddlePart"
import "./Product.css";

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
            <NavBar />
            <MiddlePart />
            <ProductList />
        </div>
    );
};