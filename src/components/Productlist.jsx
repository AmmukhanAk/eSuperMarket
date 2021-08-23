import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";

export const ProductList = ({ searchText }) => {
    const myProducts = useSelector((state) => state.productReducer.product);
    const [prods, setProds] = useState([]);

    useEffect(() => {
        if (searchText !== "") {
            const filterProducts = myProducts.filter((item) => item.title.toUpperCase().includes(searchText.toUpperCase()));
            setProds([...filterProducts])
        }
    }, [searchText])
    useEffect(() => {
        setProds([...myProducts]);
    }, [myProducts]);
    return (
        <Card className="productlist">
            <Row>
                {prods.map((item) => (
                    <Col md={3}>
                        <ProductItem item={item} />
                    </Col>
                ))}
            </Row>
        </Card>
    );
};