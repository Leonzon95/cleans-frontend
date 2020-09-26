import React, {Component} from 'react';
import RegUserHomeContainer from '../containers/RegUserHomeContainer'
import { Route, Switch } from 'react-router-dom';
import AddressesContainer from './AddressesContainer'
import { connect } from 'react-redux';
import { addAddress, fetchAddresses } from '../actions/address'
import { addJob, fetchJobs } from '../actions/job'

class RegUserRoutesContainer extends Component{
    componentDidMount() {
        this.props.fetchAddresses(this.props.user.id);
        this.props.fetchJobs(this.props.user.id);
    }

    render() {
        const {user, addresses, jobs, addAddress, addJob, isAddressesLoading, isJobsLoading} = this.props;
        return (
            <div>
                <h2>Welcome {user.firstName}!</h2>
                <Switch>
                    
                    <Route path="/addresses" render={(routerProps) => <AddressesContainer {...routerProps} user={user}  addresses={addresses} addAddress={addAddress} isLoading={isJobsLoading || isAddressesLoading} /> } />
                    <Route extact path="/" render={(routerProps) => <RegUserHomeContainer {...routerProps} user={user}  addresses={addresses} jobs={jobs} addJob={addJob} isLoading={isJobsLoading || isAddressesLoading} /> } />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        jobs: state.jobs.data,
        addresses: state.addresses.data,
        isAddressesLoading: state.addresses.loading,
        isJobsLoading: state.jobs.loading
    }
}
export default connect(mapStateToProps, { addAddress, addJob, fetchAddresses, fetchJobs })(RegUserRoutesContainer);