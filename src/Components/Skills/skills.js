import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './skills.scss';
import Paper from '@material-ui/core/Paper';
import angular from '../../Resources/angularLogo.png';
import js from '../../Resources/javascriptLogo.png';
import css from '../../Resources/cssLogo.png';
import xd from '../../Resources/adobexdLogo.png';
import scss from '../../Resources/scssLogo.png';
import vscode from '../../Resources/vscodeLogo.png';
import sublime from '../../Resources/sublimeLogo.png';
import react from '../../Resources/reactLogo.png';
import njs from '../../Resources/nodejsLogo.png';

function Skills(){
    return(
        <Container className="skillsContainer">
            <Row className="titleRow">
                <div className="title">Profile</div>
            </Row>
            <Row>
                <Container>
                    <Row>Languages</Row>
                    <Row>
                        <Paper>JavaScript</Paper>
                        <Paper>HTML5</Paper>
                        <Paper>CSS</Paper>
                        <Paper>Python</Paper>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>Frameworks</Row>
                    <Row>
                        <Paper>
                            <Row><Image src={angular}/></Row>
                            <Row>Angular</Row>
                        </Paper>
                        <Paper>
                            <Row>
                                Image
                            </Row>
                            <Row>
                                React
                            </Row>
                        </Paper>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        Tools
                    </Row>
                    <Row>
                        VSCode VisualStudio Sublime Word Visio AdobeXD NodeJS
                    </Row>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row>
                        Pre-processors
                    </Row>
                    <Row>
                        SASS
                    </Row>
                </Container>
            </Row>
            
        </Container>
    );
}
export default Skills;