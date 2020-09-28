import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CleanerHomeContainer from './CleanerHomeContainer';
import { fetchAllJobs } from '../actions/job';
import { connect } from 'react-redux';

class CleanerRoutesContainer extends Component {

    componentDidMount() {
        this.props.fetchAllJobs();
    }

    render() {
        const { user, jobs, isJobsLoading } = this.props
        return (
            <div>
                <h2>Welcome {user.firstName}!</h2>
                <Switch>
                    <Route exact path="/" render={routerProps => <CleanerHomeContainer {...routerProps} jobs={jobs} user={user} isLoading={isJobsLoading}/>} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs.data,
        isJobsLoading: state.jobs.loading
    }
}

export default connect(mapStateToProps, { fetchAllJobs })(CleanerRoutesContainer);