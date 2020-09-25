import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import NewJob from '../components/NewJob'
import { Route, Switch, Link } from 'react-router-dom';

class RegUserHomeContainer extends Component {
    state = {
        showForm: false
    }

    // displayForm() {
    //     if(!this.state.showForm) {
    //         return <Button variant="info" className="signup-bttn job" onClick={()=> this.setState({showForm: true})} >Post a Job</Button>
    //     } else {
    //         return (
    //             <div>
    //                 <Button variant="info" className="signup-bttn job" onClick={()=> this.setState({showForm: false})} >Close</Button>
    //                 <NewJob user={this.props.user} addJob={this.props.addJob} addresses={this.props.addresses} />
    //             </div>
    //         )
    //     }
    // }

    render() {
        return (
            <div>
                {/* <Row>
                    <Col>
                        <h3>Welcome {this.props.user.firstName}!</h3>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="new-job-form">
                        {this.displayForm()}
                    </Col>
                </Row> */}
                <Container>
                <Row >
                    <Col className="padd-top">
                        <ul>
                            {/* {isLoading ?  this.displayLoading() : this.displayJobs()} */}
                        </ul>
                    </Col>  

                    <Col className="padd-top" >
                        <Button variant="info" className="signup-bttn job padd-top float-right" ><Link to="/jobs/new" className="bttn-link">Post a Job</Link></Button>
                        <Switch>
                            <Route exact path="/jobs/new" render={routerProps => <NewJob user={this.props.user} addJob={this.props.addJob} addresses={this.props.addresses} />} />
                        </Switch>
                    </Col>
                </Row>
            </Container>     
            </div>

        )
    }
}

export default RegUserHomeContainer;