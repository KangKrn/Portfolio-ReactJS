import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Contacts/contact.scss';
import Image from 'react-bootstrap/Image';
import li from '../../Resources/linkedin.svg';
import git from '../../Resources/GitHub-Mark/PNG/GitHub-Mark-64px.png';
import gmail from '../../Resources/gmail-logo.svg';
import fb from '../../Resources/fbLogo.png';

class Contacts extends Component{
    constructor(props){
        super(props);
        // this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleGitHover = this.handleGitHover.bind(this);
        this.handleLinkedHover = this.handleLinkedHover.bind(this);
        this.handleFacebookHover = this.handleFacebookHover.bind(this);
        this.handleGmailHover = this.handleGmailHover.bind(this);
        this.state = {
            gitIsHovering: false,
            linkedIsHovering: false,
            fbIsHovering: false,
            gmailIsHovering: false,
        };
    }

    // handleMouseHover(value){
    //     if(value == "git"){
    //         this.setState(this.toggleGit);
    //         return;
    //     }else if(value == "linkedIn"){
    //         this.setState(this.toggleLinkedIn);
    //         return;
    //     }else if(value == "facebook"){
    //         this.setState(this.toggleFacebook);
    //         return;
    //     }else if(value == "gmail"){
    //         this.setState(this.toggleGmail);
    //     }
    //     // this.setState(this.toggleHoverState);
    // }
    handleGitHover(){
        this.setState(this.toggleGit);
    }
    handleLinkedHover(){
        this.setState(this.toggleLinkedIn);
    }
    handleFacebookHover(){
        this.setState(this.toggleFacebook);
    }
    handleGmailHover(){
        this.setState(this.toggleGmail);
    }
    toggleGit(state){
        return{
            gitIsHovering: !state.gitIsHovering,
        }
    }
    toggleLinkedIn(state){
        return{
            linkedIsHovering: !state.linkedIsHovering,
        }
    }
    toggleFacebook(state){
        return{
            fbIsHovering: !state.fbIsHovering,
        }
    }
    toggleGmail(state){
        return{
            gmailIsHovering: !state.gmailIsHovering,
        }
    }

    render(){
        return(
        <Container className="contactContainer">
           <Row className="titleRow">
                <div className="title">Profile</div>
            </Row>
           <Row className="contactsRow">
                <Container>
                    <Row>
                        <Col>
                            <Image src={git} onMouseEnter={this.handleGitHover} onMouseLeave={this.handleGitHover}/>
                        </Col>
                        <Col onMouseEnter={this.handleGitHover} onMouseLeave={this.handleGitHover}>
                            {
                                this.state.gitIsHovering ? <div className="conText">https://github.com/KangKrn</div> : <div className="conText">GitHub</div>
                            }
                        </Col>
                    </Row>
                    <Row  >
                        <Col >
                            <Image src={li} onMouseEnter={this.handleLinkedHover} onMouseLeave={this.handleLinkedHover}/>
                        </Col>
                        <Col onMouseEnter={this.handleLinkedHover} onMouseLeave={this.handleLinkedHover}>
                            {
                                this.state.linkedIsHovering ? <div className="conText">www.linkedin.com/in/kang-wie-shen-218ba9190</div> : <div className="conText">LinkedIn</div>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={fb} onMouseEnter={this.handleFacebookHover} onMouseLeave = {this.handleFacebookHover}/>
                        </Col>
                        <Col onMouseEnter={this.handleFacebookHover} onMouseLeave = {this.handleFacebookHover}>
                            {
                                this.state.fbIsHovering ? <div className="conText">Kang Wie Shen</div> : <div className="conText">Facebook</div>
                            }
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Image src={gmail} onMouseEnter={this.handleGmailHover} onMouseLeave = {this.handleGmailHover}/>
                        </Col>
                        <Col  onMouseEnter={this.handleGmailHover} onMouseLeave = {this.handleGmailHover}>
                            {
                                this.state.gmailIsHovering ? <div>krnsc.kws@gmail.com</div> : <div>Gmail</div>
                            }
                        </Col>  
                    </Row>  
                </Container>   
            </Row>
        </Container>
        )
    }
}
export default Contacts;