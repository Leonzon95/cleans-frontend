import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CleanerHomeContainer from './CleanerHomeContainer';
import { fetchAllJobs, applyToJob } from '../actions/job';
import { connect } from 'react-redux';

class CleanerRoutesContainer extends Component {

    componentDidMount() {
        this.props.fetchAllJobs();
    }

    filterJobs() {
       
    }

    render() {
        const { user, jobs, isJobsLoading, applyToJob } = this.props
        // debugger
        return (
            <div>
                <h2>Welcome {user.firstName}!</h2>
                <Switch>
                    <Route exact path="/" render={routerProps => <CleanerHomeContainer {...routerProps} jobs={jobs} user={user} isLoading={isJobsLoading} applyToJob={applyToJob}/>} />
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

export default connect(mapStateToProps, { fetchAllJobs, applyToJob })(CleanerRoutesContainer);