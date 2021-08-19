import React, { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form, Nav, Navbar, Container } from "react-bootstrap";
import { ProductItem } from "./ProductItem"
import '../components/Product.css'
import { Productlist } from "./Productlist";
import { NaviBar } from "./NavBAr";

// import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getProducts } from "../service/products";
export const Home = () => {
    const dispatch = useDispatch();
    const allProducts = async () => {
        const products = await getProducts();
        dispatch({
            type: "ADD_PRODUCT",
            data: products,
        })
    }
    useEffect(() => {
        allProducts();
    }, [])
    return (

        <div>
            <NaviBar />
            <br />
            <Row>
                <Col>
                    <h5 style={{ marginLeft: "100px", marginTop: "100px" }}>
                        Exclusive Watches
                    </h5>
                    <h1
                        style={{
                            fontFamily: "fantasy",
                            fontSize: "100px",
                            marginLeft: "80px",
                        }}
                    >
                        <span className="prem">PREMIUM</span> <span style={{ color: "" }}>WATCH</span>
                    </h1>
                </Col>
                <Col>
                    <img className="" src="./mechanism.gif" alt="" />
                </Col>
            </Row>
            <Productlist />
        </div>)
}