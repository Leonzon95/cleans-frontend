import React from 'react';
import LoggedInHome from './LoggedInHome';
import HomePage from './HomePage';
import { Container } from 'react-bootstrap'

const Home = (props) => {
  
    if (!props.loggedInStatus){
      return <HomePage />;
    } else {
      return (
        <Container className="one-page-height">
          <LoggedInHome user={props.user} isCleaner={props.user.isCleaner} />
        </Container>
        )
      
    }
  };
  export default Home;