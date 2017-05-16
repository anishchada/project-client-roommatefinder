import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import LandingPage from '../containers/landing_page';
import SignIn from '../containers/sign_in';
import ProfileSetUp from '../containers/profile_setup';
import Nav from './nav';
import '../style.scss';


const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profileSetUp" component={ProfileSetUp} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </div>
    </Router>
  );
};

export default App;
