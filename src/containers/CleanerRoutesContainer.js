import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CleanerHomeContainer from './CleanerHomeContainer';
import CleanerAppliedJobsContainer from './CleanerAppliedJobsContainer'
import { fetchAllJobs, applyToJob } from '../actions/job';
import { updateHourlyRate } from '../actions/user'
import { connect } from 'react-redux';
import JobsContainer from './JobsContainer'

class CleanerRoutesContainer extends Component {

    componentDidMount() {
        this.props.fetchAllJobs();
    }

    
    render() {
        const { user, jobs, isJobsLoading, applyToJob, appliedJobs, pendingJobs, completedJobs, updateHourlyRate } = this.props
        return (
            <div>
                <h2>Welcome {user.firstName}!</h2> 
                
                <Switch>
                    <Route exact path="/jobs/pending" render={routerProps => <JobsContainer {...routerProps} user={user} jobs={pendingJobs} /> } />

                    <Route exact path="/applied-jobs" render={routerProps => <CleanerAppliedJobsContainer {...routerProps} user={user} isLoading={isJobsLoading} appliedJobs={appliedJobs} /> } />

                    <Route exact path="/" render={routerProps => <CleanerHomeContainer {...routerProps} jobs={jobs} user={user} isLoading={isJobsLoading} applyToJob={applyToJob} updateHourlyRate={updateHourlyRate} />} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const user = state.user.user;
    const jobs = [];
    const appliedJobs = [];
    const pendingJobs = [];
    const completedJobs = [];
    for (const job of state.jobs.data) {
        if (job.hiredCleanerId === user.id) {
            if (job.status === "pending"){
                pendingJobs.push(job);
                continue;
            } else {
                completedJobs.push(job);
                continue;
            }
        } else if (job.status === "new"){
            let isAnApplicant = false;
            for (const applicant of job.applicants) {
                if (applicant.id === user.id) {
                    appliedJobs.push(job)
                    isAnApplicant = true;
                    break;
                }
            }
            if(!isAnApplicant) jobs.push(job);
        }
    }
    return {
        jobs: jobs,
        appliedJobs: appliedJobs,
        pendingJobs: pendingJobs,
        completedJobs: completedJobs,
        isJobsLoading: state.jobs.loading
    }
}

export default connect(mapStateToProps, { fetchAllJobs, applyToJob, updateHourlyRate })(CleanerRoutesContainer);