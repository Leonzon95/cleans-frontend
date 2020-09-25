import React, {Component} from 'react';
import RegUserHomeContainer from '../containers/RegUserHomeContainer'
import { Route, Switch } from 'react-router-dom';
import AddressesContainer from './AddressesContainer'
import { connect } from 'react-redux';
import { addAddress, fetchAddresses } from '../actions/address'
import { addJob } from '../actions/job'

class RegUserRoutesContainer extends Component{
    componentDidMount() {
        this.props.fetchAddresses(this.props.user.id);
    }

    render() {
        const {user, addresses, jobs, addAddress, addJob, isAddressesLoading} = this.props;
        return (
            <div>
                <Switch>
                    <Route path="/addresses" render={(routerProps) => <AddressesContainer {...routerProps} user={user}  addresses={addresses} addAddress={addAddress} isloading={isAddressesLoading} /> } />
                    <Route extact path="/" render={(routerProps) => <RegUserHomeContainer {...routerProps} user={user}  addresses={addresses} jobs={jobs} addJob={addJob} /> } />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        jobs: state.jobs,
        addresses: state.addresses.data,
        isAddressesLoading: state.addresses.loading
    }
}
export default connect(mapStateToProps, { addAddress, addJob, fetchAddresses })(RegUserRoutesContainer);