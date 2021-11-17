import React from "react";
import Nav from 'react-bootstrap/Nav'
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";


function Footer(){
    return(
        <div className="row py-3">
            <span className="text-center mt-3">Seguinos en nuestras redes sociales</span>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home"><i className="fab fa-twitter-square"/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><FaFacebookSquare/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><FaTwitterSquare/></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3"><FaInstagramSquare/></Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )

}
export default Footer;