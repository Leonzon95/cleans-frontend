import React, { Component } from 'react';
import './App.css'
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './components/Home';
import LogIn from './components/registrations/LogIn';
import SignUp from './components/registrations/SignUp';
import NavBar from './components/Navbar'
import {sendLogIn} from './actions/user';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


class App extends Component{

  handleLogin = (data) => {
    this.props.sendLogIn(data);
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    });
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
        <BrowserRouter>
          <NavBar loggedInStatus={this.props.isLoggedIn} />
          <Container>
          <Switch>
            <Route exact path='/'  render={props => <Home {...props} loggedInStatus={this.props.isLoggedIn} user={this.props.user} />} />

            <Route exact path='/login' render={props => <LogIn {...props} loggedInStatus={this.props.isLoggedIn} handleLogin={this.handleLogin} />} />

            <Route exact path='/signup' render={props => <SignUp {...props} loggedInStatus={this.props.isLoggedIn} handleLogin={this.handleLogin} />} />
          </Switch>
          </Container>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.user.user
  };
}

export default connect(mapStateToProps, { sendLogIn })(App);
