import React from "react";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

export const MiddlePart = () => {
    return (
        <div>
            <Row>
                {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
            </Row>
            <br />
            <Row>
                <Col>
                    <h5 style={{ marginLeft: "100px", marginTop: "100px" }}>
                        Mutibrands
                    </h5>
                    <h1
                        style={{
                            fontFamily: "fantasy",
                            fontSize: "130px",
                            marginLeft: "100px",
                        }}
                    >
                        <span style={{ color: "#082032" }}>F-Zone</span>
                        <br />

                        <span style={{ color: "#FF4C29" }}>Collection</span>
                    </h1>
                </Col>
                <Col>
                    <img className="vegpic" src="./veg.png" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default MiddlePart;