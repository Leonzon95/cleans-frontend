import React from 'react'
import Applicant from '../components/Applicant'

const ApplicantsContainer = (props) => {
    const job = props.jobs.find(job => props.match.params.jodId == job.id);
    const applicants = job.applicants.map(applicant => <div  key={applicant.id}><Applicant applicant={applicant} userId={props.user.id} jobId={job.id} hire={props.hire}/><br/></div>);
    return (
        <div>
            <h4>Applicants:</h4>
            {!!job.applicants.length ? applicants : <h5>Currently, there are no applicants</h5>}
        </div>
    );
}

export default ApplicantsContainer