import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => (
  {
    matches: state.matches,
  }
);

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Test user',
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.username}
        </div>
        <div>
          current matches: {this.props.matches}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, null)(Profile));
