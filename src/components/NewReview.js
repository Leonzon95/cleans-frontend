import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

class NewReview extends Component {
    state = {
        comment: '',
        rating: null,
        displayForm: false,
        hover: null
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
        [name]: value
        });
    };

    displayStarInput() {
        const { rating, hover } = this.state;
        return [...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <label key={ratingValue}>
                    <input type="radio" name="rating" value={ratingValue} onClick={this.handleChange} />
                    <FaStar size={25} 
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        className="rating-star-form"
                        onMouseEnter={() =>  this.setState({hover: ratingValue})} 
                        onMouseLeave={() => this.setState({hover: null})}  
                    />
                </label>
            )
        })
    }

    handleDisplayFormCLick = () => {
        const {displayForm} = this.state
        this.setState({displayForm: !displayForm})
    }

    displayForm() {
        return (
            <Form>
                <br/>
                <h6>Write a review</h6>
                {this.displayStarInput()}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review:</Form.Label>
                    <Form.Control as="textarea" rows="3" name="comment" value={this.state.comment} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="validationCustom04">
                    <Button type="submit" className="signup-bttn">Submit</Button>
                </Form.Group>
            </Form>
        )
    }

    render() {
        const { displayForm } = this.state;
       
        return (
            <div>
                <Button variant="success" className="signup-bttn" onClick={this.handleDisplayFormCLick}>{displayForm ? "Close" : "Mark as Completed"}</Button>
                {displayForm ? this.displayForm() : null}
            </div>
        )
    
    }
}

export default NewReview;
