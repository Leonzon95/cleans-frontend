import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom'
import NewAddress from '../components/NewAddress'

class AddressesContainer extends Component {
    

    render(){
        const {match, user, addAddress, addresses} =this.props;
        return (
            <Container>
                <Row >
                    <Col className="padd-top">
                        Hello
                    </Col>  
                    <Col className="padd-top" >
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