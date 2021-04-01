import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import './sidemenu.scss';

function Sidemenu() {
    
    return(
        <Container className="sidemenuContainer">
            <Row className="nameLogo">
                <Link to="/"><div className="leName">Kang Wie Shen</div></Link>
            </Row>
            <Row className="sideLink">
                <Link to="/profile">Profile</Link>
            </Row>
            <Row className="sideLink">
                <Link to="/experience">Experience</Link>
            </Row>
            <Row className="sideLink">
                <Link to="/education">Education</Link>
            </Row>
            <Row className="sideLink">
                <Link to="/skills">Skills</Link>
            </Row>
            <Row className="sideLink last">
                <Link to="/contacts">Contacts</Link>
            </Row>
        </Container>
    );
}
export default Sidemenu;