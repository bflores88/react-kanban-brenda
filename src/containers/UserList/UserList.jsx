import React, { Component } from 'react';
import User from '../User';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const userList = this.props.users.map((user, idx) => {
      return <User key={idx} id={user.id} userName={user.first_name + ' ' + user.last_name} />;
    });

    return <> {userList} </>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.cardReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => {
      return dispatch(loadUsers());
    },
  };
};

UserList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);

export default UserList;
