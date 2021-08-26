import React from "react"
import { Nav, Navbar, Container, Form, FormControl, } from "react-bootstrap"
import { Cart } from "./Cart";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
export const NavBar = ({ setSearchText }) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg"
                bg="black"
                variant="dark"
                className="Ammukhan"
            >
                <Container>
                    <Navbar.Brand href="#home">F-zone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Basics</Nav.Link>
                            <Nav.Link href="#/">Casuals</Nav.Link>
                            {/* <Nav.Link href="#/">Cultural</Nav.Link> */}

                        </Nav>
                        <Nav>
                            <Form >
                                <FormControl
                                    type="Search"
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </Form>
                            <Nav.Link><FavoriteBorderIcon /></Nav.Link>
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