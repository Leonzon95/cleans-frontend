import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

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

    handleSubmit() {
        
    }

    render() {
        const { name, country, state, zipcode, city, street_address } = this.state;
        return (
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
        )
    }
}

export default NewAddress