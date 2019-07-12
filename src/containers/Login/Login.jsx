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
    e.preventDefault()

    const { username, password } = this.state;

    this.props.login({
      username,
      password
    })

    this.setState({
      username: '',
      password: '',
    })

  }

  render() {
    let errorMessage = '';
    if (this.props.auth === 'error') {
      errorMessage = "Incorrect username or password."
    }

    if (this.props.auth !== true) {

      return (
        <div className="login-modal">
          <div className="login-container">
            <div className="login-header">KANBAN</div>
            <div className="login-form-div">
            <div className="login-title">Log in to view board</div>
              <form className="login-form">
                <div className="error-message">
                  {errorMessage}
                </div>
                
                <input type="text" className="login-input" name="username" placeholder="username" onChange={this.handleUsernameChange} />
                
                <input type="password" className="login-input" name="password" placeholder="password" onChange={this.handlePassWordChange}/> 

                <button className="submit" type="submit" onClick={this.handleLoginSubmit}>Log Me In!</button>
              </form>
            </div>
            <div className="login-example">
              <p>Username: Ginger</p>
              <p>Password: abc123</p>
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
