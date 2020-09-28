import React from 'react';
import { Card, Button } from 'react-bootstrap'

const  Job = props => {
    const { job, address, user, applyToJob} = props;

    const displayButtons = () => {
        if (user.isCleaner) {
            return (
                <Button variant="primary" onClick={() => applyToJob(user.id, job.id)} >Apply for job</Button>
            )
        } else {
            return (
                <Button variant="primary">Go somewhere</Button>
            )
        }
    }
    return (
        <Card id={job.id}>
            <Card.Body>
                <Card.Title as="h5">{job.description}</Card.Title>
                <Card.Text>
                    Date: {job.date}
                    <br></br>
                    Estimated job time: {job.estimatedTime}
                    <br></br>
                    Location: <br></br>
                    {address.streetAddress}<br></br>
                    {address.city}, {address.state} {address.country} {address.zipcode}
                </Card.Text>
               {displayButtons()}
            </Card.Body>
        </Card>
    )
} 

export default Job;