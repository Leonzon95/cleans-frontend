import React, {Component} from 'react';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios';

class NewJob extends Component {
    state ={
        description: '',
        estimated_time: '',
        date: '',
        time: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
        [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { description, estimated_time, date,time } = this.state
        console.log(this.state)
        const job ={
            description,
            estimated_time,
            date: `${date} ${time}`
        };
        axios.post(`http://localhost:3001/users/${this.props.user.id}/jobs`,{job} ,{withCredentials: true})
        .then(response => {
            this.props.addJob(response.data);
          })
        .catch(error => console.log('api errors:', error));
        this.setState({
            description: '',
            estimated_time: '',
            date: '',
            time: ''
        });
    }
    

    render() {
        const { description, estimated_time, date,time } = this.state;
        return (
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
                <Form.Group controlId="validationCustom04">
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
        )
    }
}

export default NewJob;