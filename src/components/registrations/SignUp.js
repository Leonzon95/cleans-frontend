import React, { Component } from 'react';
import axios from 'axios';
import { Form, Col, Button, Alert, Container } from 'react-bootstrap';

class SignUp extends Component {
    state = { 
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      phone_number: '',
      password: '',
      password_confirmation: '',
      is_cleaner: false,
      errors: ''
    };

    UNSAFE_componentWillMount() {
      return this.props.loggedInStatus ? this.redirect() : null;
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        if (name === 'is_cleaner') {
          if (value === "false") {
            value = true;
            console.log("hello true")
          } else {
            value = false;
            console.log("hello false")
          }
        }
        this.setState({
        [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {first_name, last_name, username, email, password, password_confirmation, is_cleaner, phone_number} = this.state;
        let user = {
          username: username,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
          first_name: first_name,
          last_name: last_name,
          is_cleaner: is_cleaner,
          phone_number: phone_number
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
            <Alert variant="danger">
            {this.state.errors.map(error => <li>{error}</li>)}
            </Alert>
          </div>
        );
    }

    render() {
        const {username, email, password, password_confirmation, first_name, last_name, is_cleaner, phone_number} = this.state
        return (
            <Container>
                <h1>Sign Up</h1>
                {this.state.errors ? this.handleErrors() : null}
                <Form onSubmit={this.handleSubmit}>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control  placeholder="Username" name="first_name" value={first_name} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control placeholder="Last Name" name="last_name" value={last_name} onChange={this.handleChange}/>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control  placeholder="Username" name="username" value={username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange}/>
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control placeholder="Ex. +1 123-456-7899"  name="phone_number" value={phone_number} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password"  name="password" value={password} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPasswordConfirmation">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password"  name="password_confirmation" value={password_confirmation} onChange={this.handleChange} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" name="is_cleaner" value={is_cleaner} label="Check if you want to work with us" onChange={this.handleChange} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
            </Container>
        );
    }
}
export default SignUp;