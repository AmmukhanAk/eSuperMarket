import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import { useEffect } from "react";

export const ProductList = () => {
    const myProducts = useSelector((state) => state.productReducer.product);
    const [prods, setProds] = useState([]);

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