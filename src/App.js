import React, { Component } from 'react';
import './App.css'
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import LogIn from './components/registrations/LogIn';
import SignUp from './components/registrations/SignUp';
import NavBar from './components/Navbar'
import {sendLogIn, sendLogOut} from './actions/user';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';


class App extends Component{

  handleLogin = (data) => {
    this.props.sendLogIn(data.user);
  }

  handleLogout = () => {
    this.props.sendLogOut();
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})
    .then(response => response.json())
    .then(json => {
      if (json.data.logged_in) {
        this.handleLogin(json)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  componentDidMount() {
    this.loginStatus()
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar loggedInStatus={this.props.isLoggedIn} handleLogout={this.handleLogout} user={this.props.user} />
          
          <Switch>
            
            <Route exact path='/login' render={props => <LogIn {...props} loggedInStatus={this.props.isLoggedIn} handleLogin={this.handleLogin} />} />

            <Route exact path='/signup' render={props => <SignUp {...props} loggedInStatus={this.props.isLoggedIn} handleLogin={this.handleLogin} />} />

            <Route path='/'  render={props => <Home {...props} loggedInStatus={this.props.isLoggedIn} user={this.props.user} />} />
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.user
  };
}

export default connect(mapStateToProps, { sendLogIn, sendLogOut })(App);
