import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../containers/landing_page';
import SignIn from '../containers/sign_in';
import ProfileSetUp from '../containers/profile_setup';
import Profile from '../containers/profile';
import Nav from './nav';
import '../style.scss';


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
          <Route exact path="/profile/:id" component={Profile} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
