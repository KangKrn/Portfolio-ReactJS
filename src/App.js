import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from '../src/Components/Profile/profile';
import Experience from '../src/Components/Experience/experience';
import Education from '../src/Components/Education/education';
import Skills from '../src/Components/Skills/skills';
import Contacts from '../src/Components/Contacts/contacts';
import Description from '../src/Components/Description/description';
import './Styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidemenu from './Components/Sidemenu/sidemenu';
import { HashRouter } from "react-router-dom";

const mainMenu = true;

function App() {
    return (
      <Router basename="/">
        <Sidemenu/>
        <Switch>
            <Route exact path="/" component={Description} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
      </Router>
    );
  }

export default App;
