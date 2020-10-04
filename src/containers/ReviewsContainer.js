import React, { Component } from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import axios from 'axios';

class ReviewsContainer extends Component {
    state = {
        isLoading: false,
        reviews: [],
        isCollapesed: false,
        fetchTime: 1
    }

    handleClick = () => {
        const { isCollapesed } = this.state;
        if (isCollapesed) {
            this.setState({isCollapesed: false});
        } else {
            this.setState({isLoading: true});
            this.fetchReviews();
        }
    }

    fetchReviews() {
        axios.get(`http://localhost:3001/users/${this.props.applicantId}/reviews`, {params: {fetch_time: this.state.fetchTime},withCredentials: true})
        .then(response => {
            const reviews = this.state.reviews
            this.setState({reviews: [...reviews, ...response.data.reviews]})
        })
    }

    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={this.handleClick} >
                        Click me!
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default ReviewsContainer;