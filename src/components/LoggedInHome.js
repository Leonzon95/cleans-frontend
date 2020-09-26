import React from 'react';
import RegUserRoutesContainer from '../containers/RegUserRoutesContainer';
import CleanerRoutesContainer from '../containers/CleanerRoutesContainer';


const LoggedInHome = props => {
    if(props.isCleaner) {
        return <CleanerRoutesContainer user={props.user} />
    } else {
        return <RegUserRoutesContainer user={props.user} />
    }
}
export default LoggedInHome;