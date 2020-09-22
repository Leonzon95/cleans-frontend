import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {

    if (!props.loggedInStatus){
      return (
        <div>
          <Link to='/login'>Log In</Link>
          <br></br>
          <Link to='/signup'>Sign Up</Link>
        </div>
      );
    } else {
      return 
    }
  };
  export default Home;