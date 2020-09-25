import React, {Component} from 'react';
import { Form, Button, Alert} from 'react-bootstrap';
import axios from 'axios';

class NewJob extends Component {
    state ={
        description: '',
        estimated_time: '',
        date: '',
        time: '',
        address_id: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
        [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { description, estimated_time, date, time, address_id } = this.state
        console.log(this.state)
        const job ={
            description,
            estimated_time,
            date: `${date} ${time}`,
            address_id
        };
        axios.post(`http://localhost:3001/users/${this.props.user.id}/jobs`,{job} ,{withCredentials: true})
        .then(response => {
            if(!response.data.errors) {
                this.props.addJob(response.data.job);
            } else {
                this.setState({
                    errors: response.data.errors
                })
            }
          })
        .catch(error => console.log('api errors:', error));
        this.setState({
            description: '',
            estimated_time: '',
            date: '',
            time: '',
            address_id: ''
        });
    }
    
    addressSelect() {
        return this.props.addresses.map(address => {
            return (
                <option value={address.id} key={address.id}>{address.name}</option>
            )
        })
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
        const { description, estimated_time, date,time } = this.state;
        return (
            <div>
            {this.state.errors ? this.handleErrors() : null}
            <Form className="border-form" onSubmit={this.handleSubmit}>
                <h4>New Job</h4>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={2} onChange={this.handleChange} value={description} name="description" />
                </Form.Group>

                <Form.Group controlId="validationCustom04">
                    <Form.Label>Estimated work time</Form.Label>
                    <Form.Control type="text" placeholder="Ex. 3hrs" required onChange={this.handleChange} value={estimated_time} name="estimated_time" />
                </Form.Group>

                <Form.Group controlId="validationCustom04">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Ex. 3hrs" required onChange={this.handleChange} value={date} name="date" />
                </Form.Group>
                <Form.Group controlId="validationCustom04">
                    <Form.Control type="time" placeholder="Ex. 3hrs" required onChange={this.handleChange} value={time} name="time" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select Address</Form.Label>
                    <Form.Control name="address_id" as="select" onChange={this.handleChange} >
                        <option>Select Address</option>
                        {this.addressSelect()}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="validationCustom04">
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
            </div>
        )
    }
}

export default NewJob;