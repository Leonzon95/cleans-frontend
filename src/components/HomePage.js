import React from 'react';
import { Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap'

const HomePage = (props) => {
    return(
    <div>
        <div id="home-page-background">
            <Container >
                <Jumbotron id="home-page-jumbotron">
                    <Row>
                    <Col xs={12} md={8}>
                        <h1 id="header-font">Cleans</h1>
                        <p>
                            Choose among many individuals and hire a person you trust, to clean your living space, office space and more!
                            <br/>
                            Or start working for yourself, apply for jobs, make your own schedule and get cleaning!
                        </p>
                        </Col>
                    </Row>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    
                </Jumbotron>
            </Container>
        </div>
        <div className="gray-back">
            <br/>
            <Container >
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <h1>How it works</h1>
                    </Col>
                </Row>
                <br/>
                <Row className="row-thumbnails">
                    <Col>
                        <Card className="homecards" style={{ width: '18rem' }}>
                            <Card.Img variant="top"  />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card className="homecards" style={{ width: '18rem' }}>
                        <Card.Img variant="top"  />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card className="homecards" style={{ width: '18rem' }}>
                            <Card.Img variant="top"  />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    </div>
    )
}

export default HomePage;