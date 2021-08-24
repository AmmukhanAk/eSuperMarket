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
                    <h4>multibrands</h4>
                    <h1>F-ZONE</h1><br /><h2>Collection</h2>


                    {/* <h5 style={{ marginLeft: "100px", marginTop: "100px" }}>
                        Mutibrands
                    </h5>
                    <h1
                        style={{
                            fontFamily: "fantasy",
                            fontSize: "130px",
                            marginLeft: "100px",
                        }}
                    >
                        {/* <span style={{ color: "" }}>F-Zone</span> */}
                    {/* <br />

                    <span style={{ color: "" }}>Collection</span>
                    </h1>
                </Col> */}
                <Col>
                    <img className="F" src="./diamond.gif" alt="" />
                </Col>
            </Row>
        </div >
    );
};

export default MiddlePart;