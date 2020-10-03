import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

class NewReview extends Component {
    state = {
        comment: '',
        rating: null,
        displayForm: false
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
        [name]: value
        });
    };

    displayStarInput() {
        return [...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={this.handleChange} />
                    <FaStar size={50} className="rating-star-form" />
                </label>
            )
        })
    }

    handleDisplayFormCLick() {
        this.setState(prevState => {displayForm: !prevState})
    }

    displayForm() {
        return (
            <Form>
                {this.displayStarInput()}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows="3" name="comment" value={comment} onChange={this.handleChange} />
                </Form.Group>
            </Form>
        )
    }

    render() {
        const { comment, displayForm } = this.state;
       
        return (
            <div>
                <Button variant="success" className="signup-bttn" onClick={this.handleDisplayFormCLick}>{displayForm ? "Close" : "Mark as Completed"}</Button>
                {displayForm ? this.displayForm() : null}
            </div>
        )
    
    }
}

export default NewReview;
