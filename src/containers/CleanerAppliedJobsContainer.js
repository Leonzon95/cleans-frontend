import React from 'react';
import Job from '../components/Job'

const CleanerAppliedJobsContainer = props => {
    const {appliedJobs, user} = props;
    const displayJobs = () => {
        return appliedJobs.map(job => {
            return(
                <div key={job.id}>
                    {<Job job={job} address={job.address} applied={true} user={user}/>}
                    <br></br>
                </div>
            )
        })
    }

    return (
        <div>
            {displayJobs()}
        </div>
    )
}

export default CleanerAppliedJobsContainer