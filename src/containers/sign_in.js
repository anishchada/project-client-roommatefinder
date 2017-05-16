import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'asfdf',
      password: 'asdgsdg',
    };
  }

  render() {
    return (
      <div>
        <div>
          sign up here
          email: {this.state.email}
          password: {this.state.password}
        </div>
      </div>
    );
  }
}

export default SignIn;
