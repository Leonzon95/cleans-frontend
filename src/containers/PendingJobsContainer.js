import React from 'react';
import Job from '../components/Job';

const PendingJobsContainer = props => {
    const displayJobs = () => {
        if(props.user.isCleaner) {

        } else {
            return props.jobs.map(job => {
                const address = props.addresses.find(address => address.id == job.addressId);
                return (
                    <div key={job.id}>
                    <Job job={job} address={address} hiredCleaner={job.hiredCleaner} user={props.user}/>
                    <br/>
                    </div>
                )
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