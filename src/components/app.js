import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from '../containers/landing_page';
import SignIn from '../containers/sign_in';
import ProfileSetUp from '../containers/profile_setup';
import Profile from '../containers/profile';
import Nav from './nav';
import '../style.scss';


const App = (props) => {
  console.log('in APP');
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profileSetUp" component={ProfileSetUp} />
          <Route exact path="/profile" component={Profile} />
          <Route render={() => (<div>page not found</div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
