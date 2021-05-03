import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './education.scss';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Paper from '@material-ui/core/Paper';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '@material-ui/core/Typography'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Education(){
    return(
        <Container fluid className="educationContainer">
            <Row>
                <Col sm={3} className="title">Education</Col>
                <Col sm={9} className="detailCont">
                    <Timeline align="alternate">

                        <TimelineItem>
                            <TimelineOppositeContent>
                                Feb 2018 - January 2021
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FontAwesomeIcon icon={faCircle}/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={6}>
                                    <Typography variant="h5">University of Wollongong</Typography>
                                    <Typography variant="subtitle1">Bachelor of Information Technology</Typography>
                                    <Typography variant="subtitle2">Majoring in e-Business & Network Design and Management</Typography>
                                    <Typography variant="body1" className="wam">
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        WAM (Weighted Average Marks): 68.35
                                    </Typography>
                                    <Typography variant="body1">
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        CGPA (Cumulative Grade Point Average): 3.04
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent>
                                February 2016 - February 2018
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FontAwesomeIcon icon={faCircle}/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={6}>
                                    <Typography variant="h5">INTI International College Subang Jaya</Typography>
                                    <Typography variant="subtitle1">Diploma in Business</Typography>
                                    <Typography variant="body1">
                                        <FontAwesomeIcon icon={faCaretRight} />

                                        CGPA (Cumulative Grade Point Average): 2.82
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent>
                                August 2014 - February 2016
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FontAwesomeIcon icon={faCircle}/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={6}>
                                    <Typography variant="h5">INTI International College Subang Jaya</Typography>
                                    <Typography variant="subtitle1">Certificate in Business Studies</Typography>
                                    <Typography variant="body1">
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        CGPA (Cumulative Grade Point Average): 3.26
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </Col>
            </Row>
        </Container>
    );
}
export default Education;