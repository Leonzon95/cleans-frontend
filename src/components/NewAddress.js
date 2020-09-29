import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'

class NewAddress extends Component {
    state = {
        name: '',
        country: '',
        state: '',
        zipcode: '',
        city: '',
        street_address: '',  
        errors: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
        [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, country, state, zipcode, city, street_address } = this.state;
        const address = {name , country, state, zipcode, city, street_address};
        axios.post(`http://localhost:3001/users/${this.props.user.id}/addresses`,{address} ,{withCredentials: true})
        .then(response => {
            if(!response.data.errors) {
                this.props.addAddress(response.data.address);
                this.setState({
                    name: '',
                    country: '',
                    state: '',
                    zipcode: '',
                    city: '',
                    street_address: '',  
                    errors: ''
                })
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
          })
        .catch(error => console.log('api errors:', error));
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
        const { name, country, state, zipcode, city, street_address } = this.state;
        return (
            <div>
            <h4>New Address</h4>
            {this.state.errors ? this.handleErrors() : null}
            <Form className="padd-top" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" value={name} placeholder="Ex. Mom's house" onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                    The name will be used to reference this address later 
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicStreetAddress">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control name="street_address" value={street_address} placeholder="Ex. 1234 Main st Apt 5" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicStreetAddress">
                    <Form.Label>City</Form.Label>
                    <Form.Control name="city" value={city} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicStreetAddress">
                    <Form.Label>State</Form.Label>
                    <Form.Control name="state" value={state} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicStreetAddress">
                    <Form.Label>Country</Form.Label>
                    <Form.Control name="country" value={country} onChange={this.handleChange} />
                </Form.Group>


                <Form.Group controlId="formBasicStreetAddress">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control name="zipcode" value={zipcode} onChange={this.handleChange} />
                </Form.Group>



                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </div>
        )
    }
}

export default NewAddress