import React from 'react';
import { Card, Button } from 'react-bootstrap';
import RatingStar from './RatingStar';
import ReviewsContainer from '../containers/ReviewsContainer'

const Applicant= props => {
    const applicant = props.applicant;
    
    const handleClick = event => {
        props.hire(props.userId, props.jobId, applicant.id)
        props.history.push('/')
    }
    
    return (
        <Card id={applicant.id}>
            <Card.Body>
                <Card.Title>{applicant.firstName} {applicant.lastName}</Card.Title>
                <Card.Text>
                Hourly Rate: {applicant.hourlyRate}$<br />
                Email: {applicant.email}<br />
                Phone Number: {applicant.phoneNumber}<br />
                Rating: {applicant.rating ? <RatingStar rating={applicant.rating} /> : "User does not have rating yet"}
                </Card.Text>
                <Button variant="success" className="signup-bttn" onClick={handleClick} >Hire</Button>
            </Card.Body>
            <ReviewsContainer applicantId={applicant.id} />
        </Card>
    )
}

export default Applicant