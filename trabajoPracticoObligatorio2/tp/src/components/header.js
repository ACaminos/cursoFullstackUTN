import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Login from '../pages/login'
import Registro from '../pages/registro'
import {Link} from "react-router-dom";

function Header(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">CriptoAPI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/">Criptos</Link></Nav.Link>
                            <Nav.Link><Link to="/">Blog</Link></Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link><Link to='/login'>Iniciar sesion</Link></Nav.Link>
                        <Nav.Link><Link to='/registro'>Registrarse</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default Header;