import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { ProductItem } from "./ProductItem"

export const Productlist = () => {
    return (
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./omega 2.jpg" />
                    <Card.Body>
                        <Card.Title>OMEGA</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <ProductItem />
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./omega 2.jpg" />
                    <Card.Body>
                        <Card.Title>OMEGA</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <ProductItem />
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./omega 2.jpg" />
                    <Card.Body>
                        <Card.Title>OMEGA</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <ProductItem />
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    )
}