import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './profile.scss';

function Profile() {
    return(
        <Container className="profileContainer">
            <Row>
                Profile
            </Row>
            <Row>
                Image
            </Row>
            <Row>
                <Col className="colTitle">Name</Col>
                <Col className="colDesc">Kang Wie Shen</Col>
            </Row>
            <Row>
                <Col className="colTitle">Birthday</Col>
                <Col  className="colDesc">19th November 1996</Col>
            </Row>
            <Row>
                <Col className="colTitle">Nationality</Col>
                <Col  className="colDesc">Indonesian</Col>
            </Row><Row>
                <Col className="colTitle">Titles</Col>
                <Col  className="colDesc">Fresh Graduate</Col>
            </Row>
            <Row>
                <Col className="colTitle">Locations</Col>
                <Col  className="colDesc">Batam, Riau Islands, Indonesia</Col>
            </Row>
            <Row>
                <Col className="colTitle">Description</Col>
                <Col  className="colDesc">A fresh grad looking for work sadcat</Col>
            </Row>
        </Container>
    );
    
}
export default Profile;