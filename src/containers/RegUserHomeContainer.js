import React, { Component } from 'react';
import { Button, Col, Row, Container, Spinner } from 'react-bootstrap';
import NewJob from '../components/NewJob'
import { Route, Switch, Link } from 'react-router-dom';

class RegUserHomeContainer extends Component {
    state = {
        showForm: false
    }

    displayJobs() {
        console.log(this.props.jobs)
        return this.props.jobs.map(job => {
            return(
                <div>
                    {job.description}
                    <br></br>
                </div>
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

    render() {
        return (
            <div>
                <Container>
                <Row >
                    <Col className="padd-top">    
                        {this.props.isLoading ?  this.displayLoading() : this.displayJobs()}
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