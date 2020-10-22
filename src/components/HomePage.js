import React, { useRef } from 'react';
import { Jumbotron, Button, Container, Row, Col, Card } from 'react-bootstrap';
import postJob from '../images/postJob.svg';
import hire from '../images/hire.svg';
import complete from '../images/complete.svg';
import apply from '../images/apply.svg';
import clean from '../images/clean.svg';
import completed from '../images/completed.svg';

const HomePage = (props) => {
    const howItWorksSection = useRef(null);

    const gotoHowItWorksSection = () => window.scrollTo({ 
        top: howItWorksSection.current.offsetTop - 50,
        behavior: "smooth"
    })

    return(
    <div>
        <div id="home-page-background">
            <Container >
                <Jumbotron fluid id="home-page-jumbotron">
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
                            <Button variant="primary" onClick={gotoHowItWorksSection} >Learn more</Button>
                        </p>
                    
                </Jumbotron>
            </Container>
        </div>
        <div className="gray-back" ref={howItWorksSection}>
            <br/>
            <Container >
                <Row className="justify-content-md-center">
                    <Col xs lg="3">
                        <h1>How it works</h1>
                    </Col>
                </Row>
                <br/>
                <h4 style={{textAlign: 'center'}} >For regular users</h4>
                <br/>
                
                <Row className="row-thumbnails">
                   
                    <Col>
                        <Card className="homecards" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={postJob} />
                            <Card.Body>
                                <Card.Title>Post a job</Card.Title>
                                <Card.Text>
                                Post a job with an address, location, date and time.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="homecards" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hire} />
                        <Card.Body>
                            <Card.Title>Hire someone</Card.Title>
                            <Card.Text>
                            Look through all of the people that applied for your job and choose the one that's right for you.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card className="homecards" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={complete} />
                            <Card.Body>
                                <Card.Title>Completed Job</Card.Title>
                                <Card.Text>
                                When the hired person completes the job, mark the job as completed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <h4 style={{textAlign: 'center'}} >For cleaners</h4>
                <br/>
                <Row className="row-thumbnails">
                
                    <Col>
                        <Card className="homecards" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={apply} />
                            <Card.Body>
                                <Card.Title>Apply for a job</Card.Title>
                                <Card.Text>
                                Look through all of the posted available jobs and apply to the ones that you'd like to work.
                                <br/>
                                <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="homecards" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={clean} />
                        <Card.Body>
                            <Card.Title>Clean</Card.Title>
                            <Card.Text>
                            When a user hires you, go to the location of the job, at the day and time agreed, and get the job done.
                            <br/>
                            <br/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card className="homecards" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={completed} />
                            <Card.Body>
                                <Card.Title>Completed</Card.Title>
                                <Card.Text>
                                Once completed the person that hired you will mark it completed and the job will be added to your completed jobs.
                                </Card.Text>
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