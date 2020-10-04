import React from 'react';
import RatingStar from './RatingStar'
import { Row, Col } from 'react-bootstrap';

const Review = props => {
    const { comment, rating, id } = props.review;
    return (
        <div key={id}>
            <Row>
                <Col>
                    <h5>Comment: </h5>
                </Col>
                <Col>
                    <RatingStar rating={rating} />
                </Col>
            </Row>
            <Row>
                <Col>{comment}</Col>
            </Row>
        </div>
    )
}

export default Review;