import React, { Component } from 'react';
import './Login.css';
import { login } from '../../actions';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleUsernameChange(e) {
    const { value } = e.target;
    this.setState({ username: value });
  }

  handlePassWordChange(e) {
    const { value } = e.target;
    this.setState({ password: value });
  }

  handleLoginSubmit(e) {
    console.log('login submit hit')
    e.preventDefault()

    const { username, password } = this.state;

    this.props.login({
      username,
      password
    })

    this.setState({
      username: '',
      password: ''
    })

  }

  render() {
    console.log(this.props.auth);
    if (this.props.auth === false) {

      return (
        <div className="login-modal">
          <div className="login-container">
            <div className="login-header">KANBAN</div>
            <div className="login-title">Log in to view board</div>
            <div className="login-form-div">
              <form className="login-form">
                <div className="login-input-div">
                <label name="username login-label">Username</label>
                <input type="text" className="login-input" name="username" placeholder="username" onChange={this.handleUsernameChange} />
                </div>
                <div className="login-input-div">
                  
                <label name="password login-label">Password</label>
                <input type="password" className="login-input" name="password" placeholder="password" onChange={this.handlePassWordChange}/>
                </div>

                <button type="submit" onClick={this.handleLoginSubmit}>Log Me In!</button>
              </form>
            </div>
          </div>
        </div>
      );

    }

    else {
      return (
        <></>
      )
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.cardReducer.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user))
    }
  }
}

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default Login;
