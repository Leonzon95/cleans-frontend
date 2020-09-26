import React, { Component } from 'react';
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    displayRightLinks() {
        if(this.props.loggedInStatus){
            return (
                <Nav>
                    
                    <Nav className="nav-links link" onClick={() => this.props.handleLogout()}>Log out</Nav>
                </Nav>
            )
        } else {
            return (
                <Nav>
                    <Nav><Link to='/login' className="nav-links link">Log In</Link></Nav>
                    <Button variant="info" className="signup-bttn" ><Link to='/signup' className="nav-links signup">Sign Up</Link></Button>
                </Nav>
            )
        }
    }

    displayLeftLinks() {
        if(this.props.loggedInStatus && !this.props.user.isCleaner){
            return(
            <Nav className="mr-auto">
                <Nav><Link to='/addresses' className="nav-links link">My Adresses</Link></Nav>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            )
        } else if (this.props.loggedInStatus && this.props.user.isCleaner){
            return (
            <Nav className="mr-auto">
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            )
        } else {
            return (
            <Nav className="mr-auto">
                
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
                    {this.displayLeftLinks()}
                    {this.displayRightLinks()}
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar;