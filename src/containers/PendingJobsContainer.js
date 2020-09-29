import React from 'react';
import Job from '../components/Job';

const PendingJobsContainer = props => {
    return (
        <div>
            {props.jobs.map(job => <Job job={job}/> )}
        </div>
    )
}
export default PendingJobsContainer