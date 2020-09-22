import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  
    state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
    };

    componentWillMount() {
      return this.props.loggedInStatus ? this.redirect() : null
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
        [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password, password_confirmation} = this.state;
        let user = {
          username: username,
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }
        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
        .then(response => {
          if (response.data.status === 'created') {
            this.props.handleLogin(response.data);
            this.redirect();
          } else {
            this.setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error));
    }

    redirect = () => {
        console.log("OK")
        this.props.history.push('/');
    }

    handleErrors = () => {
        return (
          <div>
            <ul>
            {this.state.errors.map(error =>  <li key={error}>{error}</li>)}
            </ul>
          </div>
        );
    }

    render() {
        const {username, email, password, password_confirmation} = this.state
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    {this.state.errors ? this.handleErrors() : null}
                </div>
                <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <input
                    placeholder="password confirmation"
                    type="password"
                    name="password_confirmation"
                    value={password_confirmation}
                    onChange={this.handleChange}
                />
                
                <button placeholder="submit" type="submit">
                    Sign Up
                </button>
            
                </form>
            </div>
        );
    }
}
export default SignUp;