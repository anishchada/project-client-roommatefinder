import React, { Component } from 'react';

class ProfileSetUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        Profile Set Up Here
      </div>
    );
  }
}

export default ProfileSetUp;
