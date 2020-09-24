import React from 'react';
import CleanerHome from './CleanerHome';
import RegUserRoutes from './RegUserRoutes';

const LoggedInHome = props => {
    if(props.user.isCleaner) {
        return <CleanerHome user={props.user} />
    } else {
        return <RegUserRoutes user={props.user} />
    }
}
export default LoggedInHome;