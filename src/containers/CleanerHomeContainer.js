import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import Job from '../components/Job'

class CleanerHomeContainer extends Component {
    displayJobs() {
        return this.props.jobs.map(job => {
            return(
                <div key={job.id}>
                    {<Job job={job} address={job.address} user={this.props.user} />}
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
                {this.props.isLoading ?  this.displayLoading() : this.displayJobs()}
            </div>
        )
    }
}

export default CleanerHomeContainer;