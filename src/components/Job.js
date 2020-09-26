import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap'

const  Job = props => {
    const { job, address } = props;
    return (
        <Card>
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
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
} 

export default Job;