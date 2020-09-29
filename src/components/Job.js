import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const  Job = props => {
    const { job, address, user, applyToJob, applied} = props;

    const displayButtons = () => {
        if (user.isCleaner) {
            if (applied){
                return <div></div>
            } else {
                return (
                    <Button variant="primary" onClick={() => applyToJob(user.id, job.id)} >Apply for job</Button>
                )
            }
        } else {
            return (
                <Link to={`/jobs/${job.id}/applicants`} className="bttn-link"><Button variant="info" className="signup-bttn" >See Applicants</Button></Link>
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