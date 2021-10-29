import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import {link} from "react-router-dom";

function Header(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">CriptoAPI</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Criptos</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Iniciar sesion</Nav.Link>
                            <Nav.Link href="#memes">Registrarse</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>









           {/* <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <div className="container-fluid">
                <a className="navbar-brand">CriptoAPI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">Criptos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link"><link to="">Blog</link></a>
                    </li>
                </ul>
                <span className="navbar-text">
                    Registrarse
                </span>
                <div className="vr mx-2"/>
                <span className="navbar-text">
                    login
                </span>
                </div>
            </div>
            </nav> */}
        </div>
    )

}

export default Header;