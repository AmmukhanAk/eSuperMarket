import React from "react"
import { Card, Button, Row, Col } from "react-bootstrap"
import { useDispatch } from "react-redux"

export const ProductItem = () => {

    const dispatch = useDispatch();

    return (
        <Card className="productitem">
            <Row>
                <Col>
                    <Button variant="dark" onClick={() =>
                        dispatch({
                            type: "ADD_PRODUCT",
                            data: ["Soap", "Tata Namak"],
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
                            data: ["Soap"],
                        })
                    }
                    >
                        -
                    </Button>
                </Col>
            </Row>
        </Card>
    )
}