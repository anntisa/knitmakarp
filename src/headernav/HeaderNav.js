import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEtsy, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'



function HeaderNav() {

    return (
        <Navbar bg="light" expand="lg">

            <Navbar.Brand href="/">KnitMaKarp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                    <Nav.Link href="/item-list">Items</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.etsy.com/shop/knitmakarp" target="_blank">
                        <FontAwesomeIcon icon={faEtsy} />
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/knitmakarps/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Nav.Link>
                    <Nav.Link href="https://www.facebook.com/knitmakarp/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default HeaderNav;
