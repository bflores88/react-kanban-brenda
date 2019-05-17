import React, { Component } from 'react';
import User from '../../components/User';
import { connect } from 'react-redux';
import { loadUsers } from '../../actions';


class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    console.log(this.props);
    const userList = this.props.users
      .map((user) => {
        return <User
          key={user.id}
          id={user.id}
          first_name={user.first_name}
        />

      })
    
    return (
      <>
        <form>
          <select name="users" id="users">
          {userList}
          </select>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.cardReducer.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => {
      return dispatch(loadUsers());
    }
  };
}

UserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);


export default UserList;