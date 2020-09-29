import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Applicant= props => {
    const applicant = props.applicant;
    return (
        <Card id={applicant.id}>
            <Card.Body>
                <Card.Title>{applicant.firstName} {applicant.lastName}</Card.Title>
                <Card.Text>
                Hourly Rate: {applicant.hourlyRate}$<br />
                Email: {applicant.email}<br />
                Phone Number: {applicant.phoneNumber}<br />

                </Card.Text>
                <Button variant="success" className="signup-bttn" onClick={() => props.hire(props.userId, props.jobId, applicant.id)} >Hire</Button>
            </Card.Body>
        </Card>
    )
}

export default Applicant