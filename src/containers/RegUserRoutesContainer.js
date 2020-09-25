import React, {Component} from 'react';
import RegUserHomeContainer from '../containers/RegUserHomeContainer'
import { Route, Switch } from 'react-router-dom';
import AddressesContainer from './AddressesContainer'
import { connect } from 'react-redux';
import { addAddress } from '../actions/address'
import { addJob } from '../actions/job'

class RegUserRoutesContainer extends Component{

    render() {
        const {user, addresses, jobs, addAddress, addJob} = this.props;
        return (
            <div>
                <Switch>
                    <Route path="/addresses" render={(routerProps) => <AddressesContainer {...routerProps} user={user}  addresses={addresses} addAddress={addAddress} /> } />
                    <Route extact path="/" render={(routerProps) => <RegUserHomeContainer {...routerProps} user={user}  addresses={addresses} jobs={jobs} addJob={addJob} /> } />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        jobs: state.jobs,
        addresses: state.addresses
    }
}
export default connect(mapStateToProps, { addAddress, addJob })(RegUserRoutesContainer);