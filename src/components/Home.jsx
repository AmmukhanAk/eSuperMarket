import react from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form, Nav, Navbar, Container } from "react-bootstrap";
import { ProductItem } from "./ProductItem"
import '../components/Product.css'
import { Productlist } from "./Productlist";
import { NaviBar } from "./NavBAr";

export const Home = () => {
    return (

        <div>
            <NaviBar />
            <br />
            <Row>
                <Col>
                    <h5 style={{ marginLeft: "100px", marginTop: "100px" }}>
                        Exclusive Watches
                    </h5>
                    <h1
                        style={{
                            fontFamily: "fantasy",
                            fontSize: "100px",
                            marginLeft: "80px",
                        }}
                    >
                        <span className="prem">PREMIUM</span> <span style={{ color: "" }}>WATCH</span>
                    </h1>
                </Col>
                <Col>
                    <img className="vegpic" src="./mechanism.gif" alt="" />
                </Col>
            </Row>
            <Productlist />
        </div>)
}