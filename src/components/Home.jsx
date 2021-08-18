import react from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form, Nav, Navbar, Container } from "react-bootstrap";
import { ProductItem } from "./ProductItem"
import '../components/Product.css'


export const Home = () => {
    return (

        <div><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TRENDY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#Products">Products</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Cart</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
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
                        <span className="prem">PREMIUM</span> <span style={{ color: "#445022" }}>WATCH</span>
                    </h1>
                </Col>
                <Col>
                    <img className="vegpic" src="./mechanism.gif" alt="" />
                </Col>
            </Row>
            <ProductItem />
        </div>)
}