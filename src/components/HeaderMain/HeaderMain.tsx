import React, { FC } from 'react';
import {Image, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

interface HeaderMainProps {}

const HeaderMain: FC<HeaderMainProps> = () => (
    <Navbar bg="primary" variant="dark" className="CustomNavbar">
        <LinkContainer to="/">
            <Navbar.Brand>Our amazing app</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default HeaderMain;
