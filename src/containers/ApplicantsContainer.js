import React from 'react'
import Applicant from '../components/Applicant'

const ApplicantsContainer = (props) => {
    const job = props.jobs.find(job => props.match.params.jodId == job.id);
    const applicants = job.applicants.map(applicant => <div><Applicant key={applicant.id} applicant={applicant}/><br/></div>);
    return (
        <div>
            <h4>Applicants:</h4>
            {!!job.applicants.length ? applicants : <h5>Currently, there are no applicants</h5>}
        </div>
    );
}

export default ApplicantsContainer