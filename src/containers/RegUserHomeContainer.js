import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import NewJob from '../components/NewJob'

class RegUserHomeContainer extends Component {
    state = {
        showForm: false
    }

    displayForm() {
        if(!this.state.showForm) {
            return <Button variant="info" className="signup-bttn job" onClick={()=> this.setState({showForm: true})} >Post a Job</Button>
        } else {
            return (
                <div>
                    <Button variant="info" className="signup-bttn job" onClick={()=> this.setState({showForm: false})} >Close</Button>
                    <NewJob user={this.props.user} addJob={this.props.addJob} />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h3>Welcome {this.props.user.firstName}!</h3>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} className="new-job-form">
                        {this.displayForm()}
                    </Col>
                </Row>
                              
            </div>

        )
    }
}

export default RegUserHomeContainer;