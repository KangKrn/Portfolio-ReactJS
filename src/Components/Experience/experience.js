import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './experience.scss';

function Experience(){
    return(
        <Container className="expContainer">
            <Row className="expHeader">
                Experience
            </Row>
            <Row>
                Frontend Web Development Intern
                <Col>Agmo Studio</Col>
            </Row>
            <Row>
                <Col>Description</Col>
                <Col>Agmo Studio is a software development firm offering mobile, blockchain, 
                and web solutionos within Malaysia</Col>
            </Row>
            <Row>
                <Col>Activities:</Col>
                <Col>
                    List
                </Col>
            </Row>
        </Container>
    );
}
export default Experience;