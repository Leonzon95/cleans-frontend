import React from 'react';
import Job from '../components/Job';

const PendingJobsContainer = props => {
    const displayJobs = () => {
        if(props.user.isCleaner) {

        } else {
            return props.jobs.map(job => {
                const address = props.addresses.find(address => address.id === job.addressesId);
                return <Job job={job} address={address} hiredCleaner={job.hiredCleaner}/>
            })
        }
    }
    return (
        <div>
            {displayJobs()}
        </div>
    )
}
export default PendingJobsContainer