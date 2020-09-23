import React,  { Component } from 'react';
import axios from 'axios'
import { Form, Col, Button, Alert, Row } from 'react-bootstrap';

class LogIn extends Component {
  
    state = { 
      username: '',
      password: '',
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
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = this.state
        let user = {
          username: username,
          password: password
        }
        
        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
        .then(response => {
          if (response.data.logged_in) {
            this.props.handleLogin(response.data)
            this.redirect()
          } else {
            this.setState({
              errors: response.data.errors
            })
          }
        })
        .catch(error => console.log('api errors:', error))
    }

    redirect = () => {
        this.props.history.push('/')
    }

    handleErrors = () => {
        return (
          <div>
            <Alert variant="danger">
              {this.state.errors[0]}
            </Alert>
          </div>
        )
    }

    render() {
        const {username, password} = this.state

        return (
            <div>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <h1>Log In</h1>
                    {this.state.errors ? this.handleErrors() : null}
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  placeholder="Enter username" name="username" value={username} onChange={this.handleChange} />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
                      </Form.Group>
            
                      <Button variant="primary" type="submit">
                        Log In
                      </Button>
                
                    </Form>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default LogIn;