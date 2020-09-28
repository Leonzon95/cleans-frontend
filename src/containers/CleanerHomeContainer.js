import React, { Component } from 'react';
import { Spinner, Row, Button, Col, Form } from 'react-bootstrap';
import Job from '../components/Job'

class CleanerHomeContainer extends Component {
    state={
        displayHourlyForm: false,
        hourlyRate: ''
    }

    displayJobs() {
        return this.props.jobs.map(job => {
            return(
                <div key={job.id}>
                    {<Job job={job} address={job.address} user={this.props.user} applyToJob={this.props.applyToJob}/>}
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

    displayHourlyrate() {
        const { hourlyRate } = this.props.user;
        if (!!hourlyRate){
            return <h5>Your Hourly Rate is {hourlyRate}</h5>
        } else {
            return <h5>You currently don't have an hourly rate, please update it</h5>
        }
    }

    handleClick = () => {
        const {displayHourlyForm} = this.state
        this.setState({
            displayHourlyForm: !displayHourlyForm
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
        [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateHourlyRate(this.props.user.id, this.state.hourlyRate)
        this.handleClick();
    }

    displayHourlForm() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <br/>
                <Form.Row className="align-items-center">
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Ex. 12.75"
                        name="hourlyRate"
                        onChange={this.handleChange}
                        value={this.state.hourlyRate}
                    />
                    </Col>
                    <Col xs="auto">
                    <Button type="submit" className="mb-2">
                        Update
                    </Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }

    render() {
        const {displayHourlyForm} = this.state
        return (
            <div>
            <Row>
                <Col>
                {this.displayHourlyrate()}
                <Button variant="info" className="signup-bttn job text-right" onClick={this.handleClick}>{displayHourlyForm ? <div>Close</div> : <div>Update Hourly Rate</div>}</Button>
                {displayHourlyForm ? this.displayHourlForm() : null}
                </Col>
            </Row>
            <Row>
                {this.props.isLoading ?  this.displayLoading() : this.displayJobs()}
            </Row>
            </div>
        )
    }
}

export default CleanerHomeContainer;