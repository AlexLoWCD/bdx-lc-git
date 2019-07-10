import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userRegister } from './actions';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    const { userRegister, history, location: { state } } = this.props;
    fetch('http://localhost:3000/api/auth/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
    .then(res => {
      if (res.status === 401) {
        alert('ERREUR D\'AUTHENTIFICATION ');
      } else if(res.status === 200) {
        return res.json();
      }
    })
    .then((user) => {
      userRegister(user);
      history.push(state.from.pathname);
    });

  }

  render() {
    const { login, password } = this.state;
    return (
      <div className="SignIn">
        <form onSubmit={this.submitForm}>
          <label htmlFor="login">
            Login :
            <input
              id="login"
              type="text"
              name="login"
              value={login}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Password :
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Connect me !</button>
        </form>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({ userRegister }, dispatch);

export default connect(null, mdtp)(SignIn);
