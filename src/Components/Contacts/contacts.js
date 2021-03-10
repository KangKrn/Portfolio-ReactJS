import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Contacts/contact.scss';
import Image from 'react-bootstrap/Image';
import li from '../../Resources/linkedin.svg';
import git from '../../Resources/GitHub-Mark/PNG/GitHub-Mark-64px.png';
import gmail from '../../Resources/gmail-logo.svg';
import fb from '../../Resources/fbLogo.png';
function Contacts(){
    return (
        <Container className="contactContainer">
           <Row className="titleRow">
                <div className="title">Profile</div>
            </Row>
           <Row className="contactsRow">
                <Container>
                    <Row>
                        <Col>
                            <Image src={git}/>
                        </Col>
                        <Col className="conText">GitHub</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={li}/>
                        </Col>
                        <Col className="conText">LinkedIn</Col>
                    </Row>
                    <Row>
                        <Col><Image src={fb}/></Col>
                        <Col className="conText">Facebook</Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={gmail   }/>
                        </Col>
                        <Col className="conText">Google</Col>  
                    </Row>  
                </Container>   
            </Row>
        </Container>
    );
}
export default Contacts;