import React from 'react'
import jobs from '../reducers/jobs'
import Applicant from '../components/Applicant'

const ApplicantsContainer = (props) => {
    const job = props.jobs.find(job => props.match.params.jodId == job.id);
    const applicants = job.applicants.map(applicant => <Applicant key={applicant.id} applicant={applicant}/>);
    return (
        <div>
            <h4>Applicants:</h4>
            {!!job.applicants.length ? applicants : <h5>Currently, there are no applicants</h5>}
        </div>
    );
}

export default ApplicantsContainer