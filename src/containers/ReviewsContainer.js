import React, { Component } from 'react';
import { Card, Accordion, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Review from '../components/Review';

class ReviewsContainer extends Component {
    state = {
        isLoading: false,
        reviews: [],
        isCollapesed: false,
        fetchTime: 1,
        noMoreReviews: false,
    }

    handleClick = () => {
        const { isCollapesed, reviews } = this.state;
        if (isCollapesed) {
            this.setState({isCollapesed: false});
        } else {
            this.setState({isCollapesed: true});
            if (!reviews.length) {
                
                this.fetchReviews();
            }
        }
    }

    fetchReviews = () => {
        this.setState({isLoading: true})
        axios.get(`http://localhost:3001/users/${this.props.applicantId}/reviews`, {params: {fetch_time: this.state.fetchTime},withCredentials: true})
        .then(response => {
            if (!response.data.error) {
                const {reviews, fetchTime} = this.state;
                this.setState({reviews: [...reviews, ...response.data.reviews], fetchTime: fetchTime + 1, isLoading: false});
            } else {
                this.setState({noMoreReviews: true, isLoading: false})
            }
        });
    }

    displayReviews = () => {
        const reviews = this.state.reviews;
        return reviews.map((review, i) => { 
            return (
                <div key={review.id}>
                    <Review review={review} />
                    <hr/>
                </div>
            )
        })
    }

    displayLoading() {
        const { isLoading, noMoreReviews } = this.state;
        if (isLoading) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        } else {
            if (!noMoreReviews) {
                return (
                    <Button variant="link" onClick={this.fetchReviews}>Load more..</Button>
                )
            } else {
                return <div>There are no more reviews</div>
            }
        }
    }

    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={this.handleClick} >
                        {this.state.isCollapesed ? "Hide" : "See Reviews"}
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        {this.displayReviews()}
                        {this.displayLoading()}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

export default ReviewsContainer;