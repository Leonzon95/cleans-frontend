import React, { Component } from 'react';
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    displayRightLinks() {
        if(this.props.loggedInStatus){
            return (
                <Nav>
                    {!this.props.user.isCleaner ? <Link to="/jobs/new" className="nav-links signup"><Button variant="info" className="signup-bttn" >Post a Job</Button></Link> : null}
                    <Nav.Link className="nav-links link" onClick={() => this.props.handleLogout()}>Log out</Nav.Link>
                </Nav>
            )
        } else {
            return (
                <Nav>
                    <Nav><Link to='/login' className="nav-links link">Log In</Link></Nav>
                    <Link to='/signup' className="nav-links signup">
                    <Button variant="info" className="signup-bttn" >Sign Up</Button></Link>
                </Nav>
            )
        }
    }

    displayLeftLinks() {
        if(this.props.loggedInStatus && !this.props.user.isCleaner){
            return(
            <Nav className="mr-auto">
                <Nav><Link to='/addresses' className="nav-links link">My Adresses</Link></Nav>
                <Nav><Link to='/pending-jobs' className="nav-links link">Pending Jobs</Link></Nav>
                <Nav><Link to='/completed-jobs' className="nav-links link">Completed Jobs</Link></Nav>
            </Nav>
            )
        } else if (this.props.loggedInStatus && this.props.user.isCleaner){
            return (
            <Nav className="mr-auto">
                <Nav><Link to='/applied-jobs' className="nav-links link">Applied Jobs</Link></Nav>
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