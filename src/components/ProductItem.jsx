import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Button, Form, Image } from "react-bootstrap";

export const ProductItem = ({ item }) => {
    const dispatch = useDispatch();
    console.log("Item====>", item);
    return (
        <Card className="productitem">
            <Row>
                <Form.Label>{item.title}</Form.Label>
            </Row>
            <Row>
                <Form.Label>${item.price}</Form.Label>
            </Row>
            <Row>
                <Image src={`${item.image}`} width="100px" height="300px" />
            </Row>
            <Row>
                <Col>
                    <Button variant="dark"
                        onClick={() =>
                            dispatch({
                                type: "REMOVE_PRODUCT",
                                data: "Soap",
                            })
                        }
                    >
                        -
                    </Button>
                </Col>
                <Col>
                    <Button variant="dark"
                        onClick={() =>
                            dispatch({
                                type: "ADD_PRODUCT",
                                data: ["Soap", "Tata Namak"],
                            })
                        }
                    >
                        +
                    </Button>
                </Col>
            </Row>
        </Card>
    );
};