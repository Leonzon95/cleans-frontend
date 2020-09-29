import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const  Job = props => {
    const { job, address, user, applyToJob, applied, hiredCleaner} = props;

    const displayButtons = () => {
        if (user.isCleaner) {
            if (job.status === "new" && !applied) {
                return (
                    <Button variant="primary" onClick={() => applyToJob(user.id, job.id)} >Apply for job</Button>
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
            <div>
                <br/>
                <h6>You hired:</h6>
                {hiredCleaner.firstName} {hiredCleaner.lastName}<br />
                Phone Number: {hiredCleaner.phoneNumber} <br/>
                Email: {hiredCleaner.email} <br/>
                Hourly Rate: {hiredCleaner.hourlyRate}$ 
            </div>
        )
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
                {hiredCleaner ? displayCleaner() : null}
               {displayButtons()}
            </Card.Body>
        </Card>
    )
} 

export default Job;