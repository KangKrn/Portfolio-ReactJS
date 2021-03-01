import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Contacts/contact.scss';
import Image from 'react-bootstrap/Image';
import li from '../../Resources/linkedin.svg';
import git from '../../Resources/GitHub-Mark/PNG/GitHub-Mark-64px.png';

function Contacts(){
    return (
        <Container className="contactContainer">
           <Row className="titleRow">
                <div className="title">Profile</div>
            </Row>
           <Row>
                <Image src={git}/>Github   
            </Row> 
            <Row>
                <Image src={li}/>LinkedIn
            </Row>
            <Row>
                Facebook
            </Row>
            <Row>
                Google
            </Row>
        </Container>
    );
}
export default Contacts;