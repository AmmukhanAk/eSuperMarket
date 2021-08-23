import React from "react"
import { Nav, Navbar, Container, Form, FormControl, } from "react-bootstrap"
import { Cart } from "./Cart";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
export const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="Ammukhan">
                <Container>
                    <Navbar.Brand href="#home">F-zone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#/">exclusive</Nav.Link>
                            <Nav.Link href="#/">Product</Nav.Link>
                            <FormControl
                                type="Search"
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </Nav>
                        <Nav>
                            <Cart />
                            <Nav.Link>
                                Login<VerifiedUserIcon />
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};