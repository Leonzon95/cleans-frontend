import React from 'react';
import RegUserRoutesContainer from '../containers/RegUserRoutesContainer';
import CleanerHome from './CleanerHome';


const LoggedInHome = props => {
    if(props.user.isCleaner) {
        return <CleanerHome user={props.user} />
    } else {
        return <RegUserRoutesContainer user={props.user} />
    }
}
export default LoggedInHome;