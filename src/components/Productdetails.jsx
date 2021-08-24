import React, { useEffect, useState } from "react"
import { Col, Row, Button, Card } from "react-bootstrap"
import { useSelector } from "react-redux"
export const ProductDetails = () => {
    const [selectedProduct, setSelectProduct] = useState([])
    const myProducts = useSelector((state) => state.productSelector.product)
    const selectedId = useSelector((state) => state.productSelector.selectedId)
    return (
        <div>
            <Card>
                <Row>
                    <Col>
                        <p>Ammukhan</p>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}