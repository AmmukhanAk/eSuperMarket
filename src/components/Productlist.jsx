import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Card, Col, Row } from "react-bootstrap"
import { ProductItem } from "./ProductItem"
export const ProductList = () => {

    const myProducts = useSelector((state) => state.productReducer.product)
    const [prod, setProd] = useState([])
    useEffect(() => {
        console.log("===data==>", myProducts)
        setProd([...myProducts])
    }, [myProducts])
    return (
        <React.Fragment>{prod.length > 1 &&
            <Row>
                {console.log("prod====>", prod)}
                {prod.map(item => {

                    <ProductItem item={item} />

                })}
            </Row >}
        </React.Fragment>
    )
}