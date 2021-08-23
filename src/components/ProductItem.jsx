import React from "react"
import { useDispatch } from "react-redux"
import { Card, Button, Row, Col, Form, Image } from "react-bootstrap"
// import "./Product.css"

export const ProductItem = ({ item }) => {
    const dispatch = useDispatch();
    console.log("item---=======--->", item)
    return (
        <React.Fragment>
            <Card >
                {/* <Row>
                    <Form.Label>{item.title}</Form.Label>
                </Row>
                <Row>
                    <Form.Label>${item.price}</Form.Label>
                </Row>
                <Row>
                    <Image src={`${item.image}`} width="100px" height="300px" />
                </Row> */}
                <Row>
                    <Col>
                        <Button variant="dark" onClick={() =>
                            dispatch({
                                type: "ADD_PRODUCT",
                                data: ["Omega", "MontBlanc"],
                            })
                        }
                        >
                            +
                        </Button>

                    </Col>
                    <Col>
                        <Button variant="dark" onClick={() =>
                            dispatch({
                                type: "REMOVE_PRODUCT",
                                data: "Omega",
                            })
                        }
                        >
                            -
                        </Button>
                    </Col>
                </Row>
            </Card>
        </React.Fragment >
    );
};