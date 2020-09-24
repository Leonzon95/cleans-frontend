import React, {Component} from 'react';
import RegUserHomeContainer from '../containers/RegUserHomeContainer'
import { Route, Switch } from 'react-router-dom';
import AddressesContainer from '../containers/AddressesContainer'

class RegUserRoutes extends Component{
    
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/addresses" render={(routerProps) => <AddressesContainer {...routerProps} user={this.props.user} /> }/>
                    <Route extact path="/" render={(routerProps) => <RegUserHomeContainer user={this.props.user} /> } />
                </Switch>
            </div>
        )
    }

}
 export default RegUserRoutes;