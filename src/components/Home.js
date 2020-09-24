import React from 'react';
import LoggedInHome from './LoggedInHome';
import HomePage from './HomePage';

const Home = (props) => {
  
    if (!props.loggedInStatus){
      return <HomePage />;
    } else {
      return <LoggedInHome user={props.user} />;
    }
  };
  export default Home;