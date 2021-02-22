import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Sidemenu from './Components/Sidemenu/sidemenu';
import Profile from '../src/Components/Profile/profile';
import Experience from '../src/Components/Experience/experience';
import Education from '../src/Components/Education/education';
import Skills from '../src/Components/Skills/skills';
import Contacts from '../src/Components/Contacts/contacts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col className="sideContainer">
            <Sidemenu></Sidemenu>
          </Col>
          <Col sm={10} className="mainContainer">
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/education" component={Education} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/contacts" component={Contacts} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}
export default App;
