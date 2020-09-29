import React, { Component } from 'react';
import { Col, Row, Container, Spinner } from 'react-bootstrap';
import NewJob from '../components/NewJob'
import Job from '../components/Job'
import { Route, Switch } from 'react-router-dom';
import ApplicantContainer from './ApplicantsContainer'

class RegUserHomeContainer extends Component {
    state = {
        showForm: false
    }

    displayJobs() {
        return this.props.jobs.map(job => {
            const address = this.props.addresses.find(address => address.id === job.addressId)
            return(
                <div key={job.id}>
                    {<Job address={address} job={job} user={this.props.user} />}
                    <br></br>
                </div>
            )
        })
    }

    displayLoading() {
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
                        <Row>
                            <Col>
                        
                        </Col>
                        </Row>
                        <Switch >
                            <Route exact path="/jobs/new" render={routerProps => <NewJob user={this.props.user} addJob={this.props.addJob} addresses={this.props.addresses} />} />

                            <Route exact path="/jobs/:jodId/applicants" render={routerProps => <ApplicantContainer {...routerProps} user={this.props.user} jobs={this.props.jobs} />} />
                        </Switch>
                    </Col>
                </Row>
            </Container>     
            </div>

        )
    }
}

export default RegUserHomeContainer;