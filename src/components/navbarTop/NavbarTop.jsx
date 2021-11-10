import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../../images/bootstrap.svg";

class NavbarTop extends Component {
    render() {
        return (
            <div className="mb-4">
                <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                />{' '}
                                React Bootstrap
                            </Navbar.Brand>
                            <Nav>
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/character">Character</Link>
                                <Link className="nav-link" to="/location">Locations</Link>
                                <Link className="nav-link" to="/episode">Episodes</Link>
                            </Nav>
                        </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavbarTop;
