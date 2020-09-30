import React from 'react'
import GitHub from '../images/GitHub.png'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div id="footer">
            <Row>
             <Col xs={6} md={4}>
                    
                    </Col>
                 <Col xs={6} md={4}>
                    Created by 
                    <br/>
                    Leonardo Briones
                    <br/>
                    <a href="https://github.com/Leonzon95/cleans-frontend" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub"/></a>
                    </Col>
                 <Col xs={6} md={4}>
                    <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener noreferrer" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer" title="Flaticon">www.flaticon.com</a></div>

                </Col>
            </Row>
        </div>
    )
}

export default Footer