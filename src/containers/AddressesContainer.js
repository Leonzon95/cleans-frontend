import React, { Component } from 'react';
import { Row, Col, Button, Container, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom'
import NewAddress from '../components/NewAddress'

class AddressesContainer extends Component {
    displayAddresses() {
        return this.props.addresses.map(address => {
            return (
                <li>
                    {address.name}
                </li>
            )
        })
    }

    displayLoading() {
        console.log("jello")
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }

    render(){
        const {match, user, addAddress, isLoading } = this.props;
        return (
            <Container>
                <Row >
                    <Col className="padd-top">
                        <ul>
                            {isLoading ?  this.displayLoading() : this.displayAddresses()}
                        </ul>
                    </Col>  

                    <Col >
                        <Button variant="info" className="signup-bttn job padd-top float-right" ><Link to="/addresses/new" className="bttn-link">New Address</Link></Button>
                        <Switch>
                            <Route exact path={`${match.url}/new`} render={routerProps => <NewAddress user={user} addAddress={addAddress} />} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(null, )(AddressesContainer);