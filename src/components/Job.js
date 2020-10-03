import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const  Job = props => {
    const { job, address, user, applyToJob, applied, hiredCleaner} = props;

    const displayButtons = () => {
        if (user.isCleaner) {
            if (job.status === "new" && !applied) {
                return (
                    <Button variant="primary" className="signup-bttn" onClick={() => applyToJob(user.id, job.id)} >Apply for job</Button>
                )
            }
        } else {
            if(job.status === "new") {
                return (
                    <Link to={`/jobs/${job.id}/applicants`} className="bttn-link"><Button variant="info" className="signup-bttn" >See Applicants</Button></Link>
                )
            } else if (job.status === "pending") {
                return <Button variant="success" className="signup-bttn" onClick={()=> props.complete(user.id, job.id, null, true)}>Mark as completed</Button>
            }
        }
    }

    const displayCleaner = () => {
        return (
            <Col>
                <Card.Title as="h5">You hired:</Card.Title>
                <Card.Text>
                {hiredCleaner.firstName} {hiredCleaner.lastName}<br/>
                Phone Number: {hiredCleaner.phoneNumber} <br/>
                Email: {hiredCleaner.email} <br/>
                Hourly Rate: {hiredCleaner.hourlyRate}$ 
                </Card.Text>
            </Col>
        )
    }

    return (
        <Card id={job.id}>
            <Card.Body>
                <Row>
                <Col>
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
                </Col>
              
                {hiredCleaner ? displayCleaner() : null}
               
               
               </Row>
            </Card.Body>
        </Card>
    )
} 

export default Job;