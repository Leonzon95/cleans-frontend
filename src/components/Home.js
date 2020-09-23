import React from 'react';
import {Link} from 'react-router-dom';
import LoggedInHome from './LoggedInHome'

const Home = (props) => {
  
    if (!props.loggedInStatus){
      return (
        <div>
          
        </div>
      );
    } else {
      return <LoggedInHome user={props.user} />
    }
  };
  export default Home;