import React from "react"
import { Nav, Navbar, Container, } from "react-bootstrap"
import { Cart } from "./Cart";

export const NaviBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="Ammukhan">
                <Container>
                    <Navbar.Brand href="#home">PickupBiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#/">Premium</Nav.Link>
                            <Nav.Link href="#/">Products</Nav.Link>

                        </Nav>
                        <Nav>
                            <Cart />

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};