import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/registrations/LogIn'
import SignUp from './components/registrations/SignUp'

class App extends Component{
  state = {
    isLoggedIn: false,
    user: {}
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    });
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
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
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
          <Switch>
            <Route exact path='/' render={props => <Home {...props} loggedInStatus={this.state.isLoggedIn} />} />
            <Route exact path='/login' render={props => <LogIn {...props} loggedInStatus={this.state.isLoggedIn} handleLogin={this.handleLogin} />} />
            <Route exact path='/signup' render={props => <SignUp {...props} loggedInStatus={this.state.isLoggedIn} handleLogin={this.handleLogin} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
