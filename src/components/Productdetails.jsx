import React, { useEffect, useState } from "react"
import { Col, Row, Button, Card } from "react-bootstrap"
import { useSelector } from "react-redux"
export const ProductDetails = () => {
    const [selectedProduct, setSelectedProduct] = useState([])
    const myProducts = useSelector((state) => state.productReducer.product)
    const selectedId = useSelector((state) => state.productReducer.selectedid[0])
    useEffect(() => {
        console.log(selectedId);
        const filteredProd = myProducts.filter((item) => item.id === selectedId);
        setSelectedProduct([...filteredProd]);
        console.log(filteredProd);
    }, [selectedId]);
    return (
        <div>
            <Card>
                <Row>
                    <Col>
                        <p>WAPAS JAO KUCH NAHI HAI ABHI YAHA </p>
                    </Col>
                </Row>
                <Row> <Col> <Button variant="dark">
                    Back</Button></Col></Row>
            </Card>
        </div>
    )
}