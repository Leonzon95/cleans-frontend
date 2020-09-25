import React, {Component} from 'react';
import RegUserHomeContainer from '../containers/RegUserHomeContainer'
import { Route, Switch } from 'react-router-dom';
import AddressesContainer from './AddressesContainer'
import { connect } from 'react-redux';

class RegUserRoutesContainer extends Component{

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/addresses" render={(routerProps) => <AddressesContainer {...routerProps} user={this.props.user} /> }/>
                    <Route extact path="/" render={(routerProps) => <RegUserHomeContainer {...routerProps} user={this.props.user} /> } />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        
    }
}
export default connect(mapStateToProps)(RegUserRoutesContainer);