import React, { Component } from 'react';
import './Logout.css';
import { connect } from 'react-redux';
import { logout } from '../../actions';

class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    return this.props.logout();
  }

  render() {
    return (
      <div className="logoutDiv" onClick={this.handleLogout}>
        LOGOUT
        
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.cardReducer.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

Logout = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout);

export default Logout;