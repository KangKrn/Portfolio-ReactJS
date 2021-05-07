import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Table from 'react-bootstrap/Table';
import './experience.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

const icon = <FontAwesomeIcon icon={faAngleDoubleRight} />
function Experience(){
    return(
        <Container fluid className="expContainer">
            <Row className="expHeader">
                Experience
            </Row>
            <Row>
                <Col sm={3}>Agmo Studio</Col>
                <Col sm={9}>Frontend Web Developer | Internship</Col>
            </Row>
            <Row className="date">
                Dec 2019 - Feb 2020
            </Row>
            <Row className="titles">
                Angular Framework | Bootstrap | Material-UI | Typescript
            </Row>
            <Row>
                <ul>
                    <li><FontAwesomeIcon icon={faAngleDoubleRight}/>Learning and developing with Angular Framework</li>
                    <li><FontAwesomeIcon icon={faAngleDoubleRight}/>Developing with Design and Backend Department</li>
                    <li><FontAwesomeIcon icon={faAngleDoubleRight}/>Working in scrum environment</li>
                </ul>
            </Row>
        </Container>
    );
}
export default Experience;