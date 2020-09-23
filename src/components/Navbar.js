import React, { Component } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    displayLinks() {
        if(this.props.loggedInStatus){

        } else {
            return (
                <Nav>
                <Nav.Link><Link to='/login' className="nav-links">Log In</Link></Nav.Link>
                <Button variant="info" className="signup-bttn" ><Link to='/signup' className="nav-links signup">Sign Up</Link></Button>
                </Nav>
            )
        }
    }

    render() {
        return (
            <Navbar bg="light" expand="lg" >
            <Container>
                <Navbar.Brand ><Link to='/' className="nav-links">Cleans</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    {this.displayLinks()}
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;