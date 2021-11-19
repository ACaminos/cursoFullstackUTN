import React from "react";
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Link} from "react-router-dom";

function Header(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="black" className="px-2">
                    <Navbar.Brand href="/">TotheMoon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Criptos</Nav.Link>
                            <Nav.Link href="/">Blog</Nav.Link>
                            <NavDropdown title="Mis criptos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Crear mi criptomoneda</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Mis criptomonedas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="/login">Iniciar sesion</Nav.Link>
                        <Nav.Link href="/registro">Registrarse</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default Header;