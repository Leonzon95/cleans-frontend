import React, {Component} from 'react';
import RegUserHomeContainer from '../containers/RegUserHomeContainer'
import { Route, Switch } from 'react-router-dom';
import AddressesContainer from '../containers/AddressesContainer'

const RegUserRoutes = props => {
    return (
        <div>
        <Switch>
            <Route extact path="/addresses" render={(routerProps) => <AddressesContainer {...props} user={props.user} /> }/>
            <Route extact path="/" render={(routerProps) => <RegUserHomeContainer user={props.user} /> } />
        </Switch>
        </div>
        )

}
 export default RegUserRoutes;