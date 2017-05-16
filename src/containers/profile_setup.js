import React, { Component } from 'react';

class ProfileSetUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'test email',
      password: 'test password',
    };
  }

  render() {
    return (
      <div>
        <div>
          Profile Set Up Here
        </div>
      </div>
    );
  }
}

export default ProfileSetUp;
