import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './profile.scss';
import Me from '../../Resources/croppedProfile.jpg'

function Profile() {
    return(
        <Container className="profileContainer" fluid>
            <Row className="titleRow">
                <div className="title">Profile</div>
                <Image src={Me} roundedCircle/>
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
                <Col  className="colDesc">
                    <div>Fresh Graduate</div>
                    <div>Aspiring Frontend Web Developer</div>
                </Col>
            </Row>
            <Row>
                <Col className="colTitle">Locations</Col>
                <Col  className="colDesc">Batam, Riau Islands, Indonesia</Col>
            </Row>
            <Row>
                <Col className="colTitle">Description</Col>
                <Col  className="colDesc">A fresh grad looking for work sadcat</Col>
            </Row>
            <Row className="empty">
                {/* Fill Empty Space */}
            </Row>
        </Container>
    );
    
}
export default Profile;