import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './skills.scss';
import Paper from '@material-ui/core/Paper';
import angular from '../../Resources/angularLogo.png';
import js from '../../Resources/javascriptLogo.png';
import css from '../../Resources/icon css 3.png';
import xd from '../../Resources/adobexdLogo.png';
import sass from '../../Resources/sassLogo.png';
import vscode from '../../Resources/vscodeLogo.png';
import sublime from '../../Resources/sublimeLogo.png';
import react from '../../Resources/reactLogo.png';
// import njs from '../../Resources/nodejsLogo.png';
import html from '../../Resources/htmlLogo.png';
import vs from '../../Resources/vsLogo.png';
import java from '../../Resources/javaLogo.png';

function Skills(){
    return(
        <Container fluid className="skillsContainer">
            <Row className="titleRow">
                <div className="title">Skills</div>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Container>
                            <Row className="section">Languages</Row>
                            <Row>
                                <Paper>
                                    <div><Image src={js}/></div>
                                    <div>JavaScript</div>
                                </Paper>
                                <Paper>
                                    <div><Image src={html}/></div>
                                    <div>HTML5</div>
                                </Paper>
                                <Paper>
                                    <div><Image src={css}/></div>
                                    <div>CSS</div>
                                </Paper>
                                <Paper>
                                    <div><Image src={java}/></div>
                                    <div>JAVA</div>
                                </Paper>
                                {/* <Paper>Python</Paper> */}
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <Row className="section">Frameworks</Row>
                            <Row>
                                <Paper>
                                    <div><Image src={angular}/></div>
                                    <div>Angular</div>
                                </Paper>
                                <Paper>
                                    <div><Image src={react}/></div>
                                    <div>React JS</div>
                                </Paper>
                            </Row>
                        </Container>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Container>
                            <Row className="section">Tools</Row>
                            <Row>
                                <Paper>
                                    <div><Image src={vscode}/></div><div>VS Code</div>
                                </Paper>
                                <Paper>
                                    <div><Image src={vs}/></div><div>Visual Studio</div>
                                </Paper>
                                <Paper>
                                    <div><Image src={sublime}/></div><div>Sublime</div>
                                </Paper>
                                <Paper>
                                    <div><Image src={xd}/></div><div>Adobe XD</div>
                                </Paper>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <Row className="section">Preprocessors</Row>
                            <Row>
                                <Paper>
                                    <div><Image src={sass}/></div><div>SASS</div>
                                </Paper>
                            </Row>
                        </Container>
                    </Row>
                </Col>
                
            </Row>
            
        </Container>
    );
}
export default Skills;