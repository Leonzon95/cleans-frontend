import React from 'react';
import CleanerHome from './CleanerHome';
import RegUserHome from './RegUserHome';

const LoggedInHome = props => {
    if(props.user.isCleaner) {
        return <CleanerHome user={props.user} />
    } else {
        return <RegUserHome user={props.user} />
    }
}
export default LoggedInHome;