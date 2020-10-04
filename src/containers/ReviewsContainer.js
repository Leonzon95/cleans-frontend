import React, { Component } from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';

class ReviewsContainer extends Component {
    state = {
        
    }

    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={() => console.log('hello')} >
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